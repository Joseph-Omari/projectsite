import React from 'react'
import ButtonI from './ButtonI'

const Landpage = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen text-white p-9' id='home'>
        <div>
            <div className='mx-auto flex justify-center'>
                <h1 className='text-2xl md:text-7xl  pb-5'>Welcome to <br /><span className='font-bold '>JoeTech.Dev's Portfolio</span> </h1>
            </div>
        

            <p className='text-md md:text-2xl md:w-2/3 mx-auto flex justify-center'> Here is your friendly and experienced website and development experts! 
                Whether you're a small business, a large corporation, or any organization in between, we can help you create 
                the perfect website to fit your needs. With our extensive knowledge of coding, design, and development, we have the 
                perfect team to make your web dreams come true. Get in touch today to learn more about how we can help you.</p>
            
            <div className='flex pt-4 justify-evenly'>
                <div className='gap-5 flex'>
                    <a href="/" ><ButtonI>Explore More</ButtonI></a>
                </div>
            </div>

            <div>
                <div>
                    <h1></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landpage