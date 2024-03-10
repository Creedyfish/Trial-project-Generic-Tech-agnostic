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

export async function DELETE(req: Request, res: NextResponse) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split('/').slice(-1)[0];

    // Find the index of the recipe with the given id
    const index = data.recipes.findIndex((recipe) => Number(id) );

    if (index !== -1) {
      // Remove the recipe from the array
      data.recipes.splice(index, 1);

      return NextResponse.json("Recipe Deleted");
    } else {
      return NextResponse.json("Recipe not found");
    }
  } catch (error) {
    return NextResponse.json(error);
  }
}