import React from 'react'

const Pricing = () => {
  return (
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
    <p className="eight-content nunito"> Min. Possible deposit: $3000
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
  )
}

export default Pricing