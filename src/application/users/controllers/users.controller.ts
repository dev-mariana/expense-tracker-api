import { FastifyInstance } from 'fastify';
import { createUserSchema } from '../dto/create-user.dto';
import { getUserByEmailSchema } from '../dto/get-user-by-email.dto';
import { UsersService } from '../services/users.service';

export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  async createUser(app: FastifyInstance) {
    app.post('/api/users', async (req, reply) => {
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

  async findUsers(app: FastifyInstance) {
    app.get('/api/users', async (req, reply) => {
      const users = await this.usersService.findAll();

      return reply.status(200).send(users);
    });
  }

  async findUserByEmail(app: FastifyInstance) {
    app.get('/api/users/:email', async (req, reply) => {
      const { email } = getUserByEmailSchema.parse(req.params);
      const user = await this.usersService.findByEmail(email);

      return reply.status(200).send(user);
    });
  }
}
