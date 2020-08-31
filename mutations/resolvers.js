class Product {
    constructor(id, { name, gender, price, active, size, categories }) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.price = price;
        this.active = active;
        this.size = size;
        this.categories = categories;
    }
}

class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const productDatabase = {};

export const resolvers = {
    Query: {
        getProduct: (root, { id }) => {
            return new Product(id, productDatabase[id]);
        },
    },
    Mutation: {
        createProduct: (root, { input }) => {
            let id = Math.ceil(Math.random() * 101)
            console.log(id);
            productDatabase[id] = input;
            return new Product(id, input);
        },
        updateProduct: (root, { input }) => {
            productDatabase[input.id] = input;
            return new Product(input.id, input);
        },
        deleteProduct: (root, { id }) => {
            delete productDatabase[id];
            console.log(productDatabase);
            return "Success";
        }
    },
};
