import React from 'react'

const ButtonI = (props) => {
  return (
    <button className='bg-sky-800 text-white py-2 px-6 rounded md:ml-8 hover:bg-sky-600 duration-500'>
        {props.children}
    </button>
  )
}

export default ButtonI