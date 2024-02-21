import mongoose, { Model } from "mongoose"


// const { DATABASE_URL  } = process.env

export const connect = async () => {
    const conn = await mongoose
        .connect("mongodb+srv://mrmxyzpdlk:Naukri!2@fb-biz.s89x01q.mongodb.net/fb-main")
        .catch(err => console.log(err))
    console.log("Mongoose Connection Established")



}
