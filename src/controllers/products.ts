import * as productsDal from '../Dal/products.js'
import express, { Request, Response } from 'express';
import { Product } from '../types.js';

export const getProducts = async (req: Request, res: Response) => {
    try {
      const data = await productsDal.getProducts();
      res.json(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  export const addProduct = async (req: Request, res: Response) => {
    const { name, price, image, quantity, description } = req.body;
    const product: Product = { name, price, image, quantity, description };
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required fields' });
    }
  
    try {
      const data = await productsDal.addProduct(product);
      res.status(201).json(data);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }