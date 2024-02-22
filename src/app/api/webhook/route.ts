import { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from "next/server";

export async function GET(req:Request,res:Response) {
    console.log(req)
    const{searchParams} =new URL(req.url);
    const mode=searchParams.get("hub.mode")
    const token=searchParams.get("hub.verify_token")
    const challenge=searchParams.get("hub.challenge")


    // Check if a token and mode is in the query string of the request
    if (mode && token) {
        // Check the mode and token sent is correct
        if (mode === "subscribe" && token === process.env.verifyToken) {
            // Respond with the challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            return NextResponse.json({challenge},{status:200});
        } else {
            // Respond with '403 Forbidden' if verify tokens do not match
            return NextResponse.json({status:403});
        }
    }

}
