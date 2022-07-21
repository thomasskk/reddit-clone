/**
 * This file contains the root router of your tRPC-backend
 */
import { trpc } from '../trpc'
import { authRouter } from './auth'
import { userRouter } from './user'
import { subRouter } from './sub'

export const appRouter = trpc.router({
  auth: authRouter,
  user: userRouter,
  sub: subRouter,
})

export type AppRouter = typeof appRouter
