import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userService = {
  register: async () => {
    try {
      return await prisma.user.create({
        data: {
          email: "bseipler@yahoo.com",
          first_name: "blake",
          last_name: "seipler",
        },
      });
    } catch (error: any) {
      console.log(error.message);
    }
  },
};

export default userService;
