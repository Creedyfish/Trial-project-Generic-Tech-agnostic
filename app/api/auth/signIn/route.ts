import { NextResponse } from "next/server";
import data from '@/data.json'

export const POST = async (req: Request, res: Response) => {
    try {
        return NextResponse.json({data : "Logged In"}, {status: 201})
    } catch (error) {
        return NextResponse.json(error)
    }
}