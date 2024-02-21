import {NextResponse} from "next/server";
import {connect} from "../../../../../utils/mongoConnection";
import User from "@/models/User";

export async function POST(req: Request) {
    try{
        const{email, password} = await req.json();
        await connect();
        await User.create({email, password});
        return NextResponse.json({status: 200});
    }catch (e) {
        return NextResponse.json({status: 400});
    }
}