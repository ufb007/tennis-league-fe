import { config } from "@/app/utils/config";
import { getHeaders } from "@/app/utils/fetch";

const BASE_URL = config.API_URL;
const ENDPOINT = "/api/leagues";

export async function GET() {
    const headers = await getHeaders();

    const response = await (await fetch(`${BASE_URL}${ENDPOINT}`, { headers })).json();

    return Response.json({response});
}