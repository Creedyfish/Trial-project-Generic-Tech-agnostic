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

/**
 * This function handles PUT requests.
 * It logs the body of the request to the console.
 * Then, it returns a response with a message indicating that the recipe has been edited.
 * If an error occurs during the execution of the function, it catches the error and returns a response with the error.
 *
 * @param req - The request object. The body of the request is logged to the console.
 * @param res - The response object. Used to send a response to the client.
 * @returns A Promise that resolves to a NextResponse object.
 */
export async function PUT(req: Request, res: NextResponse) {
  try {
    console.log(req.body)
  return NextResponse.json("recipe Edited");
} catch (error) {
  return NextResponse.json(error);
}
}