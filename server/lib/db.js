import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`);

        console.log("MongoDB Connected Successfully");

        mongoose.connection.on("connected", () => {
            console.log("Database Connected");
        });

    } catch (error) {
        console.log("MongoDB Error:", error);
    }
};