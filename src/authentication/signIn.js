import React from 'react'
import './signin.css'
import logo from '../assets/logo.png'
import { PiPasswordBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
const SignIn = () => {
  return (
    <>
    <div className='signin  '>
        <div className='signlogo'>
        <img
                    className="h-62 w-226 imagelogo"
                    src={logo}
                    alt="ascentinvestments"
                  />
            <div className='signform w-full'>
              <h1 className='nunito form-head'>User Login</h1>
              <div ><p className='nunito input-header'>username <span style={{color:'red'}}>*</span></p>
    <div className="input-with-icon">
      <input  type="text" placeholder="Username" />
      <IoMailOutline color='#1a81c5' className="input-icon" />
    </div>
    </div>

    <div className='flex justify-between pado'><p className='nunito input-header'> password <span style={{color:'red'}}>*</span></p>
    <p className='nunito input-header forgot'>forgot password?</p></div>
    <div className="input-with-icon">
      <input type="password" placeholder="Password" />
      <PiPasswordBold color='#1a81c5' className="input-icon" />
    </div>
    <button className='nunito signinbut'> Sign in</button>
<p className='dont nunito'>Don't have an account ?   <span style={{fontWeight:700, fontSize:"15px"}}> Sign Up </span></p>
<p className='copyright nunito'>© Copyright 2024   Ascent Investment Ltd.   All Rights Reserved.</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default SignIn