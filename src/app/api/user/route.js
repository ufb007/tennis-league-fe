import { cookies } from "next/headers";

const BASE_URL = "http://localhost:8080";
const ENDPOINT = "/api/auth/me";

export async function GET() {
    const cookieStore = await cookies();

    const defaultHeaders = {
        "Content-Type": "application/json",
        "Authorization": cookieStore.get("token")?.value
    };

    const response = await fetch(`${BASE_URL}${ENDPOINT}`, {
        headers: {
            ...defaultHeaders,
        },
    });

    const data = await response.json();

    return Response.json(data);
}