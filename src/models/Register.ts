import mongoose, {Schema} from "mongoose";

const RegisterSchema=new Schema(
    {
        username:String,
        email:String,
        password:String,
    },{
        timestamps: true
    }
);
const Register=mongoose.model.Register || mongoose.model("Register",RegisterSchema);
export default Register;