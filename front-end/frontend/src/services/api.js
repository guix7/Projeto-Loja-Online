const BASE_URL = "http://localhost:3000";

export async function registerUser(data){
    const response = await fetch(`${BASE_URL}/api/register`, {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if(!result){
        throw new Error(result.message || "Erro ao cadastrar");
    }

    return result;
}

export async function loginUser(data){
    const response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if(!response.ok){
        throw new Error(result.message || "Erro ao fazer Login");
    }

    return result;
}

export async function getProducts(){
    const token = localStorage.getItem("token");

    if(!token){
        throw new Error("Usuário não autenticado")
    }

    const response = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },

    })

    const result = await response.json();

    if(!response.ok){
        throw new Error(result.message || "Erro ao buscar produtos");
    }

    return result;
}

export async function postProduct(formData){
    const token = localStorage.getItem("token");

    const response = await fetch(`${BASE_URL}/api/products`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    })

    const result = await response.json();

    if(!response.ok){
        throw new Error(result.message || "Erro ao criar Produto")
    }

    return result;
}