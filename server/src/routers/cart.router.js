import { Router } from "express";
export const cartRouter = Router();

import {
  addBookToCart,
  deleteBookOnCart,
  getBooksOnCart,
  updateBookOnCart,
} from "../controllers/cart.controllers.js";

cartRouter.get("/", getBooksOnCart);
cartRouter.post("/", addBookToCart);
cartRouter.delete("/delete/:id", deleteBookOnCart);
cartRouter.put("/update/:id", updateBookOnCart);