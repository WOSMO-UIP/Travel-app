import React from 'react';
import plan1 from './images/plan1.jpg';
import plan2 from './images/plan2.jpg';
import plan4 from './images/plan4.jpg';
import plan5 from './images/plan5.jpg';



function Plan() {
  return (
    <div className='text-purple-950 max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-1'>
      <div className='grid grid-cols-4 grid-rows-5 h-[80vh] rounded gap-4 group'>
        <img className=' row-span-2 col-span-2 object-cover w-full h-full rounded drop-shadow-xl shadow-2xl' src={plan1} alt="/" />
        <img className=' row-span-3 col-span-2 object-cover w-full h-full rounded drop-shadow-xl shadow-2xl' src={plan2} alt="" />
        <img className=' row-span-4 col-span-2 object-cover w-full h-full rounded drop-shadow-xl shadow-2xl' src={plan4} alt="/" />
        <img className=' row-span-3 col-span-2 object-cover w-full h-full drop-shadow-xl shadow-2xl rounded' src={plan5} alt="/" />
      </div>

      <div className="flex flex-col h-full justify-center align-center mt-10 sm:p-10 lg:p-10 ">
        <h1 className='text-5xl md:text-6xl font-bold '>Plan Your Next Trip</h1>
        <p className='lg:text-2xl py-6 text-lg '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, ipsum.</p>
        <p className='lg:text-2x py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, architecto similique! Aut amet earum, hic asperiores suscipit perferendis nobis iste.</p>
        <div className='pb-6'>
          <button className="m-2 ml-0">
            Learn More
          </button>
          <button className="m-2">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;

