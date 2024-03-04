
import React, {useState, useEffect, useRef} from 'react'
import Table from 'react-bootstrap/Table';
import { UserAuth } from '../context/context'
import { db, storage } from '../context/firebase';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { GrClose } from "react-icons/gr";
import './admin.css'


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
 

    const { user} = UserAuth();
    const [data, setData] = useState([]);

  const [modalShow, setModalShow] = React.useState(false);
  const [error1, setError1] = useState(true);



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
    },[])

    function ModalHide () {
            
      setModalShow(false);
 }  
 
 function FormExample() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    selectedItem: yup.string().required(),
    selectedItem1: yup.string().required(),
    amount: yup.string().required(),
   
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
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
              <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              <InputGroup hasValidation>
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
              
             

   <div className="dropd">
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
              
             

   <div className="dropd">
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
          
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}


 function MyVerticallyCenteredModal(props) {
  const [success, setSuccess] = useState("");
  const userRef = doc(db, 'users', user.uid);
    const timestamp = moment().valueOf();
//   const formik = useFormik({
//     initialValues : {
//     amount: "",
//     plan: "",
//     currency: "",
   
//   },
  
//    onSubmit: async values => {
//     try {
    
  
//     await  getDoc(userRef).then((docSnapshot) => {
//       if (docSnapshot.exists()) {
//           const userData = docSnapshot.data();
//           let confirmedPayment = userData.payment || []; 
//           confirmedPayment.push({ plan: values.plan, currency: values.currency, amount: values.amount });
  
//            setDoc(userRef, { funded: confirmedPayment }, { merge: true });
//       }
//   });
  
//      setSuccess("Account successfully funded")
    
  
      

//     } catch (e) {
//      console.log(e.message);
//     }
  
//   },
//   validationSchema :Yup.object({
//     currency: Yup.string()
//       .required("Select the payment method"),
//     amount: Yup.string().required("Enter funding amount"),
//     plan: Yup.string()
//     .required("Select client's plan"),
//   })
// }) 


 
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
         <FormExample/>

         {/* <form className="amountins" onSubmit={formik.handleSubmit}>
       <input   
         
          type="number"
          placeholder="Enter an amount"
          value={formik.amount}
          onChange={formik.handleChange}/>
              <span className='errors nunito'>{formik.errors.amount && formik.touched.amount && formik.errors.amount}</span>


<button type='submit'  >Fund Account </button>

    </form> */}
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
    {user.payment ? 
    <>
       <div>
        <p>pro</p>
        <p>premium</p>
        <p>Beginner</p>
    </div>
<p>he</p>
</>
    : ""}
 
</td>

<td>
    <div>
        <p> Bitcoin &emsp; $20</p>
        </div>
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

            <td colSpan="3"></td> 
      <td>
        
          
              <button onClick ={() => setModalShow(true)} >
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
