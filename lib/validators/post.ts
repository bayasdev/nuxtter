import { z } from 'zod';

export const PostValidator = z.object({
  title: z
    .string({ required_error: 'El titulo es requerido' })
    .min(3, 'El titulo debe tener al menos 3 caracteres'),
  content: z
    .string({ required_error: 'El contenido es requerido' })
    .min(3, 'El contenido debe tener al menos 3 caracteres')
    .max(140, 'El contenido debe tener como máximo 140 caracteres'),
});

export type PostValidatorType = z.infer<typeof PostValidator>;
