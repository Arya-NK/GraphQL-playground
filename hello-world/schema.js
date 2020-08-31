import { buildSchema } from 'graphql';

// Builds a GraphQLSchema object from GraphQL schema language.
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

export default schema;
