import * as z from 'myzod'
import { db } from '../prisma'
import { SearchService } from '../services/search'
import { procedure, trpc } from '../trpc'

export const searchRouter = trpc.router({
  //////////////////////////////////////////
  global: procedure
    .input(
      z.object({ term: z.string().max(100), take: z.number().min(1).max(100) })
    )
    .mutation(({ input }) =>
      db.sub.findMany({
        where: {
          name: { startsWith: input.term },
        },
        orderBy: {
          memberCount: 'desc',
        },
        take: input.take,
      })
    ),
  //////////////////////////////////////////
  trendingPosts: procedure
    .input(
      z.object({
        days: z.number().min(1).max(30),
        hours: z.number().min(0).max(23),
        take: z.number().min(1).max(100),
      })
    )
    .query(({ input }) => SearchService().getTrendingPosts(input)),
})
