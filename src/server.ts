import * as dotenv from "dotenv";
import fastify from "fastify";
import { createUser } from "./application/users/create-user";

dotenv.config();

const app = fastify();

const port = process.env.PORT || 8080;

app.register(createUser);

app.listen({ port: Number(port) }).then(() => {
  console.log("Server is running!");
});
