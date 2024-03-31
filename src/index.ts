import * as dotenv from "dotenv";
import fastify from "fastify";

dotenv.config();

const app = fastify();

app.get("/api", async (request, reply) => {
  return "Hello World!";
});

const port = process.env.PORT || 8080;

app.listen({ port: Number(port) }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`Server is running!`);
});
