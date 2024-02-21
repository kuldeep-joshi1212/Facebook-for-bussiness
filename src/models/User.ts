import mongoose,{ Schema} from "mongoose";

const UserSchema = new Schema(
    {
        email: String,
        password: String
    },{
        timestamps: true
    }
);
const User=mongoose.model.User || mongoose.model("User",UserSchema);
export default User;