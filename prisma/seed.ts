import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'title one' },
    update: {},
    create: {
      title: 'title one',
      body: 'body one',
      description: 'description one',
      published: false,
    },
  });
  const post2 = await prisma.article.upsert({
    where: { title: 'title two' },
    update: {},
    create: {
      title: 'title two',
      body: 'body two',
      description: 'description two',
      published: true,
    },
  });

  console.log({ post1, post2 });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
