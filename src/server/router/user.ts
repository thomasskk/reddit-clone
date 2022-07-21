import * as z from 'myzod'
import { authedProcedure } from '../middlewares'
import { db } from '../prisma'
import { trpc } from '../trpc'

export const userRouter = trpc.router({
  //////////////////////////////////////////
  getSubs: authedProcedure.query(async ({ ctx }) => {
    return db.userSub.findMany({
      where: { userId: ctx.session!.user.id },
      select: {
        sub: {
          select: {
            title: true,
            name: true,
            thumbnailUrl: true,
          },
        },
        isFavorite: true,
        isModerator: true,
        id: true,
      },
    })
  }),
  //////////////////////////////////////////
  addSub: authedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await db.userSub.create({
        data: {
          userId: ctx.session!.user.id,
          subId: input.id,
        },
      })
    }),
  //////////////////////////////////////////
  removeSub: authedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await db.userSub.delete({
        where: {
          id: input.id,
        },
      })
    }),
  //////////////////////////////////////////
  updateFavoriteSub: authedProcedure
    .input(z.object({ id: z.string(), favorite: z.boolean() }))
    .mutation(async ({ input }) => {
      await db.userSub.update({
        data: {
          isFavorite: input.favorite,
        },
        where: {
          id: input.id,
        },
      })
    }),
})
