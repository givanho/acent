import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "./signin.css";
import logo from "../assets/logo.png";
import { PiPasswordBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
const SignUp = () => {
    const [checked, setChecked] = useState(false)
    const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const changeHandler = value => {
    setValue(value)
  }
  function handleChange(e) {
      setChecked(e.target.checked);
   }
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
            <div className=" pado">
              <p className="nunito input-header">
                First Name <span style={{ color: "red" }}>*</span>
              </p>
              <div className="input-with-icon">
                <input type="text" placeholder="Enter your first name" />
                <FiUserCheck color="#1a81c5" className="input-icon" />
              </div>
            </div>


            <div className=" pado">
              <p className="nunito input-header">
                Last Name <span style={{ color: "red" }}>*</span>
              </p>
              <div className="input-with-icon">
                <input type="text" placeholder="Enter your last name" />
                <FiUserCheck color="#1a81c5" className="input-icon" />
              </div>
            </div>


            <div className=" pado">
              <p className="nunito input-header">
                Your Email <span style={{ color: "red" }}>*</span>
              </p>
              <div className="input-with-icon">
                <input type="text" placeholder="mail@example.com" />
                <IoMailOutline color="#1a81c5" className="input-icon" />
              </div>
            </div>

            <div className=" pado">
              <p className="nunito input-header">
                {" "}
                Country <span style={{ color: "red" }}>*</span>
              </p>
            </div>
            <Select options={options} value={value} onChange={changeHandler}  placeholder="Choose Country" isSearchable={true} 
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
              <input type="password" placeholder="Enter password" />
              <PiPasswordBold color="#1a81c5" className="input-icon" />
            </div>


            <div className="pado">
              <p className="nunito input-header">
                {" "}
                Confirm Password <span style={{ color: "red" }}>*</span>
              </p>
            </div>
            <div className="input-with-icon">
              <input type="password" placeholder="Re-enter your password" />
              <PiPasswordBold color="#1a81c5" className="input-icon" />
            </div>
            <div className='flex justify-evenly align-middle nunito pt-5' >
           <input value = "accepted" type = "checkbox" onChange = {handleChange} />
           <p className='accept'>I Accept the Terms And Privacy Policy</p>
            </div>
            <button className="nunito signinbut"> Register</button>
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
