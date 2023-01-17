import React from 'react'

let Links =[
    {name:"logo-whatsapp", link:"https://wa.me/233543769376",clr:'bg-green-600 '},
    {name:"logo-instagram", link:"https://www.instagram.com/invites/contact/?i=1qdglw3x1ipty&utm_content=ayflwuz",clr:'bg-gradient-to-r from-amber-600 to-pink-700'},
    {name:"logo-github", link:"https://github.com/Joseph-Omari",clr:'bg-black'},
    {name:"logo-facebook", link:"https://www.facebook.com/joseph.omari.9887?mibextid=LQQJ4d",clr:'bg-blue-700'},
    {name:"logo-snapchat", link:"https://t.snapchat.com/oKdWbfeb",clr:'bg-yellow-300'},
    {name:"call-outline", link:"tel:0595805299",clr:'bg-green-500'}
]

const Contact = () => {
  return (
    <div className='md:flex md:justify-evenly h-48 pt-4 md:pt-0 items-center bg-slate-300 space-y-6 md:space-y-0 scroll-mt-10' id='contact'>
      <div className='flex-1'>
          <h1 className='flex justify-center text-xl md:text-[2rem] pl-5 lg:pl-0 font-semibold text-sky-600 uppercase'>Online Business Made Easier!!</h1>
      </div>
      <div className='flex justify-center flex-1'>
        <div>
          <h1 className='flex justify-center mb-2 '>Get in Touch Now</h1>

            <ul className='flex gap-2'> {
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-2 text-xl hover:scale-[120%] duration-500' >
                        <a href={link.link} className={`text-xl text-white p-1 rounded-md items-center flex ${link.clr} `} > <ion-icon name={link.name}/> </a>
                    </li>
                ))
                }
            </ul>
        </div>
      </div>
    </div >
  )
}

export default Contact