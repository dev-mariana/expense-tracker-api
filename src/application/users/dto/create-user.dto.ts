import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email().min(6),
  password: z.string().min(6),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
