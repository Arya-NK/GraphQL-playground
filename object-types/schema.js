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
        getProduct(id: ID): Product
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
