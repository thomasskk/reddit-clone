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
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      await db.userSub.delete({
        where: {
          userId: input.id,
        },
      })
    }),
  //////////////////////////////////////////
  updateFavorites: authedProcedure
    .input(z.object({ id: z.string(), favorite: z.boolean() }))
    .mutation(async ({ input }) => {
      await db.userSub.update({
        data: {
          isFavorite: input.favorite,
        },
        where: {
          userId: input.id,
        },
      })
    }),
})
