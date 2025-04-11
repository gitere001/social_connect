const { PrismaClient } = require('../../generated/prisma');

// Create a single PrismaClient instance
const prisma = new PrismaClient({
 
});

// Handle graceful shutdown
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

module.exports = prisma;
