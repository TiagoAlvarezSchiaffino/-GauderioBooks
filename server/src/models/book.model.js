const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    unique: false,
  },
  editorial: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  inCart: {
    type: Boolean,
    default: false,
  },
});

bookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
  },
});

export const Book = model("Book", bookSchema);