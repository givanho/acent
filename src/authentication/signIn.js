import React, { useEffect } from 'react'
import './signin.css'
import logo from '../assets/logo.png'
import { PiPasswordBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { useFormik } from 'formik';
import * as Yup from "yup";


import { UserAuth } from '../context/context'
import { Navigate, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { signIn} = UserAuth();
  const history = useNavigate()
const {user} = UserAuth();

useEffect(() => {
  if (user){
  }
  else{
    console.log('user')

  }
 

 
}, [user])


  const formik = useFormik({
    initialValues : {
    email: "",
    password: "",
   
  },
  
   onSubmit: async values => {
    
    try {
    
  
      // Assuming signIn is a function that returns a user object upon successful authentication
     await signIn(values.email, values.password);
  
  
     if (values.email === "fynefaceg@gmail.com"){
      history('/admin')

     }
     else{
      // Navigate to the "Profile" screen
      history('/dashboard')
     }
  
      

    } catch (e) {
     console.log(e.message);
    }
  
  },
  validationSchema :Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("email must contain @"),
    password: Yup.string().required("Password is required").min(5, 'password must be at least 5 characters'),
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
              <h1 className='nunito form-head'>User Login</h1>
              <form onSubmit={formik.handleSubmit}> 
              <div ><p className='nunito input-header'>email <span style={{color:'red'}}>*</span></p>
              <span className='errors nunito'>{formik.errors.email && formik.touched.email && formik.errors.email}</span>
              <div className="input-with-icon">
                <input type="text" placeholder="mail@example.com" 
                name='email' 
                value={formik.values.email} 
                onChange={formik.handleChange}/>
                <IoMailOutline color="#1a81c5" className="input-icon" />
              </div>
    </div>

    <div className='flex justify-between pado'><p className='nunito input-header'> password <span style={{color:'red'}}>*</span></p>
    <p className='nunito input-header forgot'>forgot password?</p></div>
    <p className='errors nunito'>{formik.errors.password && formik.touched.password && formik.errors.password}</p>
    <div className="input-with-icon">
      <input type="password" placeholder="Password"
       name='password' 
       value={formik.values.password} 
       onChange = {formik.handleChange}  />
      <PiPasswordBold color='#1a81c5' className="input-icon" />
    </div>
    <button type='submit' className='nunito signinbut'> Sign in</button>
    </form>
<p className='dont nunito'>Don't have an account ?   <span style={{fontWeight:700, fontSize:"15px"}}> Sign Up </span></p>
<p className='copyright nunito'>© Copyright 2024   Ascent Investment Ltd.   All Rights Reserved.</p>
    </div>
    </div>
    </div>
    </>
  )
}

export default SignIn