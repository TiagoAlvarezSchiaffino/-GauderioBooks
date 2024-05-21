import { Router } from 'express'
import { RemoveFromCart, addToCart, clearCart, createUser, getAllUsers, getUserCart, loginUsuario } from '../controllers/user.controllers.js'

export const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.post('/create', createUser)
userRouter.post('/login', loginUsuario)

userRouter.get('/userCart/:id', getUserCart )

userRouter.post('/userAddCart/:uid/:pid', addToCart )
userRouter.delete('/userClearCart/:id', clearCart)
userRouter.delete('/userRemoveFromCart/:uid/:pid', RemoveFromCart)