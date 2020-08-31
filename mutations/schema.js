import { resolvers } from './resolvers';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Product {
        id: ID
        name: String
        gender: Gender
        price: Float
        active: Boolean
        size: Int
        categories: [Category]
    }

    type Category {
        id: ID
        name: String
    }

    enum Gender {
        MALE
        FEMALE
        UNISEX
        OTHER
    }

    type Query {
        getProduct(id: ID!): Product
        getProducts: [Product]
    }

    input ProductInput {
        id: ID
        name: String!
        gender: Gender
        price: Float
        active: Boolean
        size: Int
        categories: [CategoryInput]
    }

    input CategoryInput {
        id: ID
        name: String
    }

    type Mutation {
        createProduct(input: ProductInput): Product
        updateProduct(input: ProductInput): Product
        deleteProduct(id: ID!): String
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
