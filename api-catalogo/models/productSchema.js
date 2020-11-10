import mongoose from 'mongoose';
import categorieSchema from './categorieSchema.js';
import skuSchema from './skuSchema.js';

const productSchema = mongoose.Schema({
    imagesSsl: {},
    skus: [skuSchema],
    apiKey: String,
    description: String,
    type: String,
    auditInfo: Object,
    specs: Object,
    eanCode: String,
    price: Number,
    details: Object,
    remoteUrl: String,
    categories: [categorieSchema],
    id: {
        type: String,
        index: true
    },
    stock: String,
    brand: String,
    customBusiness: Object,
    basePrice: String,
    images: Object,
    kitProducts: [],
    created: Date,
    oldPrice: Number,
    published: String,
    version: String,
    url: String,
    tags: [],
    unit: String,
    installment: {
        count: Number,
        price: Number
    },
    name: String,
    clientLastUpdated: Date,
    extraInfo: Object,
    status: String,
    ungroupedId: String
});



export default mongoose.model('product',productSchema);