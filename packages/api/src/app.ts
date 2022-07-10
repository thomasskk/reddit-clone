import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import {
  fastify as Fastify,
  FastifyInstance,
  FastifyLoggerInstance,
} from 'fastify'
import { Generated, Kysely, PostgresDialect } from 'kysely'
import * as z from 'myzod'
import { Pool } from 'pg'
import { createContext } from './trpc/context'
import { fastifySession } from './plugins/sessions'
import { createClient, RedisClientType } from 'redis'
import { appRouter } from './trpc/routes'
import * as dotenv from 'dotenv'
dotenv.config()

interface Person {
  id: Generated<number>
  first_name: string
  last_name: string | null
}

interface Database {
  person: Person
}

export const isEnvDev = process.env.NODE_ENV === 'development'
export const isEnvTest = process.env.NODE_ENV === 'test'
export const isEnvProd = process.env.NODE_ENV === 'production'
export const isEnvCI = process.env.NODE_ENV === 'CI'

export let log: FastifyLoggerInstance

export const builder = async (fastify: FastifyInstance) => {
  try {
    log = fastify.log

    process
      .on('unhandledRejection', (reason, p) => {
        log.error('Unhandled Rejection', reason, p)
      })
      .on('uncaughtException', (error) => {
        log.fatal('received uncaught exception, shutting down', { error })
        fastify.close().then(() => {
          process.exit(1)
        })
      })

    const redisClient: RedisClientType<any> = createClient({
      url: process.env.REDIS_URI,
    })

    await redisClient.connect()

    const db = new Kysely<Database>({
      dialect: new PostgresDialect({
        pool: new Pool({
          host: '127.0.0.1',
          port: +process.env.PG_PORT!,
          user: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
        }),
      }),
    })

    await fastify.register(fastifyTRPCPlugin, {
      prefix: '',
      trpcOptions: {
        router: appRouter,
        createContext,
        onError({ error, type, path }) {
          fastify.log.error(`${type.toUpperCase()} | ${path} | ${error.stack}`)
        },
      },
    })

    await fastify.register(fastifySession, {
      cookieOptions: {
        path: '/',
        httpOnly: true,
        secure: !isEnvTest,
        sameSite: isEnvProd || isEnvTest ? 'lax' : 'none',
      },
      duration: 60 * 30,
      store: redisClient,
      secret: process.env.SESSION_SECRET!,
    })

    fastify.setErrorHandler(async (error, req, res) => {
      if (error instanceof z.ValidationError) {
        return res.code(400).send()
      }

      return res.code(500).send()
    })

    return fastify
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

const instance = await builder(
  Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: { destination: 1 },
      },
    },
    maxParamLength: 5000,
    disableRequestLogging: process.env.NODE_ENV === 'production',
  })
)

export const viteNodeApp = instance
