const mongoose = require("mongoose")
const Book = require ("../models/Book")

const postBook = (req, res ) => {
    const data = req.body
    const book = new Book(data)
    book.save()
    .then(savedBook => {
        res.status(200).json(savedBook)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}

const getAllBooks = (req, res) =>{
Book.find({})
.then(result=>{
     res.status(200).json(result)
 })
 .catch(err=>{
     res.status(400).send(err)
 })
}

module.exports = {
    postBook, 
    getAllBooks
}