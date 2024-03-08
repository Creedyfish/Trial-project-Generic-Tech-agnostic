import { API_URL } from "@/utils/constants";

export const getData = async () => {
    const res = await fetch(`${API_URL}`, {
      method: "GET",
      cache: "no-cache",
    });
  
    const result = await res.json();
  return result;
  }

  export const SignUp = async (data: any) => {
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

  export const Login = async (data: any) => {
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