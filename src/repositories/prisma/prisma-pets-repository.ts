import { Prisma } from "@prisma/client";
import { PetsRepository } from "../pet.repository";
import { prisma } from "@/lib/prisma";

export class PrismaPetsRepository implements PetsRepository{
  async create(data: Prisma.PetUncheckedCreateInput){
    const pet = await prisma.pet.create({
      data
    })
    return pet
  }

async findManyByPetCity(city: string){
  const pets = await prisma.pet.findMany({
    where: {
      org: {
        city
      } 
    }
  })
  
  return pets
  }

} 