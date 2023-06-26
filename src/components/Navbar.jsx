import React, { useState } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'


function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        (!nav) ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';    
    }
    return (

        <div className='absolute w-full flex justify-between p-4 items-center bg-purple-950'>
            <h1 className='text-white font-bold text-2xl z-20'>
                Experiance
            </h1>
            <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
            <div 
            className={
                nav 
                ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-purple-950/90 px-4 py-7 flex-col z-10' : 
                'absolute top-0 h-screen left-[-100%] ease-out duration-500 z-10'}
            >
                <ul className='flex flex-col w-full h-full fixed items-center justify-center'>
                    <li className='text-3xl font-bold p-8 '>Home</li>
                    <li className='text-3xl font-bold p-8 '>Destinations</li>
                    <li className='text-3xl font-bold p-8 '>Reservations</li>
                    <li className='text-3xl font-bold p-8 '>Amenities</li>
                    <li className='text-3xl font-bold p-8 '>Rooms</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar