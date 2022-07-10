import { Command } from 'commander'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import pkg from 'pg'
const { Pool } = pkg
import {
  Kysely,
  Migrator,
  PostgresDialect,
  FileMigrationProvider,
} from 'kysely'

import * as dotenv from 'dotenv'
dotenv.config()

const program = new Command()

const dirname = path.dirname(fileURLToPath(import.meta.url))

program.name('migration')

program
  .option('-c, --create <char>')
  .action((args, options) => {
    fs.copyFile(
      path.join(dirname, 'skeleton.ts'),
      path.join(dirname, '../migrations', `${Date.now()}-${args.create}.ts`),
      () => null
    )
  })
  .option('-m, --migrate')
  .action(async () => {
    const db = new Kysely({
      dialect: new PostgresDialect({
        pool: new Pool({
          host: '127.0.0.1',
          port: +process.env.PG_PORT,
          user: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
        }),
      }),
    })

    const migrator = new Migrator({
      db,
      provider: new FileMigrationProvider({
        fs: fs.promises,
        path,
        migrationFolder: path.join(dirname, '../migrations'),
      }),
    })

    const { results, error } = await migrator.migrateToLatest()

    results?.forEach((it) => {
      if (it.status === 'Success') {
        console.log(`migration "${it.migrationName}" was executed successfully`)
      } else if (it.status === 'Error') {
        console.error(`failed to execute migration "${it.migrationName}"`)
      }
    })

    if (error) {
      console.error('failed to migrate')
      console.error(error)
      process.exit(1)
    }

    await db.destroy()
  })

program.parse()
