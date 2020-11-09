import mongoose from 'mongoose';


const categoriesSchema = mongoose.Schema({
    id: {
        type: String,
        index: true
    },
    name: String,
    parents: [String]
})


const skuSchema = mongoose.Schema({
    sku: {
        type: String,
        index: true
    },
    specs: Object,
    properties: Object,
    customBusiness: Object

});

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
    categories: [categoriesSchema],
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

const model = mongoose.model('product', productSchema);


export default model;