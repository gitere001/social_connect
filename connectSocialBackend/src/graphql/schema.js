import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type User {
    id: Int!
    username: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
`);
