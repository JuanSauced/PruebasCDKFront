'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Steps = 'email' | 'confirmationCode' | 'next';

type Inputs = {
    username: string;
    confirmationCode?: string;
};

export const ResetPasswordForm = () => {

    const [step, setStep] = useState<Steps>('email');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const { push } = useRouter();

    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async({ username, confirmationCode }) => {

    };

    const handleCancel = () => push("/auth/login");

  return (
    <form onSubmit={ handleSubmit( onSubmit )} className="w-full mt-10">
        <label>Correo electrónico o nombre de usuario:</label>
        <input
            { ...register("username")}
            className="shadow-lg rounded-lg h-11 w-full focus:outline-none placeholder:text-sm px-4 mt-1 mb-5"
            type="text"
            placeholder="Insertar correo o nombre de usuario"
        />

        {
            step === 'confirmationCode' && (
            <>
            <label>Confirmación de código:</label>
            <input
                { ...register("confirmationCode")}
                className="shadow-lg rounded-lg h-11 w-full focus:outline-none placeholder:text-sm px-4 mt-1 mb-5"
                type="text"
                placeholder="Insertar el código de seguridad"
            />
            <span className="text-xs text-gray-500">*El código tiene vigencia de una hora</span>
            </>
            )
        }

        <div className="flex w-full justify-end gap-x-3">
            <button
                onClick={ handleCancel }
                className="button px-4 py-2 mt-10 rounded-lg"
            >
                Cancelar
            </button>
            <button
                disabled={ isSubmitted }
                type="submit"
                className="px-4 py-2 mt-10 rounded-lg button"
            >
                Continuar
            </button>
        </div>
    </form>
  )
}
