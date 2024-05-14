import express from 'express'
import 'dotenv/config'
import { connectDB } from './db/config.js'
import { userRouter } from './routers/users.router.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// endpoints
app.use('/api/v1/user', userRouter)

connectDB()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
