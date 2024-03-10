/**
 * This module handles POST requests in a Next.js serverless function.
 * 
 * @module route
 */

// Importing necessary modules
import { NextResponse,NextRequest } from "next/server"; // Next.js server response object
import data from '@/data.json' // Importing data from a JSON file

/**
 * Handles POST requests.
 * 
 * @async
 * @function
 * @param {NextRequest} req - The incoming request object.
 * @returns {NextResponse} - Returns a NextResponse object with a JSON payload.
 * 
 * On success, it returns a JSON object with a message "Logged In" and a status code of 201.
 * On failure, it returns a JSON object with the error.
 */
export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const body = await req.json()
        const {email,password} = body
        const user = data.users.find(user => user.email === email)
        if (!user) {
            // If no user is found, return an error
            return NextResponse.json({ data: {isAdmin:false} }, {status: 404})
        }

        if (user.password !== password) {
            // If the passwords don't match, return an error
            return NextResponse.json({ data: {isAdmin:false} }, {status: 401})
        }

        // if (user.isAdmin === true){
        //     return NextResponse.json({data:user}, {status: 201})
        // }
        console.log

        return NextResponse.json({ data:user }, {status: 201})
    } catch (error) {
        // If an error occurs, return a response with the error
        return NextResponse.json(error)
    }
}