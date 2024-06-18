import { makeRegisterPetService } from "@/services/factories/make-fetch-pets-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function pet(request: FastifyRequest, reply: FastifyReply) {
  const petsBodySchema = z.object({
    city: z.string(),
  })

  const { city } = petsBodySchema.parse(request.body)

  const fetchPetsService = makeRegisterPetService()

  const { pets } = await fetchPetsService.execute({
    city
  })
 
  return reply.status(200).send({
    pets,
  })
}