import Product from '../models/productSchema.js'

export default class ProductDAO {
    async findOne(id) {
        return await Product.findOne({
            id: id
        });
    }

    async create(data) {
        await Product.create(data);
    }
}