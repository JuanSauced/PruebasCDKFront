'use client';
import useToggle from '@/hooks/useToggle';
import { userChangePassword } from '@/services';
import { confirmPasswordValidator } from '@/validators';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';

type Inputs = {
    confirmNewPassword: string;
    newPassword: string;
}; 

export const UpdatePasswordForm = () => {

    const { isOpen: isOpenNewPassword, toggle: toggleNewPassword } = useToggle();
    const { isOpen: isOpenConfirmedPassword, toggle: toggleConfirmedPassword } = useToggle();
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const { register, handleSubmit } = useForm<Inputs>();
    const { push } = useRouter();

    const onSubmit: SubmitHandler<Inputs> = async({ newPassword, confirmNewPassword }) => {
      try {
        
        if( !await confirmPasswordValidator({ newPassword, confirmNewPassword })) return;
        setIsSubmitted( true );

        const cookieValue = await getCookie('userData');
        const userData = JSON.parse(cookieValue || '{}');
        const { username, confirmationCode, type } = userData;

        if( type === 'resetPassword' ){

        } else {
          await userChangePassword({ username, password: newPassword });
        };

        deleteCookie('userData');
        push('/auth/login');
        setIsSubmitted( false );

      } catch (error) {
        
        console.log(error);

      }
    };

    const onUpdatePassword = async({ username, confirmationCode, newPassword }: any) => {

    };

    const onConfirmPassword = async({ username, password }: { username: string, password: string }) => {

    };

    const handleCancel = () => push("/auth/login");

  return (
    <form onSubmit={ handleSubmit( onSubmit ) } className="w-full mt-10">
        <label>Escriba su nueva contraseña</label>
        <div className="relative ">
        <input
          { ...register("newPassword", { required: true }) }
          className="rounded-lg h-11 w-full focus:outline-none placeholder:text-sm px-4 mt-1 mb-5"
          type={`${ isOpenNewPassword ? "text" : "password" }`}
          placeholder="Insertar contraseña"
        />
          {
            isOpenNewPassword
            ? <RiEyeLine onClick={ toggleNewPassword } className="absolute right-5 top-4 cursor-pointer text-[#E0E0E0] text-xl" />
            : <RiEyeOffLine onClick={ toggleNewPassword } className="absolute right-5 top-4 cursor-pointer text-[#E0E0E0] text-xl" />
          }
      </div>

      <label>Confirme su nueva contraseña</label>
      <div className="relative ">
        <input
          { ...register("confirmNewPassword", { required: true }) }
            className="rounded-lg h-11 w-full focus:outline-none placeholder:text-sm px-4 mt-1 mb-5"
            type={`${ isOpenConfirmedPassword ? "text" : "password" }`}
            placeholder="Insertar contraseña"
        />
        {
          isOpenConfirmedPassword
          ? <RiEyeLine onClick={ toggleConfirmedPassword } className="absolute right-5 top-4 cursor-pointer text-[#E0E0E0] text-xl" />
          : <RiEyeOffLine onClick={ toggleConfirmedPassword } className="absolute right-5 top-4 cursor-pointer text-[#E0E0E0] text-xl" />
        }
      </div>

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
