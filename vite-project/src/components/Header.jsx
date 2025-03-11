import React from 'react'

const Header = () => {
  return (
    <div className='h-[10vh]  flex align-center justify-center   items-center w-[100%] bg-slate-500 cursor-pointer pr-[40px]'>
    <ul className='flex gap-4'>
      <li className='hover:text-blue-400' >Home</li>
      <li className='hover:text-blue-400'>About</li>
      <li className='hover:text-blue-400'>Job</li>

    </ul>
  </div>
  
  )
}

export default Header
