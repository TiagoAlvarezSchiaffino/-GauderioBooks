const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: String,
    required: true
},
  year: {
    type: Number,
    required: true
},
  editorial: {
    type: String,
    required: true
},
  genre: {
    type: String,
    required: true
},
  stock: {
    type: Number,
    required: true
},
  image: {
    type: String,
    required: true
},
  price: {
    type: Number,
    required: true
},
  description: {
    type: String,
    required: true
},
});

bookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export const Book = model("Book", bookSchema);