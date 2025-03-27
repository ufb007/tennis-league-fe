"use server";

import { NextResponse } from "next/server";
import { apiFetch } from "./app/utils/fetch";
import { cookies } from "next/headers";

export async function middleware(req) {
    const cookieStore = await cookies();
    const { url, nextUrl: { pathname } } = req;

    const response = await apiFetch("/api/auth/check")

    if (response.token) {
        cookieStore.set("token", response.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });
    } else {
        if (pathname !== "/login") {
            return NextResponse.redirect(new URL("/login", url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/login",
        "/leagues"
    ],
};