import React, { useState, useMemo } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { setDoc, serverTimestamp, doc } from "firebase/firestore";
import { db } from '../context/firebase';
import { UserAuth } from '../context/context';





import Select from 'react-select'
import countryList from 'react-select-country-list'
import { useFormik } from 'formik';
import * as Yup from "yup";
import "./signin.css";
import logo from "../assets/logo.png";
import { PiPasswordBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";



const SignUp = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API_URL;
 

    const[loading, setLoading] = useState(false)
    const [show, setShow] = useState(false);
  const { createUser , user} = UserAuth();
    const history = useNavigate()

    const formik = useFormik({
      initialValues : {
      email: "",
      firstname: "",
      lastname: "",
      password: "",
      country: "",
      repassword: "",
      checked:""
    },
    // onSubmit: values => {
    //   console.log("onSubmit", values.email);
    //   // console.log(value.label)
      
    // },
     onSubmit: async values => {
      
  console.log(process.env.REACT_APP_FIRE_AUTH);
  console.log("hello");
  

      try {
        // Create user in Firebase Authentication
      const user = await createUser(values.email, values.password);
      if (user) {
        await setDoc(doc(db, 'users', user.user.uid ), {
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          createdAt: serverTimestamp(),
          country : values.country,
          userID: user.user.uid
        },{ merge: true })
        history('/')
      }
      }
       catch (error) {
        console.error('Error creating user:', error.message);
      }
    
    },
    validationSchema :Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("email must contain @"),
      password: Yup.string().required("Password is required").min(5, 'password must be at least 5 characters'),
      repassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
      .required('please confirm password'),
      firstname: Yup.string().required("First Name is required").min(2, 'enter a valid name'),
      lastname: Yup.string().required("Last name is required").min(2, 'enter a valid name'),
      country: Yup.string().required("Country is required"),
      checked:Yup.boolean().oneOf([true], '***')
      .required('***'),
    })
  }) 
    

   



  const options = useMemo(() => countryList().getData(), [])
  

const changeHandler = selectedOption => {
    formik.setFieldValue('country', selectedOption.label);
  };



















  return (
    <>
      <div className="signin  ">
        <div className="signlogo">
          <img
            className="h-62 w-226 imagelogo"
            src={logo}
            alt="ascentinvestments"
          />
          <div className="signform w-full">
    

            <h1 className="nunito form-head">Create an Account</h1>
            <form onSubmit={formik.handleSubmit}> 
            <div className=" pado">
              <p className="nunito input-header">
                First Name <span style={{ color: "red" }}>*</span>
              </p> <span className='errors nunito'>{formik.errors.firstname && formik.touched.firstname && formik.errors.firstname}</span>
              <div className="input-with-icon">
                <input type="text" placeholder="Enter your first name" 
                name='firstname' 
                value={formik.values.firstname} 
                onChange={formik.handleChange}
                />
                <FiUserCheck color="#1a81c5" className="input-icon" />
              </div>
            </div>


            <div className=" pado">
              <p className="nunito input-header">
                Last Name <span style={{ color: "red" }}>*</span>
              </p> <span className='errors nunito'>{formik.errors.lastname && formik.touched.lastname && formik.errors.lastname}</span>
              <div className="input-with-icon">
                <input type="text" placeholder="Enter your last name" 
                name='lastname' 
                value={formik.values.lastname} 
                onChange={formik.handleChange} />
                <FiUserCheck color="#1a81c5" className="input-icon" />
              </div>
            </div>


            <div className=" pado">
              <p className="nunito input-header">
                Your Email <span style={{ color: "red" }}>*</span>
              </p> <span className='errors nunito'>{formik.errors.email && formik.touched.email && formik.errors.email}</span>
              <div className="input-with-icon">
                <input type="text" placeholder="mail@example.com" 
                name='email' 
                value={formik.values.email} 
                onChange={formik.handleChange}/>
                <IoMailOutline color="#1a81c5" className="input-icon" />
              </div>
            </div>

            <div className=" pado">
              <p className="nunito input-header">
                {" "}
                Country <span style={{ color: "red" }}>*</span>
              </p> <span className='errors nunito'>{formik.errors.country && formik.touched.country && formik.errors.country}</span>
            </div>
            <Select options={options} 
      
            placeholder="Choose Country" isSearchable={true} 
             value={options.find(option => option.value === formik.values.country)}
             onChange={changeHandler}
     styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
         
          borderColor: state.isFocused ? '#1a81c5' : '#dee2e6',
          borderWidth: state.isFocused ? "1px" : "1px",
          fontSize:'15px',
          fontFamily: 'nunito',
        }),
        menuList: (provided, state) => ({
            ...provided,
            padding: state.selectProps.padding,
            fontSize: "15px",
            fontFamily: "nunito",
  
          }),
         } }
       />





            <div className=" pado">
              <p className="nunito input-header">
                {" "}
                password <span style={{ color: "red" }}>*</span>
              </p> <span className='errors nunito'>{formik.errors.password && formik.touched.password && formik.errors.password}</span>
            </div>
            <div className="input-with-icon">
              <input type="password" placeholder="Enter password" 
               name='password' 
               value={formik.values.password} 
               onChange = {formik.handleChange} />
              <PiPasswordBold color="#1a81c5" className="input-icon" />
            </div>


            <div className="pado">
              <p className="nunito input-header">
                {" "}
                Confirm Password <span style={{ color: "red" }}>*</span>
              </p> <span className='errors nunito'>{formik.errors.repassword && formik.touched.repassword && formik.errors.repassword}</span>
            </div>
            <div className="input-with-icon">
              <input type="password" placeholder="Re-enter your password" 
               name='repassword' 
               value={formik.values.repassword} 
               onChange = {formik.handleChange} />
              <PiPasswordBold color="#1a81c5" className="input-icon" />
            </div>
            <div className='flex justify-evenly align-middle nunito pt-5' >
           <input  type = "checkbox" 
           name='checked' 
           value={formik.values.checked} 
           onChange = {formik.handleChange} />
           <span className='errors text-lg nunito'>{formik.errors.checked && formik.touched.checked && formik.errors.checked}</span>

           <p className='accept'>I Accept the Terms And Privacy Policy</p>
            </div>
            <button type='submit' className="nunito signinbut"> Register</button>
            </form>
            <p className="dont nunito">
            Already have an account ?{" "}
              <span style={{ fontWeight: 700, fontSize: "15px" }}>
                {" "}
                Login{" "}
              </span>
            </p>
            <p className="copyright nunito">
              © Copyright 2024 Ascent Investment Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
