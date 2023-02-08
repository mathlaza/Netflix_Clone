// cliente que interage com o banco de dados
// É basicamente o connection do mysql ou os models
// findOne, findByPk do sequelize

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ['query', 'error'] });

export { prisma };
