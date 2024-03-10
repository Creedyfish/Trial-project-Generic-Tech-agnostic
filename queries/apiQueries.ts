

/**
 * Fetches all recipes data from the API.
 * 
 * @async
 * @function
 * @returns {Promise<Object>} - Returns a promise that resolves to the data of all recipes.
 */
export const getAllRecipesData = async () => {
    const res = await fetch(`/api`, {
      method: "GET",
      cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }
/**
 * Adds a new recipe to the API.
 * 
 * @async
 * @function
 * @param {Object} data - The data of the new recipe.
 * @returns {Promise<Object>} - Returns a promise that resolves to the data of the new recipe.
 */
  export const addRecipe = async (data: any) =>  {
    const res = await fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
    return result;
  };
/**
 * This function sends a PUT request to the '/api/recipes' endpoint to update a recipe.
 * It expects an object with the data for the recipe to be updated.
 * The data is converted to a JSON string and included in the body of the request.
 * The function then waits for the response, converts the response to JSON, and returns the result.
 *
 * @param data - The data for the recipe to be updated. This should be an object that can be converted to a JSON string.
 * @returns A Promise that resolves to the result of the PUT request.
 */
  export const UpdateRecipe = async (data: any) =>  {
    const res = await fetch('/api/recipes', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
    return result;
  };
/**
 * Fetches a specific recipe from the API.
 * 
 * @async
 * @function
 * @param {Object} data - The data of the recipe to fetch.
 * @returns {Promise<Object>} - Returns a promise that resolves to the data of the recipe.
 */
  export const getRecipe = async (data: any) => {
  
    const res = await fetch(`/api/recipes/${data}`, {
      method: "GET",
      cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }
/**
 * Deletes a specific recipe from the API.
 * 
 * @async
 * @function
 * @param {Object} data - The data of the recipe to delete.
 * @returns {Promise<Object>} - Returns a promise that resolves to the result of the deletion.
 */
  export const deleteRecipe = async (data: any) => {
  
    const res = await fetch(`/api/recipes/${data}`, {
      method: "DELETE",
      cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }

  /**
 * Signs up a new user to the API.
 * 
 * @async
 * @function
 * @param {Object} data - The data of the new user.
 * @returns {Promise<Object>} - Returns a promise that resolves to the result of the signup.
 */
  export const signUp = async (data: any) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
    return result;
  };

  /**
 * Logs in a user to the API.
 * 
 * @async
 * @function
 * @param {Object} data - The data of the user.
 * @returns {Promise<Object>} - Returns a promise that resolves to the result of the login.
 */
  export const login = async (data: any) => {
    const res = await fetch('/api/auth/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
    return result;
  };