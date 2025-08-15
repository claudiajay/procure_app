// ProcuraHub.js

export async function register(registerData) {
  try {
    const response = await fetch(`${BASE_URL}/auth/register/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: registerData.fullName,
        email: registerData.workEmail,
        password: registerData.password
      })
    });

    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function login(loginData) {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginData.workEmail,
        password: loginData.password
      })
    });

    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export async function createRequest(token, formData) {
  try {
    const response = await fetch(`${BASE_URL}/requests/createRequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${token}`
      },
      body: new URLSearchParams(formData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}




