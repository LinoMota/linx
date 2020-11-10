import express from 'express';
import ProductController from '../controllers/ProductController.js'


export default (() => {

    const routes = express.Router();

    const controller = new ProductController();

    routes.get('/products', (req, res) => {
        controller.mainEndpoint(req, res)
    });

    return routes
})()