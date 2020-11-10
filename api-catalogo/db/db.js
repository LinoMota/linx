import mongoose from 'mongoose';
    
// Apontando para o container
const CONNECTION_URL = `mongodb://mongo:27017/db`

export default (() => {

    mongoose.set("useNewUrlParser", true)
    mongoose.set("useUnifiedTopology", true)
    mongoose.set("useFindAndModify", false)
    mongoose.set("autoIndex", false)

    return mongoose.connect(CONNECTION_URL)
})()