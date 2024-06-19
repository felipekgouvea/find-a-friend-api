import { makeGetPetByCharacteristicService } from "@/services/factories/make-search-pets-characteristic-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function characteristic(request: FastifyRequest, reply: FastifyReply) {
  const petsQuerySchema = z.object({
    age: z.string(),
    energy_level:z.string(),
    size:z.string(),
  })

  const { age, energy_level, size } = petsQuerySchema.parse(request.query)

  const fetchPetsService = makeGetPetByCharacteristicService()

  const { pets } = await fetchPetsService.execute({
    age,
    energy_level,
    size
  })
 
  return reply.status(200).send({
    pets,
  })
}