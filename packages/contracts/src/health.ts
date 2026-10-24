import { z } from 'zod';

export const healthResponseSchema = z.object({
  ok: z.literal(true),
  mongo: z.enum(['up', 'down']),
});

export type HealthResponse = z.infer<typeof healthResponseSchema>;
