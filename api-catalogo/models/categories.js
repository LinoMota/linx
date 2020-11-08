import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    id: Number,
    name: String,
    parents: [String]
});

const model = mongoose.model('categories', categoriesSchema);

export default model;

// {
//     "id": "969",
//     "name": "Utilidades Domésticas",
//     "parents": []
// }