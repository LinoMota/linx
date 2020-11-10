import mongoose from 'mongoose';

const skuSchema = mongoose.Schema({
    sku: {
        type: String,
        index: true
    },
    specs: Object,
    properties: Object,
    customBusiness: Object

});

export default skuSchema;