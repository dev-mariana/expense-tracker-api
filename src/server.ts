import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
import fastify from "fastify";
import { CreateUserController } from "./application/users/controllers/create-user.controller";
import { CreateUserService } from "./application/users/services/create-user.service";
import { UsersRepository } from "./infra/database/prisma/repositories/users.repository";

dotenv.config();

const app = fastify();

const port = process.env.PORT || 8080;

const prisma = new PrismaClient();
const usersRepository = new UsersRepository(prisma);
const createUserService = new CreateUserService(usersRepository);
const createUserController = new CreateUserController(createUserService);

createUserController.createUser(app);

app.listen({ port: Number(port) }).then(() => {
  console.log("Server is running!");
});
