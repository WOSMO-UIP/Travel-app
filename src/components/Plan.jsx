import React from 'react';

function Plan(props) {
  return (
    <div className='text-purple-950 max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-1'>
      <div className='grid grid-cols-4 grid-rows-5 h-[80vh] rounded gap-4 group'>
        <img className='row-span-2 col-span-2 object-cover w-full h-full rounded drop-shadow-xl shadow-2xl' src={props.plan1} alt="/" />
        <img className='row-span-3 col-span-2 object-cover w-full h-full rounded drop-shadow-xl shadow-2xl' src={props.plan2} alt="" />
        <img className='row-span-4 col-span-2 object-cover w-full h-full rounded drop-shadow-xl shadow-2xl' src={props.plan4} alt="/" />
        <img className='row-span-3 col-span-2 object-cover w-full h-full drop-shadow-xl shadow-2xl rounded' src={props.plan5} alt="/" />
      </div>

      <div className="flex flex-col h-full justify-center align-center p-10">
        <h1 className='text-5xl md:text-6xl font-bold'>{props.heading}</h1>
        <p className='text-2xl py-6'>{props.p1}</p>
        <p className='text-2xl py-6'>{props.p2}</p>
        <div className='pb-6'>
          <button className="relative rounded-full bg-transparent backdrop-filter backdrop-blur-sm hover:bg-purple-950 hover:text-white border-0 py-2 px-4 transition-colors duration-300 ease-in-out shadow-lg md:shadow-md hover:shadow-xl m-2">
            Learn More
          </button>
          <button className="relative rounded-full text-white bg-purple-950 hover:text-purple-950 hover:bg-white border-0 py-2 px-4 transition-colors duration-300 ease-in-out shadow-lg md:shadow-md hover:shadow-xl m-2">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
}

export default Plan;

