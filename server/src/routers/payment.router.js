import { Router } from 'express'
import { createSession } from '../controllers/payment.controllers.js'

export const paymentRouter = Router()

paymentRouter.get('/', (req, res) => {
    res.send('Welcome')
})
paymentRouter.post('/create-checkout-session', createSession)
paymentRouter.get('/success', (req, res) => {
    res.send('sucess')
})
paymentRouter.get('/cancel', (req, res) => {
    res.send('cancel')
})