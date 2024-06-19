import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository"
import { FetchPetByCityService } from "../fetch-pet-by-city"
import { SearchPetsByCharacteristicService } from "../search-pets-by-characteristic"

export function makeGetPetByCharacteristicService() {
  const petRepository = new PrismaPetsRepository()
  const service = new SearchPetsByCharacteristicService(petRepository)

  return service
}