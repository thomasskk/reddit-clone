import * as z from 'myzod'
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
})
