import { makeGetPetDetailsService } from "@/services/factories/make-get-pet-details";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function details(request: FastifyRequest, reply: FastifyReply) {
  const petsDetailsQuerySchema = z.object({
    petId: z.string(),
  })

  const { petId } = petsDetailsQuerySchema.parse(request.query)

  const fetchPetDetailsService = makeGetPetDetailsService()

  const { pet } = await fetchPetDetailsService.execute({
    petId,
  })
 
  return reply.status(200).send({
    pet,
  })
}