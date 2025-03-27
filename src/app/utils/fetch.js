"use server";

import { cookies } from "next/headers";

const BASE_URL = "http://localhost:8080";

const getHeaders = async () => {
    const cookieStore = await cookies();

    return {
        "Content-Type": "application/json",
        "Authorization": cookieStore.get("token")?.value
    };
}

export async function apiGet(endpoint) {
    const defaultHeaders = await getHeaders();

    return fetch(endpoint, {
        headers: {
            ...defaultHeaders,
        },
    });
}

export async function apiFetch(endpoint, options = {}) {
    const defaultHeaders = await getHeaders();

    if (options.body) {
        const dataObject = Object.fromEntries(options.body.entries());

        options = {
            ...options,
            body: JSON.stringify(dataObject),
        }
    }

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    return response.json();
}