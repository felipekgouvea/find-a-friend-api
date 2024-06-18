import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { OrgsRepository } from "../org.repository";

export class PrismaOrgsRepository implements OrgsRepository{
  async create(data: Prisma.OrgCreateInput){
    const org = await prisma.org.create({
      data
    })
    return org
  }
} 