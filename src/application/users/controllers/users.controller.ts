import { FastifyInstance } from "fastify";
import { createUserSchema } from "../dto/create-user.dto";
import { UsersService } from "../services/users.service";

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async createUser(app: FastifyInstance) {
    app.post("/api/users", async (req, reply) => {
      const { name, age, email, password } = createUserSchema.parse(req.body);

      const user = await this.usersService.create({
        name: name,
        age: age,
        email: email,
        password: password,
      });

      return reply.status(201).send(user);
    });
  }
}
