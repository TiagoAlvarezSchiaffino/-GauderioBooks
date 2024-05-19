import express from 'express'
import 'dotenv/config'
import { connectDB } from './db/config.js'
import { userRouter } from './routers/users.router.js'
import { booksRouter } from './routers/books.router.js'
import { cartRouter } from './routers/cart.router.js'
import { paymentRouter } from './routers/payment.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://gauderiolibros.vercel.app");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
    next();
  });

// endpoints
app.use('/users', userRouter)
app.use('/books', booksRouter)
app.use('/cart', cartRouter)
app.use('/pay', paymentRouter)

connectDB()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})