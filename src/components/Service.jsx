import React from 'react'

const Service = () => {
  return (
    <div className='bg-sky-500 py-10 px-5 scroll-mt-10' id='service'>
        <h1 className='flex justify-center font-semibold md:text-xl text-md pb-3'>WHAT WE DO</h1>
        <h1 className='flex justify-center text-3xl font-bold text-center  border-b-2 border-opacity-70 w-fit mx-auto md:text-4xl pb-8'>
            We've got everything you need to launch and grow your business online.
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 space-y-20 md:space-y-0 md:gap-6'>
            <div className='bg-sky-700 shadow-2xl rounded-lg p-4 hover:ring-4 ring-white duration-500'>
                <div className='text-white text-5xl flex justify-center'>
                    <ion-icon name="code-slash-outline"></ion-icon>
                </div>
                <h1 className='flex justify-center text-white text-2xl font-semibold mb-5 '>Web Development</h1>
                <p className='text-white text-xl text-center'>
                    We build web applications in all of the languages. We also provide reliable database services to ensure that your information is safe regardless of where it is being picked .
                </p>
            </div>

            <div className='bg-sky-700 shadow-2xl hover:ring-4 ring-white duration-500 rounded-lg p-4'>
                <div className='text-white text-5xl flex justify-center'>
                    <ion-icon name="brush-outline"></ion-icon>
                </div>
                <h1 className='flex justify-center text-white text-2xl font-semibold  mb-5'>Web Design (UI/UX)</h1>

                <p className='text-white text-xl text-center'>
                    In our portfolio, we have a range of beautiful designs ranging from morden to classic. We provide the best services when it comes to idea visualisation, user experience visualisation.
                </p>
            </div>

            <div className='bg-sky-700 shadow-2xl hover:ring-4 ring-white duration-500 rounded-lg p-4'>
                <div className='text-white text-5xl flex justify-center'>
                    <ion-icon name="color-palette-outline"></ion-icon>
                </div>
                <h1 className='flex justify-center text-white text-2xl font-semibold  mb-5'>Photoshop Design</h1>

                <p className='text-white text-xl text-center'>
                If you’re looking for a graphic designs, then look no further than Joe Tech Dev. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Service