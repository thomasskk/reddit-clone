import { procedure, trpc } from '../trpc'
import { authedProcedure } from '../middlewares'
import { registerSchema } from '~/common/validation/auth'
import * as z from 'myzod'
import { db } from '../prisma'
import { AuthService } from '../services/auth'
import { TrackerService } from '../services/tracker'

export const authRouter = trpc.router({
  //////////////////////////////////////////
  me: authedProcedure.query(() => {}),
  //////////////////////////////////////////
  register: procedure.input(registerSchema).mutation(async ({ input, ctx }) => {
    await AuthService(ctx).register(input)
  }),
  //////////////////////////////////////////
  checkUserField: procedure
    .input(
      z.object({
        key: z.literals('username', 'email'),
        value: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const user = await db.user.findFirst({
        where: { [input.key]: input.value },
      })
      return { exist: !!user }
    }),
  //////////////////////////////////////////
  login: authedProcedure.mutation(async ({ ctx }) => {
    await db.user.update({
      where: { id: ctx.session!.user.id },
      data: {
        lastLoginFromIp: TrackerService(ctx).getIp(),
        lastLoginDate: new Date(),
      },
    })
  }),
})
