import { OrgsRepository } from "@/repositories/org.repository"
import { Org } from "@prisma/client"

interface RegisterServiceRequest{
  name: string,        
  author_name: string,
  email: string,
  whatsapp: string,
  password: string,

  cep: string,
  state: string,
  city: string,
  neighborhood: string,
  street: string,

  latitude: number
  longitude: number
}

interface RegisterServiceResponse {
  org: Org
}

export class RegisterService {

  constructor(private orgsRepository: OrgsRepository){}

  async execute({ name, author_name, email, whatsapp, password, cep, state, city, neighborhood, street, longitude, latitude}:RegisterServiceRequest):Promise<RegisterServiceResponse>{
  
    const org = await this.orgsRepository.create({
      name,
      author_name,
      email,
      whatsapp,
      password,
      cep,
      state,
      city,
      neighborhood,
      street, 
      longitude,
      latitude,      
    })
    return{
      org
    }
  }
}