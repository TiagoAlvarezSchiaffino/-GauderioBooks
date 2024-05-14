import { Router } from "express";

import {
  getAllBooks,
  postBook,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/bookscontrollers";

booksRouter.get("/", getAllBooks);
booksRouter.post("/create", postBook);
booksRouter.get("/:id", getBookById);
booksRouter.put("/update/:id", updateBook);
booksRouter.delete("/delete/:id", deleteBook);

export const booksRouter = Router();