import { NextResponse } from 'next/server';

export async function GET(req: Request, res: NextResponse) {
    try {
        const data = req.body
    return NextResponse.json({message:"Data Get for Recipe",data:data});
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(req: Request, res: NextResponse) {
    try {
        const data = req.body
    return NextResponse.json({message:"submitted and saved",data:data});
  } catch (error) {
    return NextResponse.json(error);
  }
}

