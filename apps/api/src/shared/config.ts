import { z } from 'zod';

const envSchema = z.object({
  MONGODB_URI: z.string().min(1),
  API_PORT: z.coerce.number().int().positive(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(z.flattenError(parsed.error).fieldErrors);
  throw new Error('Invalid environment');
}

export const env = parsed.data;
