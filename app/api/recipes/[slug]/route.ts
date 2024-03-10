/**
 * This module handles GET and DELETE requests in a Next.js serverless function.
 * 
 * @module route
 */

// Importing necessary modules
import { NextResponse, NextRequest } from 'next/server'; // Next.js server response object
import data from '@/data.json' // Importing data from a JSON file

/**
 * Handles GET requests.
 * 
 * @async
 * @function
 * @param {Request} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {NextResponse} - Returns a NextResponse object with a JSON payload.
 * 
 * On success, it returns a JSON object with the requested recipe.
 * On failure, it returns a JSON object with the error.
 * 
 * The function extracts the recipe name from the URL, replaces hyphens with spaces, and finds the recipe in the data.
 */
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
/**
 * Handles DELETE requests.
 * 
 * @async
 * @function
 * @param {Request} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {NextResponse} - Returns a NextResponse object with a JSON payload.
 * 
 * On success, it returns a JSON object with the message "Recipe Deleted".
 * If the recipe is not found, it returns a JSON object with the message "Recipe not found".
 * On failure, it returns a JSON object with the error.
 * 
 * The function extracts the recipe id from the URL, finds the recipe in the data, and removes it.
 */
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