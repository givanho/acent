import React, { useState } from 'react'
import TradingWidget from '../widgets/trading-widget'
import Gold from '../widgets/gold'
import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
import firstSlide from '../assets/carousel1.jpg'
import secondSlide from '../assets/carousel2.jpg'
import thirdSlide from '../assets/carousel3.jpg'
import surfer from '../assets/surfer.png'


const Home = () => {
    

  return (
    <div>
 
 
     <div style={{height:"100vh"}}> 
     <Carousel className="rounded-none h-full" autoplay="true" autoplayDelay="5000" loop="true" transition={{ duration: 1 }}
      prevArrow={({ handlePrev }) => (
        <IconButton
        variant="text"
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
          variant="text"
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
            stroke="#94A3B8"
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
    <div className="absolute inset-0  h-full   carouselContent  ">
     <h1 className='dmSerif  carouselHeader'>
     Advanced Trading Strategies
     </h1>
     <h3 className='nunito carouselBody'>
     Our algorithms are backed by extensive research and data analysis, offering advanced trading strategies for digital assets, stocks, crypto, and forex. Stay ahead of the markets with Ascent Investment Limited.

     </h3>
     <button className='carouselButton nunito text-white px-4 py-4'>
     SIGN UP
     </button>
     
      {/* <div className="text-width text-center lg:text-left ">
        <Typography
          variant="h1"
          color="white"
          className="mb-14 text-2xl md:text-4xl lg:text-6xl flex text-center lg:text-left md:text-left carouselHeader dmSerif"
        >
          Advanced Trading Strategies
        </Typography>
        <Typography
          // variant="lead"
          color="white"
          className="mb-12 opacity-100 carouselBody nunito flex justify-start text-center lg-text-left"
        >
         Our algorithms are backed by extensive research and data analysis, offering advanced trading strategies for digital assets, stocks, crypto, and forex. Stay ahead of the markets with Ascent Investment Limited.
        </Typography>
        <div className="flex justify-start gap-2">
          <Button size="lg" color="white">
            SIGN UP
          </Button>
          
        </div>
      </div> */}
    </div>
  </div>
  <div className="relative h-full w-full">
  <div className="h-full w-full overlay" >
       <img
        src={secondSlide} alt="slide2"
        className="h-full w-full object-cover"
      />
      </div>
      
         <div className="absolute inset-0  h-full   carouselContent  ">
     <h1 className='dmSerif  carouselHeader'>
      Secure and Reliable
     </h1>
     <h3 className='nunito carouselBody'>
     Your security is our top priority. Ascent Investment Limited implements robust security measures, including encryption technologies and multi-factor authentication, to protecint your personal information and investment funds.


     </h3>
     <button className='carouselButton nunito text-white px-4 py-4'>
     LEARN MORE
     </button>
     
     
    </div>
       </div>
       <div className="relative h-full w-full">
       <div className="h-full w-full overlay" >
       <img
        src={thirdSlide} alt="slide3"
        className="h-full w-full object-cover"
      />
      </div>
         
         <div className="absolute inset-0  h-full   carouselContent  ">
     <h1 className='dmSerif  carouselHeader'>
     User-Friendly Platform
     </h1>
     <h3 className='nunito carouselBody'>
     Experience a seamless trading journey with our intuitive and easy-to-use platform. Access a wide range of trading instruments, advanced tools, and features to optimize your trading strategies. Join Ascent Investment Limited today.
    


     </h3>
     <button className='carouselButton nunito text-white px-4 py-4'>
     SIGN UP
     </button>
     
     
    </div>
       </div>
 
</Carousel>
   </div>

    
<div>
    <TradingWidget/>
    <Gold />
</div>
<div className='second-section w-full flex  items-center justify-center ' style={{backgroundColor:"#ece9ff", height:"100%"}}>
<div className='section-wrapper flex   items-center justify-center'>
<div className='second-section-text
 '>
<p className='section-text-crumb nunito'>
  Trade, Invest Stock and Bond
</p>
<h1 className='section-text-header nunito'>
  Reasearch and Insight
</h1>
<p className='section-text-content nunito'>
Gain valuable insights and stay ahead of the market 
with our Gold and Silver IRA, Real estate and Algo Trade Limited.
 Our research-driven trading strategies for Non digital and digital 
 assets, Gold and Silver IRA, Real Estate, Stocks, Crypto and Forex. Stay informed 
 and make informed investment decisions with Gold and Silver, Real Estate and Algo 
 Trade Limited.
</p>
<button className='carouselButton nunito text-white px-4 py-4 '>
     Create Free Account
     </button>
</div>
<div className='second-section-image '>
<img className='w-full'
        src={surfer} alt="surfing"
        
      />

</div>
</div>
</div>
</div>
    
  )
}

export default Home