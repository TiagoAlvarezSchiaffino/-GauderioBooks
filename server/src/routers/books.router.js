import { Router } from "express";
export const booksRouter = Router();

import {
  getAllBooks,
  postBook,
  getBookById,
  updateBook,
  deleteBook,
} from '../controllers/books.controllers.js'
import { authenticateToken } from "../middleware/auth.js";

booksRouter.get("/", getAllBooks);
booksRouter.post("/create", authenticateToken, postBook);
booksRouter.get("/:id", getBookById);
booksRouter.put("/update/:id", authenticateToken, updateBook);
booksRouter.delete("/delete/:id", authenticateToken, deleteBook);