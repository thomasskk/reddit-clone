import * as z from 'myzod'
import { authedProcedure } from '../middlewares'
import { db } from '../prisma'
import { procedure, trpc } from '../trpc'

export const subRouter = trpc.router({
  //////////////////////////////////////////
  getSub: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(async ({ input }) => {
      return db.sub.findFirstOrThrow({
        where: { name: input.name },
        select: {
          thumbnailUrl: true,
          id: true,
          colorTheme: true,
          description: true,
          creationDate: true,
          memberCount: true,
          title: true,
          name: true,
        },
      })
    }),
  //////////////////////////////////////////
  suscribre: authedProcedure
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
  unsuscribe: authedProcedure
    .input(z.object({ subId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      await db.userSub.delete({
        where: {
          userId_subId: {
            subId: input.subId,
            userId: ctx.session!.user.id,
          },
        },
      })
    }),
  //////////////////////////////////////////
  updateFavorites: authedProcedure
    .input(z.object({ subId: z.string(), favorite: z.boolean() }))
    .mutation(async ({ input, ctx }) => {
      await db.userSub.update({
        data: {
          isFavorite: input.favorite,
        },
        where: {
          userId_subId: {
            subId: input.subId,
            userId: ctx.session!.user.id,
          },
        },
      })
    }),
})
