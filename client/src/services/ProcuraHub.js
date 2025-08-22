const BASE_URL = "https://procure-app-latest.onrender.com/api"; 


export async function register(registerData) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: registerData.fullName,
      company: registerData.company,
      email: registerData.workEmail,
      password: registerData.password,
      role: registerData.role.toLowerCase(),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Request failed with status ${response.status}`);
  }

  const data = await response.json();
  
  if (data.token) localStorage.setItem("token", data.token);
  if (data.userId) localStorage.setItem("userId", data.userId);
  

  return data;
}

export async function login(loginData) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginData.email,
      password: loginData.password,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Request failed with status ${response.status}`);
  }

  const data = await response.json();
 
  if (data.token) localStorage.setItem("token", data.token);
  if (data.userId) localStorage.setItem("userId", data.userId);
  if (data.name) localStorage.setItem("userName", loginData.email);

  return data;
}

export async function createRequest(token, formData) {
  try {
    const response = await fetch(`${BASE_URL}/requests/createRequest`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  
        Authorization: `Bearer ${token}`,     
      },
      body: JSON.stringify({
        itemName: formData.itemName,          
        quantity: formData.quantity,
        reason: formData.reason,                     
        estimatedPricePerUnit: formData.estimatedPricePerUnit, 
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error("Error in createRequest:", err);
    throw err;
  }
}

export async function getAllRequests(token) {
  try {
    const response = await fetch(`${BASE_URL}/requests/getAllRequests`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error in getAllRequests:", err);
    throw err;
  }
}


export async function getApprovedRequests(token) {
  try {
    const response = await fetch(`${BASE_URL}/requests/getApprovedRequests`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Request failed with status ${response.status}`);
    }

    return response.json();
  } catch (err) {
    console.error("Error in getApprovedRequests:", err);
    throw err;
  }
}
