import React from 'react'
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
const Contact = () => {
  return (
    <div>
<div className="contact-us w-full">
<h1 className='nunito contact-header'>
Contact Us +447462259501
 </h1>
</div>
<div className='contact-details'>
  <div className='contact-details-wrapper'>
<div className='single-contact'>
<div className='contact-icon'>
<HiOutlinePhone color='#1a81cf'/>
</div>
<div className='contact-text'>
  <h1 className='nunito'> Phone Number</h1>
  <p className='nunito'> +1 773 657 9431 </p>
</div>
</div>

  </div>
</div>



    </div>
  )
}

export default Contact