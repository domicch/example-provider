class Product {
    constructor(id, type, name, version, price, newField, discount) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.version = version;
        this.price = price;
        this.newField = newField;
        this.discount = discount
    }
}

module.exports = Product;