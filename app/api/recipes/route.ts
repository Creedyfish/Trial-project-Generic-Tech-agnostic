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
    console.log(req.body)
  return NextResponse.json("recipe Added");
} catch (error) {
  return NextResponse.json(error);
}
}
