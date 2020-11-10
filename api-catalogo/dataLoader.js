import fs from 'fs';
import path from 'path';
import productSchema from './models/productSchema.js'
import ProductDAO from './controllers/ProductDAO.js'

export default async function loadData() {

    let productDAO = new ProductDAO();

    const filename = 'catalog.json';
    const filePath = path.join("./data/", filename);

    let dados = fs.readFileSync(filePath, 'utf-8')

    dados.split('\n').forEach(async (line, i) => {
        try {

            if (line.trim() != '') {
                let json = JSON.parse(line);

                let dado = new productSchema({
                    ...json
                });

                await productDAO.create(dado);
            }
        } catch (e) {
            console.log(e)
            console.log("Não é um json válido !");
        }
    });


}