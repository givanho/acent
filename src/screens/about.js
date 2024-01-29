import React from 'react'
import './about.css'
import { LuUserPlus } from "react-icons/lu";
import { BsBank } from "react-icons/bs";
import { GoZap } from "react-icons/go";

import about from '../assets/aboutus.png'
const About = () => {
  return (
    <>
    <div className='about-all'>
    <div className="about-us w-full">
    <h1 className='nunito about-header'>
    About Us
     </h1>
    </div>
    
        </div>
        <div className='who-contain'>
          <div className='who-flex'>

          <div className='about-image '>
<img className='w-full'
        src={about} alt="surfing"
      />
</div>

<div className='about-text'>
  <h1 className='nunito about-heade'> Who we are</h1>
  <p  className='nunito about-par'>
  Ascent Investments Limited is a leading investment and trading platform 
  specializing in non digital and digital assets, Gold and silver IRA, 
  Real estate, stocks, crypto, and forex. With a research-driven approach and 
  advanced algorithms, Ascent Investment aims to deliver consistent results for 
  traders and investors. The user-friendly platform offers advanced tools and 
  features, while robust security measures protect personal information and 
  investment funds. Backed by their expertise in IRA and 
  algorithmic trading, Ascent Investments Limited provides 
  exceptional customer service and strives to be the trusted choice for optimizing 
  Investments and trading strategies in today's financial markets. Invest with confidence. 
  Choose Ascent Investments Limited.
  </p>

<button  className='nunito aboutbut'>
  Invest Now
</button>
</div>

          </div>
        </div>

        <div className='get-started'>

          <div className='get-started-wrapper'>
<p className='started-text nunito'>Get Started</p>
<h1 className='started-header nunito'>How to get started ?</h1>
<div className='contact-details w-full'>
  <div className='contact-details-wrapper'>
<div className='single-contact'>
<div className='contact-icon'>
<LuUserPlus color='#1a81cf' size={28}/>
</div>
<div className='contact-text'>
  <h1 className='nunito contact-subject' > Create an Account</h1>
  <p className='nunito about-details-text'> Create an account with us using your preferred email/username</p>

</div>
</div>
<div className='single-contact'>
<div className='contact-icon'>
<BsBank color='#1a81cf' size={28}/>
</div>
<div className='contact-text'>
  <h1 className='nunito contact-subject'> Make a Deposit</h1>
  <p className='nunito about-details-text'> Make A deposit with any of your preferred currency </p>

</div>
</div>
<div className='single-contact'>
<div className='contact-icon'>
<GoZap color='#1a81cf' size={28}/>
</div>
<div className='contact-text'>
  <h1 className='nunito contact-subject'> Start Trading/Investing</h1>
  <p className='nunito about-details-text'> Start trading with Indices commodities e.tc </p>

</div>
</div>

  </div>
</div>
          </div>
        </div>
        <div className='eleven-section w-full' style={{backgroundColor:"#ece9ff", paddingBlock:"100px"}}>
<div className='eleven-section-wrapper'>
  <div className='eleven-section-text' >
  <h1 className='eleven-header nunito'>Research and Insight</h1>
<p className='eleven-content nunito'>Gain valuable insights and stay ahead of the market with Algo Trade Limited.
 Our research-driven approach and advanced algorithms provide data-driven trading 
 strategies for digital assets, 
stocks, crypto, and forex. Stay informed and make informed investment decisions with Algo Trade Limited.</p>
  </div>
  <div className='eleven-section-button'>
  <button className=" px-4 py-2.5 accountButton nunito  signbut mt-4  "  >
    Create Free Account
</button>
  </div>
</div>
</div>
        </>
  )
}

export default About