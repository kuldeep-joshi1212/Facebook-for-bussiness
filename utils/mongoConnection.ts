// import mongoose, { Model } from "mongoose"
//
//
// const { DATABASE_URL } = process.env
//
// export const connect = async () => {
//     const conn = await mongoose
//         .connect(DATABASE_URL as string)
//         .catch(err => console.log(err))
//     console.log("Mongoose Connection Established")
//
//     const UserSchema = new mongoose.Schema({
//         email: String,
//         password: String,
//     })
//
//     // OUR TODO MODEL
//     const User = mongoose.models.User || mongoose.model("User", UserSchema)
//
//     return { conn, User }
// }
import mongoose from "mongoose";
const { DATABASE_URL } = process.env
// track the connection
let isConnected = false;
export const connectToDataBase = async () => {
    if (isConnected) {
        console.log("DB connected already");
        return;
    }
    try {
        await mongoose
            .connect(DATABASE_URL as string)
            .catch((err) => console.error(err));
        isConnected = true;
    } catch (error) {
        console.log(error);
    }
};