import { NextResponse, NextRequest } from 'next/server';
import data from '@/data.json'

export async function GET(req: Request, res: NextResponse) {
    try {
      const url = new URL(req.url);
    const slug = url.pathname.split('/').slice(-1)[0];
    const recipe = data.recipes.find(
      (recipe) => recipe.name === slug.replace(/-/g, " ")
    );

    return NextResponse.json(recipe);
  } catch (error) {
    return NextResponse.json(error);
  }
}