/**
 * This module handles POST requests in a Next.js serverless function.
 * 
 * @module route
 */

// Importing necessary modules
import { NextResponse,NextRequest } from "next/server"; // Next.js server response object
import data from '@/data.json' // Importing data from a JSON file

/**
 * This function handles POST requests.
 * It expects the request body to contain an email and password.
 * It checks if a user with the provided email exists in the data.
 * If the user exists, it checks if the provided password matches the user's password.
 * If the email and password are valid, it returns a response with the user's data.
 * If the email or password is not valid, it returns a response with an error message and a status code of 401 or 404.
 * If an error occurs during the execution of the function, it returns a response with the error.
 *
 * @param req - The request object. Expected to contain a JSON body with an email and password.
 * @param res - The response object. Used to send a response to the client.
 * @returns A Promise that resolves to a NextResponse object.
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

        

        return NextResponse.json({ data:user }, {status: 201})
    } catch (error) {
        // If an error occurs, return a response with the error
        return NextResponse.json(error)
    }
}