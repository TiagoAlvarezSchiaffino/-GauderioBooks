import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}
