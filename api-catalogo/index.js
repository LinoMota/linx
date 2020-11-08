import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

import loadData from './dataLoader.js';

import productRoutes from './routes/product.js';

// Adicionar Variavel de ambiente
const PORT = process.env.PORT || 3334
const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use(cors());

app.use(productRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017/?compressors=zlib&gssapiServiceName=mongodb"

mongoose.set("useNewUrlParser", true)
mongoose.set("useUnifiedTopology", true)
mongoose.set("useFindAndModify", false)

mongoose.connect(CONNECTION_URL).then((res) => {
    console.log("Conectei no banco de dados");

    console.log("Migrando os dados.");

    loadData().then(_ => {
        console.log("Dados migrados !")

        app.listen(PORT, _ => {
            console.log(`Rodando na porta ${PORT}`)
        })
    })


}).catch((res) => {
    console.log("Não pude conectar no banco de dados")
});
