import mainController from '../controllers/main.js'
import express from 'express';

const router = express.Router();

router.get('/', mainController.mainEndpoint);

export default router;