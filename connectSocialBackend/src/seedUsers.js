const prisma = require('./config/prismaConfig');
const bcrypt = require('bcrypt');

const fakeUsers = [
  { username: 'maria', email: 'maria@example.com' },
  { username: 'david', email: 'david@example.com' },
  { username: 'lucy', email: 'lucy@example.com' },
  { username: 'frank', email: 'frank@example.com' },
  { username: 'ruth', email: 'ruth@example.com' },
  { username: 'tony', email: 'tony@example.com' },
  { username: 'eva', email: 'eva@example.com' },
  { username: 'nick', email: 'nick@example.com' },
  { username: 'chris', email: 'chris@example.com' },
  { username: 'linda', email: 'linda@example.com' },
];

async function seedUsers() {
  try {
    for (const user of fakeUsers) {
      const hashedPassword = await bcrypt.hash('12345678', 10);

      await prisma.user.create({
        data: {
          username: user.username,
          email: user.email,
          password: hashedPassword,
        },
      });

      console.log(`Created user: ${user.username}`);
    }

    console.log('✅ Seeding complete.');
  } catch (error) {
    console.error('❌ Error seeding users:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUsers();
