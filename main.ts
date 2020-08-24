import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();

  const data = await prisma.post.findMany({
    where: {
      morePosts: {
        some: {
          title: {
            equals: "my",
          },
        },
      },
    },
  });
  console.log(data);
  prisma.$disconnect();
}

main();
