import { router } from '@trpc/server'
import { Context, Meta } from './context'

export const createRouter = () => {
  return router<Context, Meta>()
}
