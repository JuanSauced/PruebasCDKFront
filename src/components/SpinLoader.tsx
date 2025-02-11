import React from 'react'

interface Props {
    width?: string;
    height?: string;
    color?: string;
};

export const SpinLoader = ({ color, height, width }: Props) => {
  return (
    <span className='text-white text-center flex items-center justify-center gap-x-2 text-xs'>
        <div className={`${ color } ${ height } ${ width } h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4`}></div>
        Cargando...
    </span>
    
  )
}
