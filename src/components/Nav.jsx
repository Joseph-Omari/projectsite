import React, { useState } from 'react'
import Button from './Button'

const Nav = () => {

    let Links =[
        {name:"HOME", link:"#home"},
        {name:"ABOUT", link:"#about"},
        {name:"SERVICE", link:"#service"},
        {name:"TEMPLATES", link:"/"},
        {name:"CONTACT ", link:"#contact"}
    ]

    let Linkks =[
        {name:"logo-whatsapp", link:"https://wa.me/233543769376",clr:'bg-green-600 '},
        {name:"logo-instagram", link:"https://www.instagram.com/invites/contact/?i=1qdglw3x1ipty&utm_content=ayflwuz",clr:'bg-gradient-to-r from-amber-600 to-pink-700'},
        {name:"logo-github", link:"https://github.com/Joseph-Omari",clr:'bg-black'},
        {name:"logo-facebook", link:"https://www.facebook.com/joseph.omari.9887?mibextid=LQQJ4d",clr:'bg-blue-700'},
        {name:"logo-snapchat", link:"https://t.snapchat.com/oKdWbfeb",clr:'bg-yellow-300'},
        {name:"call-outline", link:"tel:0595805299",clr:'bg-green-500'}
    ]


    let [open,setOpen] = useState(false)

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
        <div className='md:flex items-center justify-between bg-white p-4 md:px-10 '>
            <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <span className='text-3xl text-sky-500 pr-1 pt-2 '><ion-icon name="heart"></ion-icon></span>
                JoeTech.Dev
            </div>

            <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden' onClick={()=>setOpen(!open)}>
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ?'top-20 opacity-100':'top-[-490px] md:opacity-100 opacity-0'} `}>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 ' >
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500' >{link.name}</a>
                        </li>
                    ))
                }
                <ul className='flex gap-2 md:hidden'> {
                Linkks.map((link)=>(
                    <li key={link.name} className='md:ml-2 text-xl hover:scale-[120%] duration-500 ' >
                        <a href={link.link} className={`text-xl text-white p-1 rounded-md items-center flex ${link.clr} `} > <ion-icon name={link.name}/> </a>
                    </li>
                ))
                }
            </ul>
            </ul>
            

        </div>

    </div>
  )
}

export default Nav 