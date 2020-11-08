import express from 'express';
import productController from '../controllers/product.js'

const routes = express.Router();

routes.get('/products', productController.mainEndpoint);

export default routes;