import { PetsRepository } from "@/repositories/pet.repository"
import { Pet } from "@prisma/client"
import { ResourceNotFoundError } from "./errors/resource-not-found-error"

interface GetPetDetailsServiceRequest{
  petId: string  
}

interface GetPetDetailsServiceResponse{
  pet: Pet
}

export class GetPetDetailsService{
  constructor(private petRepository: PetsRepository){}

  async execute({ 
    petId 
  }: GetPetDetailsServiceRequest): Promise<GetPetDetailsServiceResponse>{
    const pet = await this.petRepository.findById(petId)

    if(!pet){
      throw new ResourceNotFoundError()
    }

    return{
      pet,
    }
  }
}