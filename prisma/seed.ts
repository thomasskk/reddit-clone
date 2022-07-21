import { PrismaClient } from '@prisma/client'
import { cryptoUtils } from '../src/server/utils/crypto'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  const user = await prisma.user.create({
    data: {
      username: 'root',
      email: 'root@root.root',
      passwordHash: await cryptoUtils.hashPass('passworD$1'),
      lastLoginFromIp: 'unknown',
    },
  })

  const sub1 = await prisma.sub.create({
    data: {
      userId: user.id,
      name: 'france',
      isPrivate: false,
      title: 'France',
      description:
        'Le subreddit pour ce qui concerne la France et les Français',
      thumbnailUrl: 'http://localhost:3000/france.png',
      colorTheme: '#041033',
      isAuthorizedOnly: false,
    },
  })

  const sub2 = await prisma.sub.create({
    data: {
      userId: user.id,
      name: 'neovim',
      isPrivate: false,
      title: 'vim out of the box — http://neovim.org/',
      description: 'vim out of the box — https://neovim.io/',
      thumbnailUrl: 'http://localhost:3000/neovim.png',
      colorTheme: '#498fcb',
      isAuthorizedOnly: false,
    },
  })

  await prisma.userSub.createMany({
    data: [
      {
        userId: user.id,
        subId: sub1.id,
      },
      {
        userId: user.id,
        subId: sub2.id,
      },
    ],
  })

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
