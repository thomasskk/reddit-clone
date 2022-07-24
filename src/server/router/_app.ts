import { trpc } from '../trpc'
import { authRouter } from './auth'
import { userRouter } from './user'
import { subRouter } from './sub'
import { searchRouter } from './search'
import { postRouter } from './post'

export const appRouter = trpc.router({
  auth: authRouter,
  user: userRouter,
  sub: subRouter,
  search: searchRouter,
  post: postRouter,
})

export type AppRouter = typeof appRouter
