class Product {
    constructor(id, name, gender, price, active, size, categories) {
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

export const resolvers = {
    Query: {
        getProduct: (rootValue, args) => {
            let categories = [];
            const category1 = new Category(1, "New In");
            const category2 = new Category(2, "Jeans");
            categories.push(category1, category2);
            return new Product(args.id, "Blue Jeans", "FEMALE", 49.99, true, 6, categories);
        },
    },
};
