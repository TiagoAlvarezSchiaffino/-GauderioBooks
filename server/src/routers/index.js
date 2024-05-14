const express = require('express')
const router = express.Router()

const booksRoutes = require ('./books.router')

router.use('/books', booksRoutes);

module.exports = router;