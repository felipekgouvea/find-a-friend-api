import { Pet, Prisma } from "@prisma/client";

export interface PetsRepository{
  create(data: Prisma.PetUncheckedCreateInput) : Promise<Pet>
  findManyByPetCity(city: string): Promise<Pet[]>
  findById(petId: string): Promise<Pet | null>
  searchForAnimalsByCharacteristic(age: string, energy_level: string, size: string): Promise<Pet[]>
}