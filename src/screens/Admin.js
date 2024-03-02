
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
    
  } from "firebase/firestore";
const Admin = () => {
 

    const { user} = UserAuth();
    const [data, setData] = useState([]);
    const numberInputRef = useRef(null);
   const inputRef = useRef(null);
  const [amounts, setAmount] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [error1, setError1] = useState(true);



    const [inputValues, setInputValues] = useState(Array(data.length).fill(''));
    const [number, setNumber] = useState('');
    const [selectedItem, setSelectedItem] = useState("Basic Beginner");

    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey)
      };
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
 

 useEffect(() => {
  // Set focus on the input field when the component mounts or 'amount' state changes
  inputRef?.current?.focus();
  
  
}, [amounts]);

const handleChange = (e) => {
  setAmount(e.target.value);
};


function AmountInput() {

  return (
    <form className="amountins">
      <input   
        ref={inputRef}
        type="number"
        placeholder="Enter an amount"
        value={amounts}
        onChange={handleChange}/>

<div className="dropdo">
<Dropdown onSelect={handleSelect}>
<Dropdown.Toggle  className='dropt' >
{selectedItem}
</Dropdown.Toggle>

<Dropdown.Menu>
<Dropdown.Item   className='dropt' eventKey="Basic Beginner">Basic Beginner</Dropdown.Item>
<Dropdown.Item  className='dropt' eventKey="Premium">Premium</Dropdown.Item>
<Dropdown.Item  className='dropt' eventKey="Pro">Pro</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
</div>
    </form>
  );
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
     <button onClick={ModalHide}><GrClose size={32} color="black"/></button>
   
           </Modal.Title>
         </Modal.Header>
         <Modal.Body>
        <AmountInput/>
         </Modal.Body>
         <Modal.Footer>
 <button  className={`modbut ${ error1? 'disabled' : ''}`} disabled={error1} >Submit Payment </button>
 
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
<div className="dropdo">
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle  className='dropt' >
        {selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item   className='dropt' eventKey="Basic Beginner">Basic Beginner</Dropdown.Item>
        <Dropdown.Item  className='dropt' eventKey="Premium">Premium</Dropdown.Item>
        <Dropdown.Item  className='dropt' eventKey="Pro">Pro</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
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
         <div className='amountinputed'>
            <div>
             <input
                type="number"
                value={inputValues[index]}  // Use input value for current index
                onChange={(event) => handleInputChange(index, event.target.value)}
                step="0.00001"
                min="0"
                placeholder="$"
              />   
            </div>
              <div style={{marginLeft:"5px"}}>
              <BiPlusCircle size={24} color="green"/>

              </div>
            </div>
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
