import React from 'react'
import Services from '../components/Services';
import HeroSection from '../components/HeroSection';
import Offer from '../components/Offer';
import Built from '../components/built';
import Review from '../components/Review';


function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Offer />
      <Built />
      <Review />
      
    </div>
  );
}

export default Home