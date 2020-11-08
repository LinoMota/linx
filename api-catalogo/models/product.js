import mongoose from 'mongoose';


const categoriesSchema = mongoose.Schema({
    id: String,
    name: String,
    parents: [String]
});

const skuSchema = mongoose.Schema({
    sku : String,
    specs : Object,
    properties : Object,
    customBusiness : Object

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
    id: String,
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

// {
//     "imagesSsl": {},
//     "skus": [{
//         "sku": "994316",
//         "specs": {},
//         "properties": {
//             "name": "Espátula Vazada Bambu com Cabo Silicone Anji Amarela - 12942",
//             "installment": {
//                 "count": 10,
//                 "price": 7.99
//             },
//             "images": {
//                 "imagem1": "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/14/1114402_p-13236_m3_636935484470662204",
//                 "default": "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/14/1114402_p-13236_m2_636935484416912411.jpg",
//                 "imagem2": "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/14/1114402_p-13236_m4_636935484478318574"
//             },
//             "price": 79.9,
//             "url": "//www.linxcommerce.core.dcg.com.br/espatula-vazada-bambu-com-cabo-silicone-anji-amarela-p989186?tsid=18&v=994316",
//             "details": {
//                 "precoavista": 79.9
//             },
//             "status": "available",
//             "oldPrice": 79.9
//         },
//         "customBusiness": {}
//     }],
//     "apiKey": "impulse-core",
//     "description": "Esp&#225;tula Vazada Bambu com Cabo Silicone Anji Amarela 1554204",
//     "type": "product",
//     "auditInfo": {
//         "updatedBy": "importer-v2",
//         "updatedThrough": "dc-catalog-server"
//     },
//     "specs": {},
//     "eanCode": null,
//     "price": "79.9",
//     "details": {
//         "name": "Espátula Vazada Bambu com Cabo Silicone Anji Amarela - 12942",
//         "brand": "Anji",
//         "rating": "0,00",
//         "cod_venda": "13236",
//         "precoavista": "79.90"
//     },
//     "remoteUrl": null,
//     "categories": [{
//         "id": "969",
//         "name": "Utilidades Domésticas",
//         "parents": []
//     }],
//     "id": "13236",
//     "stock": null,
//     "brand": "Anji",
//     "customBusiness": {},
//     "basePrice": null,
//     "images": {
//         "imagem1": "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/14/1114402_p-13236_m3_636935484470662204",
//         "default": "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/14/1114402_p-13236_m2_636935484416912411.jpg",
//         "imagem2": "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/14/1114402_p-13236_m4_636935484478318574"
//     },
//     "kitProducts": [],
//     "created": "2018-08-04 00:05:30",
//     "oldPrice": "79.9",
//     "published": null,
//     "version": "V2",
//     "url": "//www.linxcommerce.core.dcg.com.br/espatula-vazada-bambu-com-cabo-silicone-anji-amarela-p989186?tsid=18&v=994316",
//     "tags": [],
//     "unit": null,
//     "installment": {
//         "count": 10,
//         "price": 7.99
//     },
//     "name": "Espátula Vazada Bambu com Cabo Silicone Anji Amarela - 12942",
//     "clientLastUpdated": "2020-01-21 05:00:50",
//     "extraInfo": {
//         "hash": ""
//     },
//     "status": "AVAILABLE",
//     "ungroupedId": "default"
// }