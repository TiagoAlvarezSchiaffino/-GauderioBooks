import { Router } from 'express'
import { RemoveFromCart, addToCart, clearCart, createAdmin, createUser, getAllUsers, getUserCart, loginUsuario } from '../controllers/user.controllers.js'
import { authenticateToken } from '../middleware/auth.js'

export const userRouter = Router()

userRouter.get('/', authenticateToken, getAllUsers)
userRouter.post('/create', createUser)
userRouter.post('/createAdmin', authenticateToken, createAdmin)
userRouter.post('/login', loginUsuario)

userRouter.get('/userCart/:id', getUserCart)

userRouter.post('/userAddCart/:uid/:pid', addToCart)
userRouter.delete('/userClearCart/:id', clearCart)
userRouter.delete('/userRemoveFromCart/:uid/:pid', RemoveFromCart)