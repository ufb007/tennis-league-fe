"use client";

import Form from 'next/form';
import { useActionState, useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { LoginAction } from '../actions/LoginAction';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [state, login] = useActionState(LoginAction, {});
    const router = useRouter();

    useEffect(() => {
        if (state?.success) {
            router.push("/league");
        }
    }, [state?.success]);

    return (
        <div className='flex gap-4 justify-center'>
            <Form action={login} className='flex flex-col gap-2 w-1/3'>
                <Input type="text" name="email" />
                <Input type="password" name="password" />
                <Button type="submit" className='p-2 w-1/2'>Login</Button>
                {state.error || state.success}
            </Form>
        </div>
    );
}
