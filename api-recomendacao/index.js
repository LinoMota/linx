import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/router.js';

const PORT = process.env.API_RECOMENDACAO_PORT || 3335;
const app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(router);

app.listen(PORT, _ => {
    console.log(`Rodando na porta ${PORT}`)
})
