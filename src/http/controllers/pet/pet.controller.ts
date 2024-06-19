import { makeGetPetByCityService } from "@/services/factories/make-fetch-pets-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function pet(request: FastifyRequest, reply: FastifyReply) {
  const petsQuerySchema = z.object({
    query: z.string(),
  })

  const { query } = petsQuerySchema.parse(request.query)

  const fetchPetsService = makeGetPetByCityService()

  const { pets } = await fetchPetsService.execute({
    query,
  })
 
  return reply.status(200).send({
    pets,
  })
}