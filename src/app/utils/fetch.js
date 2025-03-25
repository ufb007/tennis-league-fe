"use server";

import { cookies } from "next/headers";

const BASE_URL = "http://localhost:8080";

export async function apiFetch(endpoint, options = {}) {
    const cookieStore = await cookies();

    const defaultHeaders = {
        "Content-Type": "application/json",
        "Authorization": cookieStore.get("token")?.value
    };

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

    return (await fetch(`${BASE_URL}${endpoint}`, config)).json();
}