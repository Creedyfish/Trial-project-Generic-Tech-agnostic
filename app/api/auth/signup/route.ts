/**
 * This module handles POST requests in a Next.js serverless function.
 * 
 * @module route
 */

// Importing necessary modules
import { NextResponse } from "next/server"; // Next.js server response object
import data from '@/data.json' // Importing data from a JSON file

/**
 * Handles POST requests.
 * 
 * @async
 * @function
 * @param {Request} req - The incoming request object.
 * @param {Response} res - The outgoing response object.
 * @returns {NextResponse} - Returns a NextResponse object with a JSON payload.
 * 
 * On success, it returns a JSON object with a message "SignedUp" and a status code of 201.
 * On failure, it returns a JSON object with the error.
 */
export const POST = async (req: Request, res: Response) => {
    try {
        // Attempt to process the request and return a success response
        return NextResponse.json({data : "SignedUp"}, {status: 201})
    } catch (error) {
        // If an error occurs, return a response with the error
        return NextResponse.json(error)
    }
}