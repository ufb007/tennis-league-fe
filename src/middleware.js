import { NextResponse } from "next/server";
import { apiFetch } from "./app/utils/fetch";

export function middleware(req) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    if (token) {
        const response = apiFetch("/api/auth/check")

        if (!response.error) {
            if (pathname === "/login") {
                return NextResponse.redirect(new URL("/league", req.url))
            }
        }
    } else {
        if (pathname !== "/login") {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/login",
        "/league"
    ],
};