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

  await prisma.post.createMany({
    data: [
      {
        userId: user.id,
        subId: sub1.id,
        type: 'TEXT',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        content:
          'Suspendisse in est ante in nibh mauris cursus mattis molestie. Viverra vitae congue eu consequat ac felis donec et odio. Felis donec et odio pellentesque diam volutpat commodo sed. Mattis enim ut tellus elementum sagittis vitae. Consectetur lorem donec massa sapien faucibus. Sed cras ornare arcu dui vivamus arcu. Aliquet risus feugiat in ante metus dictum at tempor. Pulvinar pellentesque habitant morbi tristique senectus et netus. Dictum varius duis at consectetur lorem donec massa. Arcu vitae elementum curabitur vitae nunc. Molestie ac feugiat sed lectus.',
      },
      {
        userId: user.id,
        subId: sub2.id,
        type: 'TEXT',
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus quam id leo in. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Lacus viverra vitae congue eu consequat ac felis donec et. Senectus et netus et malesuada fames ac. Consectetur lorem donec massa sapien. Velit laoreet id donec ultrices tincidunt arcu non sodales. Mus mauris vitae ultricies leo integer. Pharetra diam sit amet nisl suscipit. Arcu dui vivamus arcu felis bibendum ut. Semper auctor neque vitae tempus. Blandit turpis cursus in hac habitasse. Urna id volutpat lacus laoreet non curabitur.',
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
