import { z } from 'zod';

export const getUserByEmailSchema = z.object({
  email: z.string().email(),
});

export type GetUserByEmailDTO = z.infer<typeof getUserByEmailSchema>;
