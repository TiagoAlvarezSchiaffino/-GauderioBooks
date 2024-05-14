import { generateJWT } from "../helpers/jwt.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res) => {
    try {

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
