import { CookieSerializeOptions } from '@fastify/cookie'
import { RedisClientType } from 'redis'

export type SecretKey = Buffer | string | (Buffer | string)[]

export type SessionOptions = {
  id?: string
  cookie?: CookieSerializeOptions
}

export type FastifySessionOptions = {
  cookieOptions: CookieSerializeOptions
  secret: string
  store: RedisClientType<any, any>
  duration: number
}

export type JsonValue = string | number | boolean | null | JsonObject
export type JsonObject = { [Key in string]?: JsonValue | JsonValue[] }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SessionData extends JsonObject {}
