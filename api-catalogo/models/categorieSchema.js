import mongoose from 'mongoose'

const categoriesSchema = mongoose.Schema({
    id: {
        type: String,
        index: true
    },
    name: String,
    parents: [String]
})

export default categoriesSchema;