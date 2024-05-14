import { Router } from 'express'
import { createUser, getAllUsers, loginUsuario } from '../controllers/user.controllers.js'

export const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.post('/create', createUser)
userRouter.post('/login', loginUsuario)