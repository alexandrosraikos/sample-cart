import DummyProducts from '../data/products.json'
import Product from '../models/Product'

/**
 * Get dummy products.
 * 
 * @returns {Product[]}
 */
const useDummyProducts = () => {
    return DummyProducts.map((dp) => new Product(dp));
}

export default useDummyProducts;