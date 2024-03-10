

export const getAllRecipesData = async () => {
    const res = await fetch(`/api`, {
      method: "GET",
      cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }

  export const addRecipe = async (data: any) => {
    const res = await fetch(`/api/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
    return result;
  };


  export const getRecipe = async (data: any) => {
  
    const res = await fetch(`/api/recipes/${data}`, {
      method: "GET",
      cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }

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