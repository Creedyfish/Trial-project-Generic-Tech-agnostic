import { NextResponse } from 'next/server';
import data from '@/data.json'

export async function GET(req: Request, res: NextResponse) {
    try {
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error);
  }
}