import React, { useState } from 'react'
import TradingWidget from '../widgets/trading-widget'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Gold from '../widgets/gold'
import GoldPrice from '../widgets/GoldPrice';
import SilverPrice from '../widgets/SilverPrice';
import { Carousel, IconButton } from "@material-tailwind/react";
import firstSlide from '../assets/carousel1.jpg'
import secondSlide from '../assets/carousel2.jpg'
import thirdSlide from '../assets/carousel3.jpg'
import surfer from '../assets/surfer.png'
import negotiation from '../assets/negotiation.jpg'
import product1 from '../assets/bitcoinn.png'
import product2 from '../assets/muskTE.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/goldsi.png'
import product5 from '../assets/platinum.JPG'
import product6 from '../assets/real-estate-home-house.jpeg'
import trader from '../assets/trader.png'
import cert from '../assets/cert.jpg'
import goldbar from '../assets/goldclean.png'
import silverbar from '../assets/silverclean.png'
import platinumbar from '../assets/platinum.webp'
import PlatinumPrice from '../widgets/PlatinumPrice'
import key from '../assets/key.png'
import userFeedback from '../assets/userfeedback.jpg'
import userFeedback1 from '../assets/userfeedback1.jpg'
import { FiActivity, FiCreditCard, FiZap, FiShield, FiMessageCircle } from "react-icons/fi";
import { HiMiniStar } from "react-icons/hi2";
import { UserAuth } from '../context/context'
import { Outlet, NavLink, Link , useLocation} from "react-router-dom";

const Home = () => {
  const {user} = UserAuth();

  const cards = [
    { id: 1, src:userFeedback, title: 'Lisa Aniston', role:'INVESTOR', content: 'I am extremely satisfied with Algo Trade Limited. Their platform offers efficient trading, advanced tools, and top-notch security. Highly recommended.' },
    { id: 2, src:userFeedback1, title: 'Matt Strider', role:'INVESTOR', content: 'I have been impressed with the performance of Algo Trade Limited. Their algorithmic trading strategies have delivered consistent results, and their platform is user-friendly. I feel confident in my investment with them.' },
  ];
  const owloptions={
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    animateout:'slideoutup',
    nav:false,
    dots:true,
    margin:0,
    responsive:{
     1000:{
      items:1
     },
     724:{
      items:1
     },
     500:{
      items:1
     },
     370:{
      items:1
     },

    }

  }

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
     Our algorithms are backed by extensive research and data analysis, offering advanced trading strategies for Tesla Stock Exchange Market, digital assets, stocks, crypto, and forex. Stay ahead of the markets with Ascent Investments Limited.

     </h3>
     <Link to={user ? "/dashboard" : "/register"}>
     <button className='carouselButton nunito text-white px-4 py-4'>
     SIGN UP
     </button>
</Link>
     
     
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
     Your security is our top priority. Ascent Investments Limited implements robust security measures, including encryption technologies and multi-factor authentication, to protecint your personal information and investment funds.


     </h3>
     <Link to={user ? "/dashboard" : "/login"}>
     <button className='carouselButton nunito text-white px-4 py-4'>
     LEARN MORE
     </button>
</Link>
   
     
     
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
     Experience a seamless trading journey with our intuitive and easy-to-use platform. Access a wide range of trading instruments, advanced tools, and features to optimize your trading strategies. Join Ascent Investments Limited today.
    


     </h3>
     <Link to={user ? "/dashboard" : "/register"}>
     <button className='carouselButton nunito text-white px-4 py-4'>
     SIGN UP
     </button>
</Link>
     
     
     
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
with our Tesla Stock Exchange Market, Gold and Silver IRA, Real estate and Algo Trade Limited.
 Our research-driven trading strategies for Non digital and digital 
 assets, Gold and Silver IRA, Real Estate, Stocks, Crypto and Forex. Stay informed 
 and make informed investment decisions with Gold and Silver, Real Estate and Algo 
 Trade Limited.
</p>
<Link to={user ? "/dashboard" : "/register"}>
     
    <button className='carouselButton nunito text-white px-4 py-4 '>
     Create Free Account
     </button> 
</Link>

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
optimizing trading strategies for Tesla Stock Exchange Market, non-digital and digital assets, Gold and Silver IRA, 
Real Estate, Stocks, Crypto, and forex. 
Invest with confidence with Ascent Investments' AI-powered platform.

</p>
<Link to= "/about-us">
  <button className='carouselButton nunito text-white px-4 py-4 '>
     Explore
     </button>
</Link>

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
Ascent Investments Limited uses the highest levels of Internet Security, 
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

{/* fifth section */}

<div className='fifth-section w-full flex flex-col items-center justify-center ' style={{backgroundColor:"#fff", height:"100%"}}>
<div className="section-wrapper flex flex-col items-center justify-center">
<h1 className='nunito fifth-section-subject nunito'> Explore Our Services</h1>
<p className='mission-text nunito'>It’s our mission to provide you with a delightful and a successful trading experience!</p>
<div className='fifth-section-wrapper flex  items-center justify-center'>
  <div className="card-double">
<div className='fifth-section-div'>
  <div className='fifth-section-sc'>
<div className='icon-box'>
<FiActivity color='#1a81c5' size={20}/>
</div>
<div className="fifth-section-content">
<h2 className='fifth-section-header nunito' > Risk Management</h2>
<p className='fifth-section-text-content nunito'>
We are outstanding when it 
comes to managing risk in order to capitalize on opportunities 
and improve our performance.
</p>
</div>
  </div>

  <div className='fifth-section-sc'>
<div  className='icon-box'>
<FiZap   color='#1a81c5' size={20}/>
</div>
<div className="fifth-section-content">
<h2 className='fifth-section-header nunito' > Fast execution</h2>
<p className='fifth-section-text-content nunito'>
Super-fast trading software, so you never suffer slippage.
</p>
</div>
  </div>

  <div className='fifth-section-sc'>
<div className='icon-box'>
<FiMessageCircle  color='#1a81c5' size={20}/>
</div>
<div className="fifth-section-content">
<h2 className='fifth-section-header nunito' > 24/7 live chat Support</h2>
<p className='fifth-section-text-content nunito'>
We have a dedicated team of support staff who are 
always online and available to answer to your 
requests and attend to all your issues.
</p>
</div>
  </div>

</div>
<div className='fifth-section-div'>
  <div className='fifth-section-sc '>
<div className='icon-box'>
<FiCreditCard color='#1a81c5' size={20}/> 
</div>
<div className="fifth-section-content ">
<h2 className='fifth-section-header nunito' > High leverage</h2>
<p className='fifth-section-text-content nunito'>
Chance to magnify your investment and really win 
big with super-low spreads to further up your profits
</p>
</div>
  </div>

  <div className='fifth-section-sc '>
<div className='icon-box'>
<FiShield color='#1a81c5' size={20}/>
</div>
<div className="fifth-section-content">
<h2 className='fifth-section-header nunito' > Ultimate Security</h2>
<p className='fifth-section-text-content nunito'>
Strict measures has been put in place to ensure that clients' 
funds, assets and information are completely safe and fully secured.
</p>
</div>
  </div>

  

</div>
</div>
<div className='fifth-section-image '>
<img className='w-full'
        src={trader} alt="trader"
        
      />

</div>
</div>
</div>
</div>
{/* sixth section?\ */}

<div className='sixth-section w-full flex flex-col items-center justify-center ' style={{backgroundColor:"#fff", height:"100%"}}>
<div className="section-wrapper flex flex-col items-center justify-center">
<h1 className='nunito sixth-section-subject'> Investment Products</h1>

<div className='sixth-section-wrapper flex  flex-wrap items-center justify-center'>



<div className='sixth-section-div'>

<div className='sixth-section-image'>
<img
      src={product2} alt="key"
    />
</div>
<h2 className='sixth-section-header nunito' > Tesla Stock Exchange Market</h2>
<p className='sixth-section-text-content nunito'>
(Elon Musk CEO of Tesla) he is the richest man in the world. American multinational 
automative and clean energy company, which designs, manufactures and sells electric 
vehicles, stationery battery energy storage devices from home to grid-scale 
solar shingles, and related products and services. 
</p>

</div>



<div className='sixth-section-div'>

<div className='sixth-section-image'>
<img
      src={product4} alt="key"
    />
</div>
<h2 className='sixth-section-header nunito' > Gold and Silver IRA</h2>
<p className='sixth-section-text-content nunito'>
Commonly seen as a great store of wealth, this precious metal is also known as a reliable safe-haven asset. 
Gold and silver remain a highly popular investment. Investing in gold and silver bullion gives you unique 
control over your money that you would not be entitled to. With so much financial instability in the markets, 
investing in gold gives you a secure commodity you can physically possess that will always hold its value.
</p>

</div>




<div className='sixth-section-div'>

<div className='sixth-section-image'>
<img
      src={product1} alt="key"
    />
</div>
<h2 className='sixth-section-header nunito' > Cryptocurrencies</h2>
<p className='sixth-section-text-content nunito'>
Cryptocurrencies are the fastest growing assets in the financial space today, 
and we have devised strategies to successfully trade them.
</p>

</div>

<div className='sixth-section-div'>

<div className='sixth-section-image'>
<img
      src={product6} alt="key"
   
    />
</div>
<h2 className='sixth-section-header nunito' > Real Estate</h2>
<p className='sixth-section-text-content nunito'>
Real estate investment involves the purchase, ownership, management, 
rental and/or sale of real estate for profit.
</p>

</div>



<div className='sixth-section-div'>

<div className='sixth-section-image'>
<img
      src={product3} alt="key"
    />
</div>
<h2 className='sixth-section-header nunito' > Industry ETFs</h2>
<p className='sixth-section-text-content nunito'>

Through Industry ETFs, investors 
access the stocks and securities of specific industry sectors, 
such as energy, biotechnology, or chemicals.
</p>

</div>



<div className='sixth-section-div'>

<div className='sixth-section-image'>
<img
      src={product5} alt="key"
    />
</div>
<h2 className='sixth-section-header nunito' > Platinum</h2>
<p className='sixth-section-text-content nunito'>
As a precious metal with various industrial applications, platinum's value is 
influenced by factors such as supply and demand dynamics, geopolitical events, 
and economic indicators. Investors can gain exposure to platinum through various 
investment vehicles, including physical bullion, exchange-traded funds (ETFs), futures contracts, and mining stocks. 
</p>

</div>




</div>
</div>
</div>

{/* seventh section */}

<div className='seventh-section w-full  items-center justify-center ' style={{backgroundColor:"#ece9ff", height:"100%"}}>
<div className='seventh-wrapper flex items-center justify-center'>

<div className='seventh-section-image '>
<img className='w-full h-full'
        src={cert} alt="cert"
        
      />

</div>
<div className='seventh-section-text
 '>
<h1 className="seventh-section-header nunito">
Our White Paper
</h1>
<p className="seventh-text nunito">
Ascent Investments Limited is fully Licensed and registered
</p>
<p className="seventh-link nunito">
Find Out More 
</p>
</div>
</div>
</div>

{/* eight section */}




<div className='eight-section  ' style={{backgroundColor:"#fff", height:"100%"}}>
<div className="eight-section-wrapper ">
<h1 className='nunito eight-subject'> Our Investment Packages</h1>
<p className='eight-tagline'>Choose how you want to invest with us</p>
<div className='eight-outer-div '>


<div className='eight-section-div'>
<div className="eight-header-wrapper">
<h2 className="eight-card-header nunito">
  BASIC BEGINER
</h2>
</div>

<h1 className="eight-price nunito"> $ 500 </h1>
<p className="eight-month nunito"> 1 month</p>

<hr className='divider'></hr>
<p className="eight-content nunito"> Min. Possible deposit: $500</p>
<p className="eight-content nunito"> Max. Possible deposit: $5000</p>
<p className="eight-content nunito"> 2% Minimum return</p>
<p className="eight-content nunito"> 3% Maximum return</p>

<div className='cardbut'>
<button className=" px-4 py-2.5  text-white nunito  signbut mt-4  "  >
    Buy Now
</button>
</div>
</div>

<div className='eight-section-div'>
<div className="eight-header-wrapper">
<h2 className="eight-card-header nunito">
  PRO
</h2>
</div>

<h1 className="eight-price nunito"> $ 5000 </h1>
<p className="eight-month nunito"> 1 month</p>

<hr className='divider'></hr>
<p className="eight-content nunito"> Min. Possible deposit: $5000
</p>
<p className="eight-content nunito">Max. Possible deposit: $12000</p>
<p className="eight-content nunito"> 3% Minimum return</p>
<p className="eight-content nunito"> 10% Maximum return</p>

<div className='cardbut'>
<button className=" px-4 py-2.5  text-white nunito  signbut mt-4  "  >
    Buy Now
</button>
</div>
</div>
<div className='eight-section-div'>
<div className="eight-header-wrapper">
<h2 className="eight-card-header nunito">
 PREMIUM
</h2>
</div>

<h1 className="eight-price nunito"> $ 10000 </h1>
<p className="eight-month nunito"> 2 weeks</p>

<hr className='divider'></hr>
<p className="eight-content nunito"> Min. Possible deposit: $10000
</p>
<p className="eight-content nunito"> Max. Possible deposit: $50000</p>
<p className="eight-content nunito"> 30% Minimum return</p>
<p className="eight-content nunito"> 50% Maximum return</p>

<div className='cardbut'>
<button className=" px-4 py-2.5  text-white nunito  signbut mt-4  "  >
    Buy Now
</button>
</div>
</div>



</div>
</div>
</div>

<div className='eight-section  ' style={{backgroundColor:"#ECE9FF", height:"100%", width:"100%"}}>
<div className="eight-section-wrapper ">
<h1 className='nunito eight-subject'> Metals Market</h1>
<p className='eight-tagline'>Trade and invest Top Precious metals</p>
<div className='eight-outer-div '>


<div className='ninth-section-div'>

<div className='jj 'style={{paddingBottom:56, paddingTop:10}}  >
<img className='w-full'
        src={goldbar} alt="goldbar"
        
      />

</div>
<GoldPrice />
</div>

<div className='ninth-section-div'>

<div className='jj ' >
<img className='w-full'
        src={silverbar} alt="silverbar"
        
      />

</div>
<SilverPrice/>
</div>
<div className='ninth-section-div '>

<div className='jj ' >
<img className='w-full'
        src={platinumbar} alt="platinumbar"
        
      />

</div>
<PlatinumPrice/>
</div>




</div>
</div>
</div>

<div className='tenth-section'>
<div className='tenth-section-wrapper'>
<h1 className='nunito fifth-section-subject nunito'> What our Customers say!</h1>
<p className='mission-text nunito'>Don't take our word for it, here's what some of our clients have to say about us</p>
<div className='testimonial-card'>
<OwlCarousel className='owl-theme' loop  {...owloptions}>
{cards.map((card) => (
        <div key={card.id} className="card">
          <img
        src={card.src} alt="feedback slide"
        className=" object-cover rounded-full items-center"
        style={{height:180, width:180}}
      />
          <h1 className='title nunito'>{card.title}</h1>
          <h3  className='role nunito'>{card.role}</h3>
          <ul className='ratings'>
            <li>
            <HiMiniStar color="#f17425" size={20}/>
            </li>
            <li>
            <HiMiniStar color="#f17425" size={20}/>
            </li>
            <li>
            <HiMiniStar color="#f17425" size={20}/>
            </li>
            <li>
            <HiMiniStar color="#f17425" size={20}/>
            </li>
            <li>
            <HiMiniStar color="#f17425" size={20}/>
            </li>
          </ul>
          <p  className='content nunito'>{card.content}</p>
        </div>
      ))}    
</OwlCarousel>
</div>

</div>
</div>

<div className='eleven-section w-full' style={{backgroundColor:"#ece9ff", paddingBlock:"100px"}}>
<div className='eleven-section-wrapper'>
  <div className='eleven-section-text' >
  <h1 className='eleven-header nunito'>Research and Insight</h1>
<p className='eleven-content nunito'>Gain valuable insights and stay ahead of the market with Algo Trade Limited.
 Our research-driven approach and advanced algorithms provide data-driven trading 
 strategies for Tesla Stock Exchange Market, digital assets, 
stocks, crypto, and forex. Stay informed and make informed investment decisions with Algo Trade Limited.</p>
  </div>
  <div className='eleven-section-button'>
  <Link to={user ? "/dashboard" : "/register"}>
 <button className=" px-4 py-2.5 accountButton nunito  signbut mt-4  "  >
    Create Free Account
</button>
</Link>
  
  </div>
</div>
</div>







</div>
    
  )
}

export default Home