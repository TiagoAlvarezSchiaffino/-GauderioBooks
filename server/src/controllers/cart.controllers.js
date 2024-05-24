import { Cart } from "../models/cart.model.js";
import { Book } from "../models/book.model.js";

export const getBooksOnCart = async (req, res) => {
  const booksCart = await Cart.find();
  try {
    if (booksCart) {
      res.status(201).json({ booksCart });
    } else {
      res.status(202).send("There are no products in the cart");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const addBookToCart = async (req, res) => {
  try {
    const { title, image, price } = req.body;
    const bookExists = await Book.findOne({ title });
    const inStock = bookExists.stock > 0;
    const inCart = await Cart.findOne({ title });
    if (inStock && !inCart) {
      const newBookInCart = new Cart({ title, image, price, amount: 1 });
      await Book.findByIdAndUpdate(
        bookExists?._id,
        { inCart: true, title, image, price },
        { new: true }
      )
        .then((book) => {
          newBookInCart.save();
          res.status(201).json({
            message: `The product was added to the cart`,
            book,
          });
        })
        .catch((error) => console.error(error));

    } else if (inCart) {
      res.status(400).json({
        message: "The product is already in the cart",
      });
    } else {
      res.status(400).json({
        message: "Sorry, we are out of stock",
      });
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteBookOnCart = async (req, res) => {
  try {
    const bookId = req.params.id;
    console.log(bookId);
    const bookInCart = await Cart.findById(bookId);
    const { title, image, price, _id } = await Book.findOne({
      title: bookInCart.title,
    });
    await Cart.findByIdAndDelete(bookId);

    await Book.findByIdAndUpdate(
      _id,
      { inCart: false, title, image, price },
      { new: true }
    ).then((book) => {
      res.status(201).json({
        message: `The book '${book.title}' was removed from the cart`,
      });
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateBookOnCart = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { query } = req.query;
    const body = req.body;

    const searchedBook = await Cart.findById(bookId);

    if (!query) {
      res.status(404).json({ message: "You must send a query" });

    } else if (searchedBook && query === "add") {
      body.amount = body.amount + 1;

      await Cart.findByIdAndUpdate(bookId, body, {
        new: true,
      }).then((book) => {
        res.json({
          message: `The book: '${book.title}' was updated`,
          book,
        });
      });

    } else if (searchedBook && query === "del") {
      body.amount = body.amount - 1;

      await Cart.findByIdAndUpdate(bookId, body, {
        new: true,
      }).then((book) =>
        res.json({
          message: `The book: '${book.title}' was updated`,
          book,
        })
      );
    } else {
      res.status(400).json({ message: "An error occurred" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};
