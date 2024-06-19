import { makeGetPetByCityService } from "@/services/factories/make-fetch-pets-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function pet(request: FastifyRequest, reply: FastifyReply) {
  const petsQuerySchema = z.object({
    city: z.string(),
  })

  const { city } = petsQuerySchema.parse(request.query)

  const getPetsByCityService = makeGetPetByCityService()

  const { pets } = await getPetsByCityService.execute({
    city,
  })
 
  return reply.status(200).send({
    pets,
  })
}