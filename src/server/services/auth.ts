import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { TRPCError } from '@trpc/server'
import { inferMutationInput } from '~/utils/trpc'
import { Context } from '../context'
import { db } from '../prisma'
import { cryptoUtils } from '../utils/crypto'
import { TrackerService } from './tracker'

export const AuthService = (ctx: Context) => {
  return {
    //////////////////////////////////////////
    async register(input: inferMutationInput<'auth.register'>) {
      const passwordHash = await cryptoUtils.hashPass(input.password)
      const ip = TrackerService(ctx).getIp()
      try {
        await db.user.create({
          data: {
            username: input.username,
            passwordHash,
            lastLoginFromIp: ip,
            email: input.email,
          },
        })
      } catch (error) {
        if (
          error instanceof PrismaClientKnownRequestError &&
          error.code === 'P2002'
        ) {
          const target = (error?.meta as any)?.target?.[0]
          if (target) {
            throw new TRPCError({
              code: 'CONFLICT',
              message: `${
                target === 'email' ? 'Email' : 'Username'
              } already exists`,
            })
          }
        }
        throw error
      }
    },
    //////////////////////////////////////////
  }
}
