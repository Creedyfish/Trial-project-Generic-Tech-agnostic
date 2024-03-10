import { NextResponse } from 'next/server';
import data from '@/data.json'

export async function GET(req: Request, res: NextResponse) {
    try {
      const recipes = data.recipes
    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json(error);
  }
}