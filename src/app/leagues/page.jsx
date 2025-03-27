"use client";

import { useActionState, useEffect, useState } from "react";
import Button from "../components/Button";
import { CreateLeagueAction } from "../actions/CreateLeagueAction";
import Form from "next/form";
import Input from "../components/Input";

export default function Leagues() {
    const [leagues, setLeagues] = useState([]);
    const [state, createLeague] = useActionState(CreateLeagueAction, {});

    useEffect(() => {
        fetch("/api/leagues")
            .then(response => response.json())
            .then(data => setLeagues(data.leagues));
        

        if (state?.success) {
            setLeagues([...leagues, state.league]);
        }
    }, []);

    return (
        <div>
            <h1>Leagues</h1>
            <Form action={createLeague} className="flex gap-2 flex-col">
                <Input type="text" name="name" />
                <Button>Create League</Button>
                {state.error || state.success}
            </Form>
            {leagues?.length > 0 ? (
                leagues.map(league => (
                    <div key={league.id}>
                        <h2>{league.name}</h2>
                        <p>{league.active}</p>
                    </div>
                ))
            ) : (<p>No leagues found</p>)}
        </div>
    );
}
