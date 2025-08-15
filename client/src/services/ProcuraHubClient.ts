export async function register(registerData: {
    fullName: string;
    company: string;
    workEmail: string;
    password: string;
    confirmPassword: string;
    role: string;
    termsAccepted: boolean;
}) {
  const url = "http://procure-app-latest.onrender.com/api/auth/register";
  try {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
        name: registerData.fullName,
        email: registerData.workEmail,
        password: registerData.password
    })
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

export async function createRequest(token: string, formData: Record<string, string>) {
    const response = await fetch(
        "http://procure-app-latest.onrender.com/api/requests/createRequest",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${token}`
            },
            body: new URLSearchParams(formData)
        }
    );

    // Handle response
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed: ${errorText}`);
    }

    return await response.json();
}


