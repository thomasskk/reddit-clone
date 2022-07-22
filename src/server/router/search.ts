import * as z from 'myzod'
import { db } from '../prisma'
import { procedure, trpc } from '../trpc'

export const searchRouter = trpc.router({
  //////////////////////////////////////////
  global: procedure
    .input(z.string().max(100))
    .mutation(async ({ input }) => {}),
  //////////////////////////////////////////
  trendingGlobal: procedure.query(async () => {
    await db.post.findMany({
      take: 5,
      orderBy: { creationDate: 'desc', upCount: 'desc' },
      select: {
        id: true,
        title: true,
        sub: {
          select: {
            name: true,
          },
        },
      },
    })
  }),
})
