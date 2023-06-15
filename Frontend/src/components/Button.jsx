import React from 'react'

function Button({onclick}) {
  return (
    <button type="button" className={`absolute right-10 rounded-full  w-[50px] h-[50px] text-[30px] flex justify-center items-center bg-blue-gradient font-bold `} onClick={onclick}>
      +
    </button>

  )
}

export default Button;