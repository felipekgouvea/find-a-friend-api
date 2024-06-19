import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { PetAlreadyExistsError } from "@/services/errors/pet-already-exists-error";
import { RegisterService } from "@/services/register-pet-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function register(request: FastifyRequest, reply: FastifyReply) {

  const registerBodySchema = z.object({
    name: z.string(),
    about: z.string(),        
    age: z.string(),          
    size: z.string(),         
    energy_level: z.string(), 
    environment: z.string(),
    orgId: z.string(),
  })

  const { name, about, age, size, energy_level, environment, orgId } = registerBodySchema.parse(request.body)

  try {
    const prismaPetRepository = new PrismaPetsRepository()
    const registerService = new RegisterService(prismaPetRepository)

    await registerService.execute({
      name,
      about,
      age,
      size,
      energy_level,
      environment,
      orgId,
    })
  } catch (error) {
    if(error instanceof PetAlreadyExistsError){
      return reply.status(409).send({
        message: error.message
      })
    }

    throw error
  }

  return reply.status(201).send()
}