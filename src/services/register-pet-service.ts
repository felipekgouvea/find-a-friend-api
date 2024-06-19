import { PetsRepository } from "@/repositories/pet.repository"

interface RegisterServiceRequest{
  name: string,
  about: string,        
  age: string,          
  size: string,         
  energy_level: string, 
  environment: string,
  orgId: string,
}

export class RegisterService {

  constructor(private petsRepository: PetsRepository){}

  async execute({ name, about, age, size, energy_level, environment, orgId}:RegisterServiceRequest){
  
    const pet = await this.petsRepository.create({
      name, 
      about,
      age,
      size,
      energy_level,
      environment,
      org_id: orgId
    })
    return{
      pet
    }
  }
}