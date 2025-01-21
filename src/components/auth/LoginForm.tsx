'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useFormState } from 'react-dom';
import { Form } from './Form';

export const LoginForm = () => {

    const { push } = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [state, dispatch] = useFormState(authenticate, undefined);

  return (
    <form className="w-full">
        <Form
          email={ email }
          setEmail={ setEmail }
          password={ password }
          setPassword={ setPassword }
        />
    </form>
  )
}
