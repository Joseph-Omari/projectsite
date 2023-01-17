import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j81f1hl', 'template_9lein0p', form.current, '5GmtjCzRLWIZClSLC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='bg-black text-white  '>
        <div className='md:flex bg-gray-700 p-4 '>
            <div className='flex-1 items-center flex justify-center'>
                <div className=''>
                    <h1 className='flex justify-center text-sky-600  font-semibold'>CONTACT US</h1>
                    <h1 className='flex text-center justify-center font-bold text-3xl mx-auto'>Reach out for a new project or just say hello.</h1>
                </div>
            </div>
            <div className='flex-1 p-6'>
                <h1 className='flex justify-center font-semibold text-lg pb-2'>SEND US A MESSAGE</h1>

                <div className=''>
                    <form ref={form} onSubmit={sendEmail} method="get" className='space-y-4'>
                        <input type="text" name='user_name' className='md:w-2/3 w-full mx-auto flex h-12 p-2 bg-transparent border-b-2 border-white rounded-md text-white' required placeholder='Your Name' />
                        <input type="email" name='user_email' className='md:w-2/3 w-full mx-auto flex h-12 p-2 bg-transparent border-b-2 border-white rounded-md text-white' required placeholder='Your Email' />
                        <input type="text" name='user_subject' className='md:w-2/3 w-full mx-auto flex h-12 p-2 bg-transparent border-b-2 border-white rounded-md text-white' placeholder='Subject' />
                        <input type="text" name='message' className='md:w-2/3 w-full mx-auto flex h-12 p-2 bg-transparent border-b-2 border-white rounded-md text-white' required placeholder='Your Message' />
                        <button type='submit' className='md:w-2/3 w-full mx-auto flex h-12 p-2 bg-sky-600 hover:bg-sky-400 justify-center rounded'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
        
        <div className='md:flex md:justify-evenly p-10 bg-gray-600 space-y-4 md:space-y-0'>
            <div>
                <h1 className='text-sky-600 flex justify-center text-xl p-1'>Where to Find Us</h1>
                <div>
                    <p className='flex justify-center'>
                        Accra Ghana
                    </p>
                    <p className='flex justify-center'>
                        Kasoa Iron City
                    </p>
                </div>
            </div>
            <div>
                <h1 className='text-sky-600 flex justify-center text-xl p-1'>Email Us At</h1>
                <div>
                    <p className='flex justify-center'>Josephomari80@gmail.com</p>
                    <p className='flex justify-center'>Joetechcom80@gmail.com</p>
                    <p className='flex justify-center'>Josephomari16@gmail.com</p>
                </div>
            </div>
            <div>
                <h1 className='text-sky-600 flex justify-center text-xl p-1'>Call Us At</h1>
                <div>
                    <p className='flex justify-center'>CALL: 0543769376</p>
                    <p className='flex justify-center'>0506182413</p>
                    <p className='flex justify-center'>0595805299</p>
                </div>
            </div>
        </div>
        <h1 className='text-sm flex items-center bottom-4 justify-center py-8'>Copyright &copy;2023. Developed by JoeTech Dev  </h1>
    </div>
  )
}

export default Footer