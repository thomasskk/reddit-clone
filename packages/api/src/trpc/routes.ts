import { TRPCError } from '@trpc/server'
import { createRouter } from './createRouter'
import superjson from 'superjson'
import { log } from '../app'

export const appRouter = createRouter()
  .transformer(superjson)
  .middleware(async ({ path, type, next }) => {
    const start = Date.now()
    const res = await next()
    const duration = Date.now() - start

    if (res.ok) {
      log.info(`${type.toUpperCase()} | ${path} | ${duration}ms`)
    }

    return res
  })
  .middleware(({ ctx, next, meta }) => {
    if (meta?.auth && !ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }
    return next()
  })

export type AppRouter = typeof appRouter
