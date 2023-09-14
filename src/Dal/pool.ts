import { Pool } from 'pg'
export const pool = new Pool({
  user: 'postgres',
  host: process.env.DB_HOST,
  database: 'productsDB',
  password: '123456',
  port: 5432 ,
})
