import Fastify from "fastify";
import cors from "@fastify/cors";
import { prisma } from "./lib/prisma";
import { appRoutes } from "./lib/routes";

const app = Fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 8081,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
