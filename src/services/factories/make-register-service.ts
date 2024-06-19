import { PrismaOrgsRepository } from '@/repositories/prisma/prisma-orgs-repository'
import { RegisterService } from '../register-org-service'

export function makeRegisterService() {
  const orgsRepository = new PrismaOrgsRepository()
  const registerService = new RegisterService(orgsRepository)

  return registerService
}