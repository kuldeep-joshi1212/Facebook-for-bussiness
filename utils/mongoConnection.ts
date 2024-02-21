import mongoose, { Model } from "mongoose"


const { DATABASE_URL } = process.env

export const connect = async () => {
    const conn = await mongoose
        .connect(DATABASE_URL as string)
        .catch(err => console.log(err))
    console.log("Mongoose Connection Established")

    const UserSchema = new mongoose.Schema({
        email: String,
        password: String,
    })

    // OUR TODO MODEL
    const User = mongoose.models.User || mongoose.model("User", UserSchema)

    return { conn, User }
}