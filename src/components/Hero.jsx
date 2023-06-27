import React from 'react'
import bgImg from './images/bgImg.jpg'
function Hero() {
    return (
        <div className='w-full h-screen '>
           <img className='top-0 left-0 w-full h-screen object-cover' src={bgImg} alt="/" /> 
            <div className='bg-purple-950/5 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0  w-full h-full flex flex-col justify-center text-purple-100 text-shadow-2xl'>
                <div className='md:left-[10%] max-w-[1100px] m-auto  absolute p-4'>
                    <p>All Inclusive</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                    <p className='max-w-[600px] py-2 text-xl drop-shadow-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fugit quaerat quisquam vero voluptas incidunt animi, reprehenderit recusandae dolorem accusantium.</p>

                    {/* <button class="relative rounded-full bg-transparent backdrop-filter backdrop-blur-md hover:bg-purple-950 hover:text-white border-2 border-purple-950 py-2 px-4 transition-colors duration-300 ease-in-out">
                        Reserve Now
                    </button> */}
                    <button class=" text-purple-950 bg-purple-50"> 
                        Reserve Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero


