import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository"
import { FetchPetByCityService } from "../fetch-pet-by-city"

export function makeGetPetByCityService() {
  const petRepository = new PrismaPetsRepository()
  const service = new FetchPetByCityService(petRepository)

  return service
}