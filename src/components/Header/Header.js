import React from 'react'

function Header() {
  return (
    <header className='bg-yellow-500 p-3 text-white flex justify-between w-full '>
      <h1 className='text-2xl uppercase font-bold '>Mobile Store</h1>
      <button className='bg-sky-300 text-white px-4 border-none rounded-md font-semibold text-md cursor-pointer'>Register</button>
    </header>

  )
}

export default Header
