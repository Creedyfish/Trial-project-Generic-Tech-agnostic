/**
 * This module handles GET requests in a Next.js serverless function.
 * 
 * @module route
 */

// Importing necessary modules
import { NextResponse } from 'next/server'; // Next.js server response object
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
 * On success, it returns a JSON object with all the recipes from the data.
 * On failure, it returns a JSON object with the error.
 * 
 * The function extracts all the recipes from the data and returns them in the response.
 */
export async function GET(req: Request, res: NextResponse) {
    try {
      const recipes = data.recipes
    return NextResponse.json(recipes);
  } catch (error) {
    return NextResponse.json(error);
  }
}
