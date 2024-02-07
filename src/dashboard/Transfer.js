import React, {useState} from 'react'
import './transfer.css'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { BiSolidUserCircle } from "react-icons/bi";
import Modal from 'react-bootstrap/Modal';
import { GrClose } from "react-icons/gr";
import success from "../assets/success.json"


const Transfer = () => {
  const [modalShow, setModalShow] = useState(false);
  const [amount, setAmount] = useState(false);
  const formik = useFormik({
    initialValues : {
    email: "",
    amount: "",
   
  },
  
   onSubmit: async values => {
    
    try {
    
  
  

    } catch (e) {
     console.log(e.message);
    }
  
  },
  validationSchema :Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("email must contain @"),
    amount: Yup.string().required("amount is required"),
  })
}) 

function OpenMode (numb) {
  setModalShow(true)
  setAmount(numb);
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
  <button onClick={() => setModalShow(false)}><GrClose size={32} color="black"/></button>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
      <div className='modal-content'>
{!amount &&   
<>
 <div className="payout-div">
      
    </div>
    
    <div className='assetpic'>
    </div>
    
    

    <div className='address-head'>
      <h2>Upload Payment proof after payment. </h2>
      
      
      <input type="file" 
      placeholder='No file Chosen' />
     
      
      

    </div>
    
    
    </>
    }
   
  </div>
      </Modal.Body>
      <Modal.Footer>
      {!amount &&   
      <button className='modbut'> Continue</button>}
      </Modal.Footer>
    </Modal>
  );
}


  return (
    <>
    <div className='transfer-container  '>
        <div className='transfer-in'>
        <div className="coinuser">
  <div className="coinuse">
  <BiSolidUserCircle size={52} style={{marginInline:'auto'}}color="#29302D"/>
  <h2> $0.00</h2>
  <p>Account Balance</p>
  </div>
  </div>
            <div className='trans w-full'>
              <form onSubmit={formik.handleSubmit}> 
              <div ><p className='nunito input-header'>email <span style={{color:'red'}}>*</span></p>
              <span className='errors nunito'>{formik.errors.email && formik.touched.email && formik.errors.email}</span>
              <div className="input-with-icon">
                <input type="text" placeholder="mail@example.com" 
                name='email' 
                value={formik.values.email} 
                onChange={formik.handleChange}/>
              </div>
    </div>

    <div className='flex justify-between pado'><p className='nunito input-header'> Amount ($) <span style={{color:'red'}}>*</span></p>
    </div>
    <p className='errors nunito'>{formik.errors.amount && formik.touched.amount && formik.errors.amount}</p>
    <div className="input-with-icon">
      <input type="number" placeholder="Enter Transfer amount"
      min="50"
       name='amount' 
       value={formik.values.amount} 
       onChange = {formik.handleChange}  />
    </div>
    <button type='submit' className='nunito signinbut'> Submit Transfer</button>
    </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Transfer