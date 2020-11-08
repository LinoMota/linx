import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import product from './models/product.js';

export default async function loadData() {

    const filename = 'catalog.json';
    const filePath = path.join("./data/", filename);

    let dados = fs.readFileSync(filePath, 'utf-8')

    dados.split('\n').forEach(async (line, i) => {
        try {

            if (line.trim() != '') {
                let json = JSON.parse(line);

                let dado = new product({
                    ...json
                });
            
                await dado.save()
            }
        } catch (e) {
            console.log(e)
            console.log("Não é um json válido !");
        }
    });


}