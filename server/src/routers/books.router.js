const { Router } = require("express");
const router = Router();

const {
  getAllBooks,
  postBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookscontrollers");

router.get("/", getAllBooks);
router.post("/", postBook);
router.get("/:id", getBookById);
router.put("/update/:id", updateBook)
router.delete("/delete/:id", deleteBook)

module.exports = router;