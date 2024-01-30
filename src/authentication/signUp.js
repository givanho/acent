import React, { useState, useMemo } from 'react'
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
    const [checked, setChecked] = useState(false)
    const [value, setValue] = useState('')


    const[loading, setLoading] = useState(false)
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [password, setPasswowrd] = useState(null);
    const [rePassword, setRePassword] = useState(null);
    const [show, setShow] = useState(false);
    const [errorOutput, setErrorOutput] = useState({
      firstname: null,
      lastName: null,
      password: null,
      rePassword: null,
      fireError: null,
    });

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
    onSubmit: values => {
      console.log("onSubmit", values);
      // console.log(value.label)
    },
  }) 
    

    const validationSchema = Yup.object({
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email adress"),
      password: Yup.string().required("Password is required"),
      repassword: Yup.string().required("Re-enter Password"),
      firstname: Yup.string().required("First Name is required"),
      lastname: Yup.string().required("Last name is required"),
      country: Yup.string().required("Country is required"),
    });



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
              </p>
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
              </p>
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
              </p>
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
              </p>
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
              </p>
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
              </p>
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
