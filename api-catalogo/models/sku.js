import mongoose from "mongoose";

const skuSchema = mongoose.Schema({
    sku : Number,
    spec : Object,
    properties : Object,
    customBusiness : Object

});

const model = mongoose.model('sku', skuSchema);

export default model;

// {
//     "sku": "992563",
//     "specs": {},
//     "properties": {
//         "name": "Caneca Pote com Canudo 500ml Zona Criativa Coruja Roxa - 8991",
//         "installment": {
//             "count": 10,
//             "price": 39.99
//         },
//         "images": {
//             "imagem1": "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/10/1110982_p-9091_m3_636935452020971774",
//             "default": "//d1h4n7nr93grs2.cloudfront.net/Custom/Content/Products/11/10/1110982_p-9091_m1_636935451960502787.jpg"
//         },
//         "price": 399.9,
//         "url": "//www.linxcommerce.core.dcg.com.br/caneca-pote-com-canudo-500ml-zona-criativa-coruja-roxa-p987504?tsid=18&v=992563",
//         "details": {
//             "precoavista": 399.9
//         },
//         "status": "available",
//         "oldPrice": 399.9
//     },
//     "customBusiness": {}
// }