import { NextApiRequest, NextApiResponse } from 'next';
import {NextResponse} from "next/server";

export async function GET(req:Request) {
    const{hub} =await req.json();


    // Check if a token and mode is in the query string of the request
    if (hub.mode && hub.token) {
        // Check the mode and token sent is correct
        if (hub.mode === "subscribe" && hub.token === process.env.verifyToken) {
            // Respond with the challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            return NextResponse.json(hub.challenge,{status:200});
        } else {
            // Respond with '403 Forbidden' if verify tokens do not match
            return NextResponse.json({status:403});
        }
    }

}
