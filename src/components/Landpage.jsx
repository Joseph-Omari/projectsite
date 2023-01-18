import React from 'react'
import ButtonI from './ButtonI'
import { motion } from 'framer-motion'

const Landpage = () => {
  return (
    <motion.div  className='flex justify-center items-center w-screen h-screen text-white p-9' id='home'>
        <div className='md:p-20'>
            <motion.div  className='mx-auto md: flex md:justify-start '>
                <motion.h1
                    animate={{x: 0}} 
                    initial={{x:50}}
                    transition={{delay:0.5, duration:1}}
                    className='text-2xl md:text-7xl  pb-5'>Welcome to <br /><span className='font-bold '>JoeTech.Dev's Portfolio</span> 
                </motion.h1>
            </motion.div>
        

            <p className='text-md md:text-2xl md:w-2/3 flex justify-center md:justify-start'> Here is your friendly and experienced website and development experts! 
                Whether you're a small business, a large corporation, or any organization in between, we can help you create 
                the perfect website to fit your needs. With our extensive knowledge of coding, design, and development, we have the 
                perfect team to make your web dreams come true. Get in touch today to learn more about how we can help you.</p>
            
            <div className='flex pt-4 justify-evenly'>
                <div className='gap-5 flex'>
                    <a href="#about" ><ButtonI>Explore More</ButtonI></a>
                </div>
            </div>

            <div>
                <div>
                
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Landpage