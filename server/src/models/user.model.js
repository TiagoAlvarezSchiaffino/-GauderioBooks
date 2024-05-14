
import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cart: {
        type: Array,
    }
})

export const User = model('User', userSchema)