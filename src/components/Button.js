import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-sky-500 text-white py-2 px-6 rounded md:ml-8 hover:bg-sky-400 duration-500'>
        {props.children}
    </button>
  )
}

export default Button