import mongoose from 'mongoose';

const categorieSchema = mongoose.Schema({
    id: {
        type: String,
        index: true
    },
    name: String,
    parents: [String]
})

export default categorieSchema;