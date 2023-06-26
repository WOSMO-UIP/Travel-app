import React from 'react'
import Room1 from "./images/Room1.jpg";
import Room2 from "./images/Room2.jpg";
import Room3 from "./images/Room3.jpg";

function Rooms() {
  return (
    
    <div className='max-w-[1400px] h-[500px] bg-purple-300/50 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 shadow-2xl text-purple-950 rounded'>
    <div className='lg:top-20 relative lg:col-span-1 col-span-2 '>
        <h3 className='text-[45px] font-extrabold mb-[30px]'>Fine Interior Rooms</h3>
        <p className='pt-4'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>

    <div className='grid grid-cols-4 col-span-2 gap-2  '>
      <img
      className='object-cover w-full h-full row-span-1 col-span-2 duration-500 bg-purple drop-shadow-2xl shadow-2xl  rounded '
        src={Room1}
        alt='/'
      />
      <img
      className=' object-cover w-full h-full row-span-2 col-span-2 duration-500 bg-purple drop-shadow-2xl shadow-2xl  rounded'
        src={Room2}
        alt='/'
      />
      <img
      className='object-cover w-full h-full row-span-1 col-span-2 duration-500 bg-purple drop-shadow-2xl shadow-2xl  rounded'
        src={Room3}
        alt='/'
      />
    </div>
  </div>
  )
}

export default Rooms



