import { generateJWT } from "../helpers/jwt.js";
import { Book } from "../models/book.model.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
    try {

        res.send('Done successfully')

    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}


export const createUser = async (req, res) => {
    try {
        const { username, fullname, email, password } = req.body
        const newUser = new User({ username, fullname, email, password })

        // Encrypt password
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt)

        await newUser.save()

        res.status(201).json({
            message: 'User created successfully',
            user: newUser
        })

    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {

        const userFound = await User.findOne({ email })

        if (!userFound) {
            return res.status(400).json({
                ok: false,
                msg: 'The email entered does not exist'
            })
        }

        // Confirm password
        const validPassword = bcrypt.compareSync(password, userFound.password)
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Incorrect password'
            })
        }

        const token = await generateJWT(userFound.id, userFound.name)

        res.json({
            status: 'successful login',
            token,
            user: {
                "_id": userFound._id,
                "username": userFound.username,
                "fullname": userFound.fullname,
                "email": userFound.email
            }
        })

    } catch (error) {
        console.error(error);
    }
};

export const getUserCart = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            })
        }


        res.status(200).json({
            ok: true,
            username: user.username,
            fullname: user.fullname,
            cart: user.cart,
        })

    } catch (error) {
        console.log(error);
    }
}

export const addToCart = async (req, res) => {
    try {
        const { uid, pid } = req.params;
        const productQuantity = req.body;

        const user = await User.findById(uid);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            })
        }

        const {title, price} = await Book.findById(pid);

        const productExist = user.cart.findIndex(p => p._id === pid);


        if (productExist === -1) {

            user.cart.push({title, price,cantidad: productQuantity.cantidad, _id: pid });        
           await user.save();
        }
        else {

            user.cart[productExist].cantidad += productQuantity.cantidad
            await user.save();
        }


        res.status(200).json({
            ok: true,
            username: user.username,
            fullname: user.fullname,
            cart: user.cart,
        })

    } catch (error) {
        console.log(error);
    }
}

export const clearCart = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            })
        }

        user.cart = [];

        await user.save();

        res.status(200).json({
            ok: true,
            username: user.username,
            fullname: user.fullname,
            cart: user.cart,
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error clearing cart'
        })
        console.log(error);
    }
}

export const RemoveFromCart = async (req, res) => {
    try {
        const { uid, pid } = req.params;

        const user = await User.findById(uid);

        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: 'User not found'
            })
        }

        user.cart = user.cart.filter(p => p._id !== pid);

        await user.save();

        res.status(200).json({
            ok: true,
            username: user.username,
            fullname: user.fullname,
            cart: user.cart,
        })

    } catch (error) {
        console.log(error);
    }
}