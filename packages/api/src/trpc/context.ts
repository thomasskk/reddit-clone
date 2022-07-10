import { inferAsyncReturnType } from '@trpc/server'
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'

export interface Meta {
  auth?: boolean
}

export function createContext({ req, res }: CreateFastifyContextOptions) {
  const session = req.session
  return { req, res, session }
}

export type Context = inferAsyncReturnType<typeof createContext>
