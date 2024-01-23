import { z } from 'zod';
import { prisma } from '@/lib/db';
import { PostValidator } from '@/lib/validators/post';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const { title, content } = PostValidator.parse(body);

    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    setResponseStatus(event, 201);

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
