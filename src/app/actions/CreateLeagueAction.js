"use server";

import { apiFetch } from "../utils/fetch";

export async function CreateLeagueAction(_, formData) {
    console.log('Form Data - ', formData);

    const response = await apiFetch('/api/leagues', {
        method: 'POST',
        body: formData,
    });

    return response.token 
        ? { success: "Logged in successfully!", league: response.league }
        : { error: response.error };
}