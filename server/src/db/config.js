import mongoose from "mongoose";
import DB_CONNECTION from "../constants/connectionData";

export const connectDB = async () => {
    try {
        mongoose.connect(DB_CONNECTION);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}