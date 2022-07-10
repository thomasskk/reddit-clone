import { FastifyPluginAsync } from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import { Session } from './Session'
import { FastifySessionOptions } from './type'
export { Session } from './Session'
export type { FastifySessionOptions, SessionData } from './type'

declare module 'fastify' {
  interface FastifyRequest {
    session: Session
    destroySession: () => Promise<void>
  }
}

const plugin: FastifyPluginAsync<FastifySessionOptions> = async (
  fastify,
  options
) => {
  Session.configure(options)

  fastify.decorateRequest('session', null)

  fastify.decorateRequest('destroySession', async function () {
    await this?.session?.destroy()
  })

  fastify.addHook('onRequest', async (req, res) => {
    const cookieValue = req.cookies[Session.cookieName]

    if (cookieValue) {
      try {
        req.session = await Session.fromCookie(cookieValue)
      } catch (error) {
        Session.clearCookie(res)
      }
    }
  })

  fastify.addHook('onSend', async (req, res) => {
    const { session } = req

    if (!session) {
      return
    }

    if (session.deleted) {
      return Session.clearCookie(res)
    }

    if (session.touched) {
      return session.touchCookie(res, req.cookies[Session.cookieName])
    }

    if (session.created) {
      return session.setCookie(res)
    }
  })
}

export const fastifySession = fastifyPlugin(plugin)
