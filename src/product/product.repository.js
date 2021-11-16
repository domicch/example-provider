const Product = require('./product');

class ProductRepository {

    constructor() {
        this.products = new Map([
            ["09", new Product("09", "CREDIT_CARD", "Gem Visa", "v1", 30.0, 22, "black-friday")],
            ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "v1", 30.0, 22)],
            ["11", new Product("11", "PERSONAL_LOAN", "MyFlexiPay", "v2", 30.0, 22)],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }

    async getById(id) {
        return this.products.get(id);
    }
}

module.exports = ProductRepository;
