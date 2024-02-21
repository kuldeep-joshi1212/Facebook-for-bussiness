import {NextResponse} from "next/server";
import {connect} from "../../../../../utils/mongoConnection";
import Register from "@/models/Register";

export async function POST(req: Request) {
    try{
        const{username,email,password} = await req.json();
        await connect();
        await Register.create({username,email,password});
        return NextResponse.json({status:200});
    }catch(e){
        return NextResponse.json({status:400});
    }
}