import { prisma } from '@/lib/db';

export default defineEventHandler(async (event) => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return {
    posts,
  };
});
