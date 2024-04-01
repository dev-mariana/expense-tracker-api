import { FastifyInstance } from "fastify";
import { CreateUserDTO, createUserSchema } from "../dto/create-user.dto";
import { CreateUserService } from "../services/create-user.service";

export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  async createUser(app: FastifyInstance) {
    app.post("/api/users", async (req, reply) => {
      const { name, age, email, password } = createUserSchema.parse(req.body);

      const user = await this.createUserService.create({
        name: name,
        age: age,
        email: email,
        password: password,
      } as CreateUserDTO);

      return reply.status(201).send(user);
    });
  }
}
