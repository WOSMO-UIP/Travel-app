import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Plan from './components/Plan';
import Rooms from './components/Rooms';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

import plan1 from './components/images/plan1.jpg';
import plan2 from './components/images/plan2.jpg';
import plan4 from './components/images/plan4.jpg';
import plan5 from './components/images/plan5.jpg';





function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Plan
        heading='Plan Your Next Trip'
        p1='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, ipsum.'
        p2='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, architecto similique! Aut amet earum, hic asperiores suscipit perferendis nobis iste.'
        plan1={plan1}
        plan2={plan2}
        plan4={plan4}
        plan5={plan5}
      />
      <Rooms />
      <ImageSlider />
      <Footer />
    </>
  );
}

export default App;

