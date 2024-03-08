import { NextResponse } from "next/server";
import data from '@/data.json'

export const POST = async (req: Request, res: Response) => {
    try {
       
        return NextResponse.json({data : "SignedUp"}, {status: 201})
    } catch (error) {
        return NextResponse.json(error)
    }
}