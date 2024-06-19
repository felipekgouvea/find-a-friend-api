import { PetsRepository } from "@/repositories/pet.repository"
import { Pet } from "@prisma/client"

interface SearchPetsByCharacteristicServiceRequest{
  age: string,
  energy_level: string,
  size: string, 
}

interface SearchPetsByCharacteristicServiceResponse{
  pets: Pet[]
}

export class SearchPetsByCharacteristicService{
  constructor(private petRepository: PetsRepository){}

  async execute({ age, energy_level, size }: SearchPetsByCharacteristicServiceRequest): Promise<SearchPetsByCharacteristicServiceResponse>{
    const pets = await this.petRepository.searchForAnimalsByCharacteristic(age, energy_level, size)

    return{
      pets
    }
  }
}