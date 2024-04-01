import { FastifyInstance } from "fastify";
import { prisma } from "../../infra/database/prisma";
import { createUserSchema } from "./dto/create-user.dto";

export async function createUser(app: FastifyInstance) {
  app.post("/api/users", async (req, reply) => {
    const { name, age, email, password } = createUserSchema.parse(req.body);

    const user = await prisma.user.create({
      data: {
        name,
        age,
        email,
        password,
        created_at: new Date(),
      },
    });

    return reply.status(201).send(user);
  });
}
