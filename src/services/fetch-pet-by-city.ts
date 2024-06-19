import { PetsRepository } from "@/repositories/pet.repository"
import { Pet } from "@prisma/client"

interface FetchPetByCityServiceRequest{
  city: string  
}

interface FetchPetByCityServiceResponse{
  pets: Pet[]
}

export class FetchPetByCityService{
  constructor(private petRepository: PetsRepository){}

  async execute({ city }: FetchPetByCityServiceRequest): Promise<FetchPetByCityServiceResponse>{
    const pets = await this.petRepository.findManyByPetCity(city)

    return{
      pets
    }
  }
}