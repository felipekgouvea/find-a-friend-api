import { PetsRepository } from "@/repositories/pet.repository"
import { Pet } from "@prisma/client"

interface FetchPetByCityServiceRequest{
  query: string  
}

interface FetchPetByCityServiceResponse{
  pets: Pet[]
}

export class FetchPetByCityService{
  constructor(private petRepository: PetsRepository){}

  async execute({ query }: FetchPetByCityServiceRequest): Promise<FetchPetByCityServiceResponse>{
    const pets = await this.petRepository.findManyByPetCity(query)

    return{
      pets
    }
  }
}