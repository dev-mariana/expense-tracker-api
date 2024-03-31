import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../../infra/database/prisma";

export async function createUser(app: FastifyInstance) {
  app.post("/api/users", async (req, reply) => {
    const createUserBody = z.object({
      name: z.string(),
      age: z.number(),
      email: z.string().email().min(6),
      password: z.string().min(6),
    });

    const { name, age, email, password } = createUserBody.parse(req.body);

    if (email) {
      reply.status(409);
      throw new Error("Email already exists!");
    }

    const user = await prisma.user.create({
      data: {
        name,
        age,
        email,
        password,
        created_at: new Date(),
      },
    });

    return reply.status(201).send({ user });
  });
}
