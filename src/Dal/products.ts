import { Product } from "../types";
import { pool } from "./pool";

export const getProducts = async () => {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
};

export const addProduct = async (product: Product) => {
  const { rows } = await pool.query(
    `INSERT INTO products (name, price, description, image,quantity) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [
      product.name,
      product.price,
      product.description,
      product.image,
      product.quantity,
    ]
  );
  return rows[0];
};
