import { Router } from "express";
export const booksRouter = Router();

import {
  getAllBooks,
  postBook,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/books.controllers";

booksRouter.get("/", getAllBooks);
booksRouter.post("/create", postBook);
booksRouter.get("/:id", getBookById);
booksRouter.put("/update/:id", updateBook);
booksRouter.delete("/delete/:id", deleteBook);

