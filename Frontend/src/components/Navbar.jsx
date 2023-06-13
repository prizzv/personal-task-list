import React from 'react'

const Navbar = () => (
    <div className="w-full text-white flex justify-end border-b-2 border-slate-500 pt-3 pb-1">
        <a href="/login" className='px-5 text-[20px]'>Login</a>
        <a href="/signup" className='px-6 text-[20px] '>Signup</a>
    </div>
  )


export default Navbar