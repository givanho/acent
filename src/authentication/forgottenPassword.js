import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { PiPasswordBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { UserAuth } from '../context/context'
import Lottie from "lottie-react";
import loadingSquare from "../assets/loadingSquare.json"
import '../context/context.css'

const ForgottenPassword = () => {
    const {forgotPassword} = UserAuth()
    const [errors, setErrors] = useState(null)
    const [pending, setIsPending] = useState(null)

    const [events, setEvents] = useState(null);
    const formik = useFormik({
        initialValues : {
        email: "",
       
      },
      
       onSubmit: async values => {
        
        try {
        setIsPending(true)
          await forgotPassword(values.email)
          setEvents("Recovery Password sent to your Email")
          setErrors(null)
      
       
    
        } catch (e) {

            setErrors(e.message) 
            setEvents(null)
        setIsPending(false)

        }
      
      },
      validationSchema :Yup.object({
        email: Yup.string()
          .required("Email is required")
          .email("email must contain @"),
      })
    }) 
    
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
              <h1 className='nunito form-head'>Password Reset</h1>
              <form onSubmit={formik.handleSubmit}> 
              <div ><p className='nunito input-header'>Enter your email to reset password <span style={{color:'red'}}>*</span></p>
              <span className='errors nunito'>{formik.errors.email && formik.touched.email && formik.errors.email}</span>
              {/* <p>HELlllo </p> */}
              <div className="input-with-icon">
                <input type="text" placeholder="mail@example.com" 
                name='email' 
                value={formik.values.email} 
                onChange={formik.handleChange}/>
                <IoMailOutline color="#1a81c5" className="input-icon" />
              </div>
    </div>

   {events? <p>{events}</p> : 
    <button type='submit' className='nunito signinbut'> Reset </button>
  }
    </form>
    {pending ? <div class="overlay">
  <div class="centered-content">
  <Lottie animationData={loadingSquare} loop={true} />

  </div>
</div> : ""}
<p className='copyright nunito'>© Copyright 2024   Ascent Investment Ltd.   All Rights Reserved.</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default ForgottenPassword