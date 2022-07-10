import { createClient, RedisClientType } from 'redis'

export const createRedisInstance = (url: string) => {
  const client = createClient({ url }) as RedisClientType<any>
  return {
    async connect() {
      await client.connect()
    },
    get client() {
      return client
    },
  }
}
