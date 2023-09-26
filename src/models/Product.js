/**
 * The product model.
 */
export default class Product { // NOSONAR
    constructor({
        id,
        slug,
        name,
        price,
        category,
        description
    }) {
        this.id = id;
        this.slug = slug;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
    }
}