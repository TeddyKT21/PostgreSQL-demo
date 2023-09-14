import express from 'express';
import { Pool } from 'pg';
import { pool } from './Dal/pool';
import { productsRouter } from './routes/products';

const app = express();
const port =8080;

app.use(express.json());
app.use('/products',productsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  pool.connect();
});