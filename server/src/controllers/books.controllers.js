import { Book } from "../models/book.model.js";
import { User } from "../models/user.model.js";

export const getAllBooks = async (req, res) => {
  try {


    var filter = {}
    const { author, editorial, genre, search } = req.query

    if (search) {
      filter = { ...filter, title: search }
    }
    else {
      if (author) {
        filter = { ...filter, author: author }
      }

      if (editorial) {
        filter = { ...filter, editorial: editorial }
      }

      if (genre) {
        filter = { ...filter, genre: genre }
      }
    }


    const regexFilter = {};
    for (const key in filter) {
      regexFilter[key] = new RegExp(filter[key], 'i');
    }

    const allBooks = await Book.find({});
    const filteredBooks = await Book.find(regexFilter)

    res.status(201).json({ allBooks: allBooks, filteredBooks: filteredBooks });

  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const postBook = async (req, res) => {
  try {
    const user = req.user

    const userFound = await User.findById(user.uid)

    if (userFound.role !== 'admin') {

      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegios para realizar esta accion'
      })
    }


    const data = req.body;
    const newBook = new Book(data);

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateBook = async (req, res) => {
  try {

    const user = req.user

    const userFound = await User.findById(user.uid)

    if (userFound.role !== 'admin') {

      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegios para realizar esta accion'
      })
    }

    const id = req.params.id;
    const data = req.body;

    await Book.updateOne(
      { _id: id },
      {
        $set: data,
      }
    );
    res.status(201).send("EL libro ha sido modificado con exito");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.find({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).send(`No existe un libro con ese ID`);
  }
};

export const deleteBook = async (req, res) => {
  try {

    const user = req.user

    const userFound = await User.findById(user.uid)

    if (userFound.role !== 'admin') {

      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegios para realizar esta accion'
      })
    }

    const id = req.params.id;

    await Book.deleteOne({ _id: id });
    res.status(200).send("El libro fue eliminado con exito");
  } catch (error) {
    res.status(400).send(`No existe un libro con ese ID`);
  }
};