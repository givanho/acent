import React, { useState } from 'react'
import TradingWidget from '../widgets/trading-widget'
import Gold from '../widgets/gold'
import { Carousel, IconButton } from "@material-tailwind/react";
import firstSlide from '../assets/carousel1.jpg'
import secondSlide from '../assets/carousel2.jpg'
import thirdSlide from '../assets/carousel3.jpg'
import surfer from '../assets/surfer.png'
import negotiation from '../assets/negotiation.jpg'
import key from '../assets/key.png'


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
<Gold />

{/* third section */}
<div className='third-section w-full flex  items-center justify-center ' style={{backgroundColor:"#fff", height:"100%"}}>
<div className='third-section-wrapper flex   items-center justify-center'>
<div className='third-section-text
 '>
<p className='third-section-text-crumb nunito'>
ASCENT INVESTMENTS: Integrating AI for the best Investment and Trading 
Experience
</p>

<p className='third-section-text-content nunito'>
Ascent Investments Limited leverages cutting-edge AI technology to provide a 
seamless investment and trading experience. Advanced algorithms analyze data in real-time, 
optimizing trading strategies for non-digital and digital assets, Gold and Silver IRA, 
Real Estate, Stocks, Crypto, and forex. 
Invest with confidence with Ascent Investments' AI-powered platform.

</p>
<button className='carouselButton nunito text-white px-4 py-4 '>
     Explore
     </button>
</div>
<div className='third-section-image '>
<img className='w-full'
        src={negotiation} alt="negotiation"
        
      />

</div>
</div>
</div>

{/* fourth section */}

<div className='fourth-section w-full flex flex-col items-center justify-center ' style={{backgroundColor:"#fff", height:"100%"}}>
<div className="section-wrapper flex flex-col items-center justify-center">
<h1 className='nunito fourth-section-subject'> Security Comes first</h1>

<div className='fourth-section-wrapper flex  flex-wrap items-center justify-center'>
<div className='fourth-section-div'>

<div className='fourth-section-image' >
  <div style={{margin:"17px"}}>
<svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 24 24"><path d="M15.762 8.047l-4.381 4.475-2.215-2.123-1.236 1.239 3.451 3.362 5.619-5.715-1.238-1.238zm-3.762-5.503c2.5 1.805 4.555 2.292 7 2.416v9.575c0 3.042-1.686 3.827-7 7.107-5.309-3.278-7-4.065-7-7.107v-9.575c2.447-.124 4.5-.611 7-2.416zm0-2.544c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3z " fill="#1a81c5"/></svg>
</div>
</div>
<h2 className='fourth-section-header nunito' > Security</h2>
<p className='fourth-section-text-content nunito'>
Ascent Investment Limited uses the highest levels of Internet Security, 
and it is secured by 
256 bits SSL security encryption to ensure that your 
information is completely protected from fraud.
</p>

</div>

<div className='fourth-section-div'>

<div className='fourth-section-image'>
<img
      src={key} alt="key"
      style={{height:65, width:65, margin:"17px"}}
    />
</div>
<h2 className='fourth-section-header nunito' > Two Factor Authentication</h2>
<p className='fourth-section-text-content nunito'>
Two-factor authentication (2FA) by default on all Algo Trades Limited accounts, 
to securely protect you from unauthorised access and impersonation.
</p>

</div>

</div>
</div>
</div>




</div>
    
  )
}

export default Home