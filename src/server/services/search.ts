import { Temporal } from '@js-temporal/polyfill'
import { db } from '../prisma'
import nlp from 'compromise'

export const SearchService = () => {
  return {
    async getTrendingPosts(input: {
      take: number
      days: number
      hours: number
    }) {
      const date = Temporal.Now.instant()
        .subtract({
          hours: input.hours + input.days * 24,
        })
        .toString()

      const posts = await db.post.findMany({
        where: {
          creationDate: { gte: date },
        },
        orderBy: [{ upCount: 'desc' }, { views: 'desc' }],
        select: {
          id: true,
          title: true,
          content: true,
          sub: {
            select: {
              name: true,
              thumbnailUrl: true,
            },
          },
        },
        take: input.take,
      })

      return posts.map((post) => {
        const three = nlp(post.title)
        return {
          post,
          keywords:
            three.people().text() ||
            three.topics().text() ||
            three.places().text() ||
            three.nouns(1).text(),
        }
      })
      //////////////////////////////////////////
    },
  }
}
