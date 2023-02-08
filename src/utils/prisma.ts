// cliente que interage com o banco de dados

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export { prisma };
