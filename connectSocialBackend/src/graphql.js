const { gql } = require('apollo-server-express'); // GraphQL schema language

// Define your GraphQL types, queries, and mutations
const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    username: String!
  }

  type Post {
    id: ID!
    content: String!
    author: User!
    likesCount: Int!
  }

  type Query {
    getPosts: [Post]
    getUser(id: ID!): User
  }

  type Mutation {
    registerUser(email: String!, username: String!, password: String!): User
    loginUser(email: String!, password: String!): String
    likePost(postId: ID!): Post
  }
`;

// Define resolvers that specify how to fetch the data for each query and mutation
const resolvers = {
  Query: {
    getPosts: async () => {
      return await prisma.post.findMany({
        include: { author: true },
      });
    },
    getUser: async (_, { id }) => {
      return await prisma.user.findUnique({
        where: { id },
      });
    },
  },

  Mutation: {
    registerUser: async (_, { email, username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: { email, username, password: hashedPassword },
      });
      return newUser;
    },
    loginUser: async (_, { email, password }) => {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) throw new Error('User not found');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error('Invalid password');

      return 'Login successful'; // In a real scenario, you'd want to use JWT or sessions
    },
    likePost: async (_, { postId }) => {
      const post = await prisma.post.update({
        where: { id: postId },
        data: { likesCount: { increment: 1 } },
      });
      return post;
    },
  },
};

module.exports = { typeDefs, resolvers }; // Export for use in index.js
