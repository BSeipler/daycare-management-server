import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser() {
  return await prisma.user.create({
    data: {
      email: "bseipler@yahoo.com",
      first_name: "blake",
      last_name: "seipler",
    },
  });
}
