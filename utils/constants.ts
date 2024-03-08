export const baseUrl =
process.env.NODE_ENV === "development"
? "http://localhost:3000/"
: process.env.BASE_URL;

export const API_URL = `${baseUrl}/api`;