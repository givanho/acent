import React, { useState } from 'react'
import TradingWidget from '../widgets/trading-widget'
import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
import firstSlide from '../assets/carousel1.jpg'
import secondSlide from '../assets/carousel2.jpg'
import thirdSlide from '../assets/carousel3.jpg'

 import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Home = () => {
    

  return (
    <div  >
 
 
     <div style={{height:"100vh"}}> 
     <Carousel className="rounded-none h-full" autoplay="true" autoplayDelay="5000" loop="true" transition={{ duration: 1 }}
      prevArrow={({ handlePrev }) => (
        <IconButton
        variant="filled"
        color="gray"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#94A3B8"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="filled"
          color="gray"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
      >
  <div className="relative h-full w-full">
    <div className="h-full w-full overlay" >
    <img
      src={firstSlide} alt="office"
      className="h-full w-full object-fill"
    />
    </div>
    <div className="absolute inset-0 grid h-full w-full place-items-center">
      <div className="w-3/4 text-center md:w-2/4 ">
        <Typography
          variant="h1"
          color="white"
          className="mb-4 text-3xl md:text-4xl lg:text-5xl font-nunito"
        >
          Advanced Trading Strategies
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-12 opacity-80 font-comforter"
        >
         Our algorithms are backed by extensive research and data analysis, offering advanced trading strategies for digital assets, stocks, crypto, and forex. Stay ahead of the markets with Ascent Investment Limited.
        </Typography>
        <div className="flex justify-center gap-2">
          <Button size="lg" color="white">
            Sign Up
          </Button>
          <Button size="lg" color="white" variant="text">
            Gallery
          </Button>
        </div>
      </div>
    </div>
  </div>
  <div className="relative h-full w-full">
  <div className="h-full w-full overlay" >
       <img
        src={secondSlide} alt="slide2"
        className="h-full w-full object-cover"
      />
      </div>
         <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
           <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
             <Typography
               variant="h1"
               color="white"
               className="mb-4 text-3xl md:text-4xl lg:text-5xl font-comforter"
             >
               The Beauty of Nature
             </Typography>
             <Typography
               variant="lead"
               color="white"
               className="mb-12 opacity-80 font-comforter"
             >
               It is not so much for its beauty that the forest makes a claim
               upon men&apos;s hearts, as for that subtle something, that quality
               of air that emanation from old trees, that so wonderfully changes
               and renews a weary spirit.
             </Typography>
             <div className="flex gap-2">
               <Button size="lg" color="white">
                 Explore
               </Button>
               <Button size="lg" color="white" variant="text">
                 Gallery
               </Button>
             </div>
           </div>
         </div>
       </div>
       <div className="relative h-full w-full">
       <div className="h-full w-full overlay" >
       <img
        src={thirdSlide} alt="slide3"
        className="h-full w-full object-cover"
      />
      </div>
         <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
           <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
             <Typography
               variant="h1"
               color="white"
               className="mb-4 text-3xl md:text-4xl lg:text-5xl"
             >
               The Beauty of Nature
             </Typography>
             <Typography
               variant="lead"
               color="white"
               className="mb-12 opacity-80 font-black"
             >
               It is not so much for its beauty that the forest makes a claim
               upon men&apos;s hearts, as for that subtle something, that quality
               of air that emanation from old trees, that so wonderfully changes
               and renews a weary spirit.
             </Typography>
             <div className="flex gap-2">
               <Button size="lg" color="white">
                 Explore
               </Button>
               <Button size="lg" color="white" variant="text">
                 Gallery
               </Button>
             </div>
           </div>
         </div>
       </div>
 
</Carousel>
   </div>

    
<div>
    <TradingWidget/>
</div>
</div>
    
  )
}

export default Home