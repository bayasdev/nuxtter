import { z } from 'zod';
import { prisma } from '@/lib/db';
import { PostValidator } from '@/lib/validators/post';

export default defineEventHandler(async (event) => {
  const id = event.context?.params?.id as string;

  try {
    const body = await readBody(event);
    const { title, content } = PostValidator.parse(body);

    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    return {
      post,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      setResponseStatus(event, 422);

      return {
        issues: error.issues,
      };
    }
  }
});
