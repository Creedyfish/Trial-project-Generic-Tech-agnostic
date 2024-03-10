/**
 * This module handles GET and POST requests in a Next.js serverless function.
 * 
 * @module route
 */

// Importing necessary modules
import { NextResponse } from 'next/server'; // Next.js server response object

/**
 * Handles GET requests.
 * 
 * @async
 * @function
 * @param {Request} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {NextResponse} - Returns a NextResponse object with a JSON payload.
 * 
 * On success, it returns a JSON object with the message "Data Get for Recipe" and the request body data.
 * On failure, it returns a JSON object with the error.
 * 
 * The function extracts the request body data and returns it in the response.
 */
export async function GET(req: Request, res: NextResponse) {
    try {
        const data = req.body
    return NextResponse.json({message:"Data Get for Recipe",data:data});
  } catch (error) {
    return NextResponse.json(error);
  }
}

/**
 * Handles POST requests.
 * 
 * @async
 * @function
 * @param {Request} req - The incoming request object.
 * @param {NextResponse} res - The outgoing response object.
 * @returns {NextResponse} - Returns a NextResponse object with a JSON payload.
 * 
 * On success, it returns a JSON object with the message "Recipe Added".
 * On failure, it returns a JSON object with the error.
 * 
 * The function logs the request body data to the console.
 */
export async function POST(req: Request, res: NextResponse) {
  try {
    console.log(req.body)
  return NextResponse.json("recipe Added");
} catch (error) {
  return NextResponse.json(error);
}
}

export async function PUT(req: Request, res: NextResponse) {
  try {
    console.log(req.body)
  return NextResponse.json("recipe Edited");
} catch (error) {
  return NextResponse.json(error);
}
}