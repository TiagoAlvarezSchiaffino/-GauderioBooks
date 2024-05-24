import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUrl = process.env.DB_CONNECTION;

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connected");

        mongoose.connection.on("disconnected", () => {
            console.log("MongoDB Disconnected");
        });

        mongoose.connection.on("error", (err) => {
            console.error(`MongoDB Connection Error: ${err}`);
        });
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
};

export default connectDB;
