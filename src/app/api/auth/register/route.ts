import {NextResponse} from "next/server";
import {connect} from "../../../../../utils/mongoConnection";

export async function POST(req: Request) {
    try{
        const {User}=await connect();

        const{email, password} = await req.json();


    }catch{

    }
}