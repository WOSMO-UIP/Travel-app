import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


import Food1 from "./images/food1.jpg";
import Food2 from "./images/food2.jpg";
import Food3 from "./images/food3.jpg";
import Food4 from "./images/food4.jpg";





function ImageSlider() {
const slides = [
    {
        url: Food1,
        title: "food1",
    },
    {
        url: Food2,
        title: "food2",
    },
    {
        url: Food3,
        title: "food3",
    },
    
    {
        url: Food4,
        title: "food4",
    },
    
]

 

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () =>{ 
    const isFirstSlide = currentIndex === 0;
    const nextIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
}

const nextSlide = () =>{ 
    const isLastIndex = currentIndex === slides.length - 1;
    const nextIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
}


    return (
        <div className='max-w-[1100px] h-[580px] m-auto py-16 px-4 relative group  '>
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-black drop-shadow-2xl hover:shadow-2xl ease-in-out" style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
            
            {/* left arrow  */}
            <div className="absolute top-[50%] bg-purple-500/30  -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 group-hover:bg-purple-950/40 text-white cursor-pointer left-5">
                <BsChevronCompactLeft  className=''  size={30} onClick={prevSlide}/>
            </div>

            {/* right arrow */}
             <div className="absolute top-[50%] bg-purple-500/30 -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 group-hover:bg-purple-950/40 text-white cursor-pointer right-5">
                <BsChevronCompactRight className='' size={30} onClick={nextSlide}/>
             </div>
        </div>
    )
}

export default ImageSlider
