const BASE_URL = "http://localhost:3000";

export async function registerUser(data) {
  const response = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  return await response.json();
}

export async function loginUser(data) {
  const response = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Erro ao fazer Login");
  }

  return result;
}

export async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Erro ao buscar produtos");
  }

  return result;
}

export async function postProduct(formData) {
  const response = await fetch(`${BASE_URL}/api/products`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Erro ao criar Produto");
  }

  return result;
}


export async function forgotPasswordRequest(data) {
  const response = await fetch(`${BASE_URL}/api/forgot-password`, { // Ajuste a URL da sua API
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || 'Falha ao enviar e-mail de recuperação.');
  }

  return responseData;
}

