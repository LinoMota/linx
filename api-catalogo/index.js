import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import db from './db/db.js';
import loadData from './dataLoader.js';

import productRoutes from './routes/product.js';

const PORT = process.env.PORT || 3334
const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use(cors());

app.use(productRoutes);

db.then((res) => {

    console.log("Conectei no banco de dados");

    console.log("Migrando os dados.");

    loadData().then(_ => {
        console.log("Dados migrados !");

        app.listen(PORT, _ => {
            console.log(`Rodando na porta ${PORT}`);
        });
    });

}).catch((res) => {
    console.log("Não pude conectar no banco de dados");
});