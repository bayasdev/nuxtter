import { prisma } from '@/lib/db';

export default defineEventHandler(async (event) => {
  const id = event.context?.params?.id as string;

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return {
    post,
  };
});
