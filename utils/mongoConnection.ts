import mongoose, { Model } from "mongoose"


const { MONGODB_URL  } = process.env

export const connect = async () => {
    const conn = await mongoose
        .connect(MONGODB_URL as string)
        .catch(err => console.log(err))
    console.log("Mongoose Connection Established")



}
