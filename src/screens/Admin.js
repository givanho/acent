
import React, {useState, useEffect, useRef} from 'react'
import Table from 'react-bootstrap/Table';
import { UserAuth } from '../context/context'
import { db, storage } from '../context/firebase';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GrClose } from "react-icons/gr";
import './admin.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";


import { BiPlusCircle } from "react-icons/bi";
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import {
    orderBy,
    collection,
    getDocs,
    doc,
    onSnapshot,
    updateDoc,
    arrayRemove,
    arrayUnion,
    query,
    deleteDoc ,
    where ,
    setDoc, 
    getDoc,
    serverTimestamp
    
  } from "firebase/firestore";

const Admin = () => {
 
  const [thisUsers, setThisUsers] = useState("")
    const { user} = UserAuth();
    const [data, setData] = useState([]);
    const defaultUtcTime = moment.utc();
    const futureDate = moment(defaultUtcTime).add(1, 'months');
    const currentDate = new Date();
  const [modalShow, setModalShow] = React.useState(false);
  const [error1, setError1] = useState(true);
  const [success, setSuccess] = useState(false)



    const [inputValues, setInputValues] = useState(Array(data.length).fill(''));
    const [number, setNumber] = useState('');
   
    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
      };
    const ImageComponent = ({ src }) => {
        const [fullscreen, setFullscreen] = useState(false);
       
        const toggleFullscreen = () => {
          setFullscreen(!fullscreen);
        };
       
       



        return (
          <div onClick={toggleFullscreen} style={{ cursor: 'pointer' }}>
       {fullscreen && (
        <Modal
          show={fullscreen}
          onHide={() => setFullscreen(false)}
          centered
          size="md"
        >
          <Modal.Header closeButton>
            <Modal.Title>KYC</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <img src={src} alt="KYC Images" style={{ width: '100%', height: 'auto' }} />
          </Modal.Body>
        </Modal>
      )}
      <div onClick={toggleFullscreen} style={{ cursor: 'pointer' }}>
        <img src={src} alt="KYC Thumbnail" style={{ maxWidth: '32px', maxHeight: '32px' }} />
      </div>
      
          </div>
        );
      };
      






    useEffect(() =>{
        const fetchData = async () =>{
            let list=[];
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    list.push({id:doc.id, ...doc.data()})
                })
                setData(list)
               
            }
        
        catch (err){
            console.log(err)
        }
    }
    fetchData()
    },[success])
    function OpenMode (users) {
      setModalShow(true);
      setThisUsers(users);
      
    }

    function ModalHide () {
            setSuccess(false);
      setModalShow(false);
 }  
 
 const deleteData = (postID) =>{
  const postDocRef = doc(db, 'users', thisUsers);
  
 }

 function PaymentForm() {

  const { Formik } = formik;

  const schema = yup.object().shape({
    selectedItem: yup.string().required(),
    selectedItem1: yup.string().required(),
    amount: yup.string().required(),
   
  });

  return (
<div>
  {
    success ? 
    <div className="verified">
    <div style={{margin:"auto"}}>
    <RiVerifiedBadgeFill size={200} color={"#1a81c5"}
  />  
    </div>
  
  <h2> Acount Funded</h2>
  </div>
    
    :

  <Formik
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const userRef = doc(db, 'users', thisUsers);
  
        try {
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            const userData = docSnapshot.data();
            let confirmedPayment = userData.funded || [];
            confirmedPayment.push({
              plan: values.selectedItem,
              currency: values.selectedItem1,
              amount: values.amount,
              createdAt: defaultUtcTime.format(),
              expiry: futureDate.format()
            });

            await setDoc(userRef, { funded: confirmedPayment }, { merge: true });
            setSubmitting(false); // Set submitting to false once the form is successfully submitted
            setSuccess(true);
        

          }
        } catch (error) {
          
          setErrors({ submit: 'Failed to fund account. Please try again.' });
         
        }
      }}
      initialValues={{
        selectedItem: '',
        selectedItem1: '',
        amount: '',
       
      }}
    >
      {({ handleSubmit, handleChange, values, setFieldValue, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
           
            <Form.Group  controlId="validationFormikUsername">
              <Form.Label>Enter an Amount</Form.Label>
              
              <InputGroup hasValidation style={{width:"95%", marginInline:'auto'}}>
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Amount"
                  aria-describedby="inputGroupPrepend"
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                  isInvalid={!!errors.amount}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.amount}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row >
            <Form.Group  controlId="validationFormik03">
              
             

   <div className="dropd" style={{width:'100%'}}>
    <Dropdown onSelect={(eventKey) => setFieldValue('selectedItem', eventKey)} isInvalid={!!errors.selectedItem} 
    style={{marginBottom:"30px"}}>
      <Dropdown.Toggle id="dropdown-basic">
      {values.selectedItem || 'Select a Plan'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Basic Beginner">Basic Beginner</Dropdown.Item>
        <Dropdown.Item eventKey="Premium">Premium</Dropdown.Item>
        <Dropdown.Item eventKey="Pro">Pro</Dropdown.Item>
      </Dropdown.Menu>
{errors.selectedItem && <p style={{color:"red", fontFamily:"nunito", fontSize:"12px", marginTop:"-50px"}}>select a plan</p>}

    </Dropdown>
</div>

            </Form.Group>


 <Form.Group  controlId="validationFormik04">
              
             

   <div className="dropd" style={{width:'100%'}}>
    <Dropdown onSelect={(eventKey) => setFieldValue('selectedItem1', eventKey)} isInvalid={!!errors.selectedItem1}>
      <Dropdown.Toggle id="dropdown-basic">
      {values.selectedItem1 || 'Select Currency'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="USDT">USDT</Dropdown.Item>
        <Dropdown.Item eventKey="Bitcoin">Bitcoin</Dropdown.Item>
        <Dropdown.Item eventKey="Ethereum">Ethereum</Dropdown.Item>
      </Dropdown.Menu>
{errors.selectedItem1 && <p style={{color:"red", fontFamily:"nunito", fontSize:"12px", marginTop:"-50px"}}>select a currency</p>}

    </Dropdown>
</div>

            </Form.Group>


           
            
          </Row>
          
          <Button className="modbut" type="submit">Fund User</Button>
        </Form>
      )}
    </Formik>  
  }
</div>
    
    
  );
}


 function MyVerticallyCenteredModal(props) {
 
    const timestamp = moment().valueOf();

    

 
     return (
       <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
       >
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title-vcenter">
     <button onClick={ModalHide}><GrClose size={32} color="black"/></button>
   
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
          
        <PaymentForm/>
        
        

     
         </Modal.Body>
         <Modal.Footer>
 
         </Modal.Footer>
       </Modal>
     );
   }


    return(
        <div>
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={ModalHide}
      />
<h2 className="header2"> Welcome Administrator</h2>
  <Table responsive style={{marginBottom:"32px"}}>
  <thead>
    <tr className='table-head'>
      <th>Email</th>
      <th>Full Name</th>
      <th>KYC</th>
      <th>Account Type</th>
      <th>Currency</th>
      <th>Duration</th>
      <th>Payment</th>
      <th>Started At</th>
      <th>Expiring At</th>
      <th>Status</th>
      <th>Fund</th>
     
    </tr>
  </thead>
  <tbody className='tbod'>
    {data.map((user, index) => (
      <tr key={index}>
        <td>{user.email}</td>
        <td>{user.firstname} { " "+user.lastname} </td>
        <td> 
       { user.kyc ?  <DropdownButton >
     
      <Dropdown.Item > {user.kyc ?  <ImageComponent src={user.kyc} />: ""}</Dropdown.Item>
      <Dropdown.Item > {user.kyc ?  <ImageComponent src={user.kyc} />: ""}</Dropdown.Item>
    </DropdownButton> :
    ''}
       
            
            </td>
<td>
{user.funded ?<div >
      {user?.funded?.map((item, index) => (
        <div key={index}>
          {/* Render each item in the array */}
          <p style={{ fontSize: '13px', fontFamily: "nunito",marginBottom:'10px' }}> {item.plan} </p>
        </div>
      ))}
    </div> : "" }
            
 
</td>

<td>

{user.funded ?<div >
      {user?.funded?.map((item, index) => (
      
<div key={index} >
     <p style={{ fontSize: '13px', fontFamily: "nunito",marginBottom:'10px' }}>
       {item.currency} &emsp; $ {item.amount}
     </p>
  
        </div>
     
      ))}
    </div> : "" }

    
</td>
<td>
    <div>
        <p> 1 Month</p>
        </div>
</td>
           


            <td>
                {user.payment ?<DropdownButton variant="success" title="Payments">
      {user?.payment?.map((item, index) => (
        <Dropdown.Item key={index}>
          {/* Render each item in the array */}
          <ImageComponent src={item} />
        </Dropdown.Item>
      ))}
    </DropdownButton> : "" }
            
            </td>


<td>
{user.funded ?<div >
      {user?.funded?.map((item, index) => (
        <div key={index}>
          {/* Render each item in the array */}
          <p style={{ fontSize: '13px', fontFamily: "nunito",marginBottom:'10px' }}>  {item.createdAt} </p>
        </div>
      ))}
    </div> : "" }
</td>
<td>
{user.funded ?<div >
      {user?.funded?.map((item, index) => (
        
        <div key={index}>
          {/* Render each item in the array */}
          <p style={{ fontSize: '13px', fontFamily: "nunito",marginBottom:'10px' }}>  {item.expiry}
 </p>
        </div>
      ))}
    </div> : "" }
   </td>
            <td colSpan="1">
              <p>  </p>
              </td> 
      <td>
        
          
              <button onClick ={() => OpenMode(user.userID)} >
              <BiPlusCircle size={24} color="green"/>

              </button>
            
      </td>
        {/* Render other user attributes in corresponding columns */}
      </tr>
    ))}
  </tbody>
    
   
</Table>

        </div>
    )
}

export default Admin
