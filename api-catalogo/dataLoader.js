import fs from 'fs';
import mongoose from 'mongoose';
import path from 'path';
import productSchema from './models/product.js';

export default async function loadData() {

    const filename = 'catalog.json';
    const filePath = path.join("./data/", filename);

    let dados = fs.readFileSync(filePath, 'utf-8')

    // ajustar para DAO
    const productModel = mongoose.Model(productSchema,'product')

    dados.split('\n').forEach(async (line, i) => {
        try {

            if (line.trim() != '') {
                let json = JSON.parse(line);

                let dado = new productModel({
                    ...json
                });

                await productModel.save()
            }
        } catch (e) {
            console.log("Não é um json válido !");
        }
    });


}