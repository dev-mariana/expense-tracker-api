import * as dotenv from "dotenv";
import fastify from "fastify";
import { UsersController } from "./application/users/controllers/users.controller";
import { UsersService } from "./application/users/services/users.service";
import { prisma } from "./infra/database/prisma/prisma";
import { UsersRepository } from "./infra/database/prisma/repositories/users/users.repository";

dotenv.config();

const app = fastify();

const port = process.env.PORT || 8080;

const usersRepository = new UsersRepository(prisma);
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);

usersController.createUser(app);

app.listen({ port: Number(port) }).then(() => {
  console.log("Server is running!");
});
