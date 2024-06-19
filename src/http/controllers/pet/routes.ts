import { FastifyInstance } from "fastify";
import { register } from "./register.controller";
import { pet } from "./pet.controller";
import { characteristic } from "./characteristic";

export async function petRoutes(app: FastifyInstance) {
  app.post('/pets', register)
  app.get('/pets/city', pet)
  app.get('/pets/characteristic', characteristic)
}