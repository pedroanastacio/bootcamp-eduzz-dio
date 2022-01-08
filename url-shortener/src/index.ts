import express from 'express';
import { UrlController } from './controllers/UrlController';
import { MongoConnection } from './database/MongoConnection';
import * as dotenv from 'dotenv';

dotenv.config();

const api = express();

api.use(express.json());

const db = new MongoConnection();
db.connect();

const urlController = new UrlController();

api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(process.env.PORT, () => console.log(`Server is running on port:${process.env.PORT}`));

