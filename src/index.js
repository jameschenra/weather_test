import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import setRoutes from './routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

global.API_URL = process.env.API_URL;

setRoutes(app);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
