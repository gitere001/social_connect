const prisma = require('./config/prismaConfig'); // adjust path if needed

// Sample post content (could be more dynamic if you need)
const postContents = [
  'Just launched my new website! Check it out and let me know what you think.',
  'Beautiful day at the beach! 🏖 Sometimes you just need to disconnect and enjoy the moment.',
  'Just finished reading a great book on design patterns. Highly recommend it for anyone interested in software architecture!',
  'Learning how to build better apps using modern frameworks like React and Node.js.',
  'Exploring new technologies in the world of web development.',
  'Had a great lunch today! 🍕 Anyone else love pizza?',
  'Excited to start a new project. Big things coming soon!',
  'Took a long walk in the park today. Nature is amazing!',
  'Getting back into coding after a short break. Ready to dive in!',
  'Had an interesting conversation about AI and its future in web development.'
];

async function seedPosts() {
  try {
    // Get all users
    const users = await prisma.user.findMany();

    // For each user, create a post
    for (const user of users) {
      const postContent = postContents[Math.floor(Math.random() * postContents.length)];

      // Create a post for the user
      await prisma.post.create({
        data: {
          content: postContent,
          userId: user.id,  // Associate post with the user
        },
      });

      console.log(`Created post for user: ${user.username}`);
    }

    console.log('✅ Seeding complete.');
  } catch (error) {
    console.error('❌ Error seeding posts:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedPosts();
