import React, {useState} from 'react'
import './contact.css'
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

import { FiUser } from "react-icons/fi";
import { MdSubject } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log(formData);
  };
  return (
    <div className='contact-all'>
<div className="contact-us w-full">
<h1 className='nunito contact-header'>
Contact Us
 </h1>
</div>
<div className='contact-details w-full'>
  <div className='contact-details-wrapper'>
<div className='single-contact'>
<div className='contact-icon'>
<HiOutlinePhone color='#1a81cf' size={28}/>
</div>
<div className='contact-text'>
  <h1 className='nunito contact-subject' > Phone Number</h1>
  <p className='nunito contact-details-text'> +1 469 905 2399 </p>
  <p className='nunito contact-details-text'> +1 323 917 2918 </p>
  <h1 className='nunito contact-subject' style={{paddingTop: 12}} > Telegram</h1>
  <p> <a className='nunito contact-details-text' href="https://t.me/ContactAscentinvestment">ContactAscentinvestment</a> </p> 


</div>
</div>
<div className='single-contact'>
<div className='contact-icon'>
<MdOutlineMailOutline color='#1a81cf' size={28}/>
</div>
<div className='contact-text'>
  <h1 className='nunito contact-subject'> Email</h1>
  <p className='nunito contact-details-text'> contact@ascentinvestmentsltd.com </p>

</div>
</div>
<div className='single-contact'>
<div className='contact-icon'>
<GrLocation color='#1a81cf' size={28}/>
</div>
<div className='contact-text'>
  <h1 className='nunito contact-subject'> Address</h1>
  <p className='nunito contact-details-text'> 27 Old Gloucester Street, London, United Kingdom, WC1N 3AX </p>

</div>
</div>

  </div>
</div>

<div className='form w-full'>
<form onSubmit={handleSubmit} className="contact-form">
<h1 className='nunito form-heading'> Get in Touch!</h1>

  <div className='formik'>

      <div className="form-group formg">
        <label htmlFor="fullName" className='nunito icon-flex'><FiUser style={{marginRight:10}}/>Your Name</label>
        <input
        className='input'
          type="text"
          id="fullName"
          name="fullName"
          placeholder='Full Name'
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group formg">
        <label htmlFor="email" className='nunito icon-flex'><MdEmail style={{marginRight:10}}/>Email</label>
        <input
        className='input'
        placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject" className='nunito icon-flex'><MdSubject style={{marginRight:10}}/>Subject</label>
        <input
        className='input'
        placeholder='Subject of your message'

          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="comment" className='nunito icon-flex'><FaRegComment style={{marginRight:10}}/>Comment</label>
        <textarea
        className='input'
        placeholder='Your message'

          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className='nunito send'>Send Message</button>
    </form>
    </div>

    </div>
  )
}

export default Contact