const { Schema, model } = require ('mongoose')

const bookSchema = new Schema({
    title: String,
    author: String,
    year: Number,
    editorial: String,
    genre: String,
    stock: Number,
    image: String,
    price: Number,
    description: String
})

bookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})
const Book = model('Book', bookSchema)

module.exports = Book