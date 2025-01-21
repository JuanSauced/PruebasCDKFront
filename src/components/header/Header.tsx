import React from 'react'

export const Header = () => {
  return (
    <>
    <div className='w-full h-4 bg-1 z-20 sticky top-0'/>
    <div className='w-full max-w-[1200px] rounded-xl z-20 sticky top-4 flex gap-x-4'>
        <div className='p-4 h-24 w-[250px] rounded-xl shadow'>
            {/* TODO: Logo */}
        </div>
        <div className='header p-4 h-24 w-full rounded-xl'>
            {/* TODO: Header */}
        </div>
    </div>
    </>
  )
}
