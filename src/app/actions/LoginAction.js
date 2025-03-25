"use server";

import { apiFetch } from "../utils/fetch";
import { cookies } from "next/headers";

export async function LoginAction(_, formData) {
    const cookieStore = await cookies();

    const response = await apiFetch('/api/auth/login', {
        method: 'POST',
        body: formData,
    });

    if (response.token) {
        cookieStore.set("token", response.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });
    }

    return response.token 
        ? { success: "Logged in successfully!", token: response.token }
        : { error: response.error };
}