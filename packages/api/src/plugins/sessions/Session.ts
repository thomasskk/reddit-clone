import crypto from 'crypto'
import { FastifyReply } from 'fastify'
import { CookieSerializeOptions } from '@fastify/cookie'
import { RedisClientType } from 'redis'
import { sign, verify } from './crypto'
import { FastifySessionOptions, SessionData, SessionOptions } from './type'
import { TRPCError } from '@trpc/server'

export class Session {
  static readonly prefix = 'sess:'
  static readonly cookieName = 'sess'
  static readonly blockListName = 'blockedUserId'

  private static secretKey: string
  private static redisClient: RedisClientType<any, any>
  private static duration: number
  private static cookieOptions: CookieSerializeOptions

  readonly id: string

  touched = false
  created = true
  deleted = false
  data: SessionData

  static configure({
    cookieOptions,
    store,
    secret,
    duration,
  }: FastifySessionOptions) {
    Session.secretKey = secret
    Session.redisClient = store
    Session.cookieOptions = cookieOptions
    Session.duration = duration
  }

  constructor(data: SessionData, options: SessionOptions = {}) {
    const { id = crypto.randomUUID() } = options
    this.data = data
    this.id = id
  }

  static async fromCookie(cookieValue: string) {
    const id = await verify(cookieValue, this.secretKey)

    const sessionId = this.prefix + id
    const dataRes = await Session.redisClient.getEx(sessionId, {
      EX: Session.duration,
    })

    if (!dataRes) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    const data = JSON.parse(dataRes)

    const isBlocked = await Session.redisClient.sIsMember(
      Session.blockListName,
      data.id
    )

    if (isBlocked) {
      await Session.redisClient.unlink(sessionId)
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    const session = new Session(data, {
      id,
    })

    session.touched = true

    return session
  }

  blockUser(userID: string) {
    return Session.redisClient.sAdd(Session.blockListName, userID)
  }

  unblockUser(userID: string) {
    return Session.redisClient.sRem(Session.blockListName, userID)
  }

  toCookie() {
    return sign(this.id, Session.secretKey)
  }

  touchCookie(res: FastifyReply, cookieValue: string) {
    res.setCookie(Session.cookieName, cookieValue, {
      ...Session.cookieOptions,
      maxAge: Session.duration,
    })
  }

  async setCookie(res: FastifyReply) {
    res.setCookie(Session.cookieName, await this.toCookie(), {
      ...Session.cookieOptions,
      maxAge: Session.duration,
    })
  }

  static clearCookie(res: FastifyReply) {
    res.setCookie(this.cookieName, '', {
      ...Session.cookieOptions,
      maxAge: 0,
    })
  }

  async destroy() {
    this.deleted = true
    await Session.redisClient.unlink(this.key)
  }

  async save() {
    await Session.redisClient.setEx(
      this.key,
      Session.duration,
      JSON.stringify(this.data)
    )
  }

  get key() {
    return Session.prefix + this.id
  }
}
