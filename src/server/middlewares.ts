import { TRPCError } from '@trpc/server'
import { procedure, trpc } from './trpc'

export const authedProcedure = procedure.use(
  trpc.middleware(({ ctx, next }) => {
    if (!ctx.session) {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next()
  })
)
