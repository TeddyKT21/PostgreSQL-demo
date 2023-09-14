import { Router } from "express";
import { addProduct, getProducts } from "../controllers/products.js";




export const productsRouter = Router()
productsRouter.get('/',getProducts);
  
productsRouter.post('/',addProduct);