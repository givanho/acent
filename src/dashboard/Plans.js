import React, {useState,useEffect, useRef} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import Modal from 'react-bootstrap/Modal';
import { GrClose } from "react-icons/gr";
import Alert from 'react-bootstrap/Alert';

import { FaRegCopy } from "react-icons/fa";
import './plans.css'
const Plans = () => {
  const [address, setAddress] = useState("")
  const [modalShow, setModalShow] = React.useState(false);
  const [items, setItems] = useState('');
  const [copied, setCopied] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Basic Beginner");
  const [amounts, setAmount] = useState("");
   const inputRef = useRef(null);

   const Bitcoin = "15dh4wvW57w45uKFqUVAfCeAdnsGEAGeJa"
   const Ethereum = "0x52050919cce19aa8739e8c56b3e68a31bb0a81a1"
   const USDT = "TNVTTGKZQ6VurP6FyemDuLExkWxJWaxswt"
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
 
  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  useEffect(() => {
    // Set focus on the input field when the component mounts or 'amount' state changes
    inputRef.current.focus();
  }, [amounts]);

  function AmountInput() {

    return (
      <form className="amountins">
        <input   
          ref={inputRef}
          type="number"
          placeholder="Enter an amount"
          value={amounts}
          onChange={handleChange}/>
      </form>
    );
  }

  function RenderSelectedItems() {
    return (
      <div className="basic">
        {selectedItem === "Basic Beginner" && (
          <>
         <h2>Choose Quick Amount to Invest</h2>
         <div className="rowbu">
         <button className="pp colbu" onClick={()=> setAmount(100)}>$100</button>
         <button className="pp colbu" onClick={()=> setAmount(250)}>$250</button>
         <button className="pp colbu" onClick={()=> setAmount(500)}>$500</button>
         <button className="pp colbu" onClick={()=> setAmount(1000)}>$1,000</button>
         <button className="pp colbu" onClick={()=> setAmount(1500)}>$1,500</button>
         <button className="pp colbu" onClick={()=> setAmount(2000)}>$2,000</button>
       </div>
     
       </>
        )}
        {selectedItem === "Premium" && (
           <>
           <h2>Choose Quick Amount to Invest</h2>
           <Stack direction="horizontal" gap={3}>
           <button className="pp" onClick={()=> setAmount(100)}>$100</button>
           <button className="pp" onClick={()=> setAmount(250)}>$250</button>
           <button className="pp" onClick={()=> setAmount(500)}>$500</button>
           <button className="pp" onClick={()=> setAmount(1000)}>$1,000</button>
           <button className="pp" onClick={()=> setAmount(1500)}>$1,500</button>
           <button className="pp" onClick={()=> setAmount(2000)}>$2,000</button>
         </Stack>
       
         </>
        )}
        {selectedItem === "Pro" && (
       <>
       <h2>Choose Quick Amount to Invest</h2>
       <Stack direction="horizontal" gap={3}>
       <button className="pp" onClick={()=> setAmount(100)}>$100</button>
       <button className="pp" onClick={()=> setAmount(250)}>$250</button>
       <button className="pp" onClick={()=> setAmount(500)}>$500</button>
       <button className="pp" onClick={()=> setAmount(1000)}>$1,000</button>
       <button className="pp" onClick={()=> setAmount(1500)}>$1,500</button>
       <button className="pp" onClick={()=> setAmount(2000)}>$2,000</button>
     </Stack>
   
     </>
        )}

<h2>Or Enter Your Amount</h2>
       <div className="amountin">
        <AmountInput />
       </div>
      
      <h2>Choose Payment Method</h2>
      <div className="rowbut">
  <div className="colmd">
    <button className="pl" onClick={() => setItems({payment:{name:"USDT", address:USDT}})}> 
      <div className="paycoin">
        <div>
          <SiTether size={25} color="#29302D" />
        </div>
        <p>&emsp;USDT</p>
      </div>
    </button>
  </div>
  <div className="colmd">
    <button className="pl" onClick={() => setItems({payment:{name:"Ethereum", address:Ethereum}})}>
      <div className="paycoin">
        <div>
          <FaEthereum size={25} color="#29302D" />
        </div>
        <p>&emsp;Ethereum</p>
      </div>
    </button>
  </div>
  <div className="colmd">
    <button className="pl" onClick={() => setItems({payment:{name:"Bitcoin", address:Bitcoin}})}>
      <div className="paycoin">
        <div>
          <SiBitcoinsv size={25} color="#29302D" />
        </div>
        <p>&emsp;Bitcoin</p>
      </div>
    </button>
  </div>
</div>

      </div>
    );
  }
 
  

   function RenderSelectedItemsSide() {
   
    
    return (
      <div >
        {selectedItem === "Basic Beginner" && (
          <div>
            <h2>Your Investment Details</h2>


            <div style={{display:"flex", flexDirection:"column"}}>


<div style={{display:"flex", justifyContent:'space-between'}}>
           <div> <h3>Name of Plan</h3>
           <p>{selectedItem}</p>
           </div>  
           <div> <h3>Plan Price</h3>
           <p> $500 </p>
           </div>
         </div>


         <div style={{display:"flex", justifyContent:'space-between'}}>
           <div> <h3>Duration</h3> 
           <p>1 Month </p>
           </div>      
           <div><h3>Profit</h3> 
           <p> 1.58% daily</p>
           </div> 
           </div>



           <div style={{display:"flex", justifyContent:'space-between'}}>
           <div> <h3>Minimum Deposit</h3>  
           <p>$500 </p>
           </div>     <div> <h3> Maximum Deposit</h3>
           <p> $5000</p>
           </div>
           </div>


           <div style={{display:"flex", justifyContent:'space-between'}}>
           <div> <h3>Minimum Return </h3>
           <p>2% </p>
           </div>    <div> <h3>Maximum Return</h3>
           <p>3%</p>
           </div>
           </div>



            <hr></hr>
            <div> <h3>Payment Method:  </h3></div>
            <hr></hr>


            <div style={{display:"flex", justifyContent:'space-between'}}>
            <div> <h2 style={{fontFamily:"nunito", fontWeight:600,color:"#8492a6" }}>Amount to Invest: </h2>
            
            </div> <div><h2 style={{fontFamily:"nunito" }}>${amounts }</h2></div> 
</div>

<button className="modbut" onClick={() => OpenMode(items)}>Confirm & Invest </button>
            </div>





           
          </div>
        )}
        {selectedItem === "Premium" && (
                  <div>
                  <h2>Your Investment Details</h2>
      
      
                  <div style={{display:"flex", flexDirection:"column"}}>
      
      
      <div style={{display:"flex", justifyContent:'space-between'}}>
                 <div> <h3>Name of Plan</h3>
                 <p>{selectedItem}</p>
                 </div>  
                 <div> <h3>Plan Price</h3>
                 <p> $10000 </p>
                 </div>
               </div>
      
      
               <div style={{display:"flex", justifyContent:'space-between'}}>
                 <div> <h3>Duration</h3> 
                 <p>1 Month </p>
                 </div>      
                 <div><h3>Profit</h3> 
                 <p> 6% daily</p>
                 </div> 
                 </div>
      
      
      
                 <div style={{display:"flex", justifyContent:'space-between'}}>
                 <div> <h3>Minimum Deposit</h3>  
                 <p>$10000 </p>
                 </div>     <div> <h3> Maximum Deposit</h3>
                 <p> $50000</p>
                 </div>
                 </div>
      
      
                 <div style={{display:"flex", justifyContent:'space-between'}}>
                 <div> <h3>Minimum Return </h3>
                 <p>6% </p>
                 </div>    <div> <h3>Maximum Return</h3>
                 <p>10%</p>
                 </div>
                 </div>
      
      
      
                  <hr></hr>
                  <div> <h3>Payment Method:  </h3></div>
                  <hr></hr>
      
      
                  <div style={{display:"flex", justifyContent:'space-between'}}>
                  <div> <h2 style={{fontFamily:"nunito", fontWeight:600,color:"#8492a6" }}>Amount to Invest: </h2>
                  
                  </div> <div><h2 style={{fontFamily:"nunito" }}>${amounts }</h2></div> 
      </div>
      
      <button className="modbut" onClick={() => OpenMode(items)}>Confirm & Invest </button>
                  </div>
      
      
      
      
      
                 
                </div>
        )}




        {selectedItem === "Pro" && (
             <div>
            <h2>Your Investment Details</h2>


            <div style={{display:"flex", flexDirection:"column"}}>


<div style={{display:"flex", justifyContent:'space-between'}}>
           <div> <h3>Name of Plan</h3>
           <p>{selectedItem}</p>
           </div>  
           <div> <h3>Plan Price</h3>
           <p> $5000 </p>
           </div>
         </div>


         <div style={{display:"flex", justifyContent:'space-between'}}>
           <div> <h3>Duration</h3> 
           <p>1 Month </p>
           </div>      
           <div><h3>Profit</h3> 
           <p> 2% daily</p>
           </div> 
           </div>



           <div style={{display:"flex", justifyContent:'space-between'}}>
           <div> <h3>Minimum Deposit</h3>  
           <p>$3000 </p>
           </div>     <div> <h3> Maximum Deposit</h3>
           <p> $12000</p>
           </div>
           </div>


           <div style={{display:"flex", justifyContent:'space-between'}}>
           <div> <h3>Minimum Return </h3>
           <p>3% </p>
           </div>    <div> <h3>Maximum Return</h3>
           <p>6%</p>
           </div>
           </div>



            <hr></hr>
            <div> <h3>Payment Method:  {items}</h3></div>
            <hr></hr>


            <div style={{display:"flex", justifyContent:'space-between'}}>
            <div> <h2 style={{fontFamily:"nunito", fontWeight:600,color:"#8492a6" }}>Amount to Invest: </h2>
            
            </div> <div><h2 style={{fontFamily:"nunito" }}>${amounts }</h2></div> 
</div>

<button className="modbut" onClick={() => OpenMode(items)}>Confirm & Invest </button>
            </div>





           
          </div>
        )}
      </div>
    );
  }

  const handleCopy = () => {
    
    navigator.clipboard.writeText(address)
      .then(() => {
        setCopied("Address Copied!");
        // Show the alert
        setShowAlert(true);
        // Hide the alert after 2 seconds (adjust the time as needed)
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      })
      .catch(err => {
        setCopied('Failed to copy text: ', err);
        // You can also show an error message to the user here
      });
  };
  function OpenMode ( items) {
    setModalShow(true)
    setItems(items.payment.name);
    setAddress(items.payment.address);
  
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
   
  <>
   <div className="payout-div">
        <div className="payin-div">
          <p>Your payment method </p>
        </div>
         <div className='payin-para'>  <p>{items}</p>
    </div>
      </div>
      <p> You are to make payment of ${amounts} worth of {items} using your selected payment method.</p>
      
      <div className='assetpic'>
        {items === "USDT"? <SiTether size={82} color="#29302D"/>: items === "Ethereum"? <FaEthereum size={82} color="#29302D"/>: items === "Bitcoin"? <SiBitcoinsv size={82} color="#29302D"/> :""}
      </div>
      
      <div className='address-head'>
        <h2>{items} Address: </h2>
        <div >
         <div className='copyaddress'> <h3> {address}
 </h3>
          <button onClick={handleCopy}>
          <FaRegCopy color='gray' style={{marginLeft:"18px"}}/>
          </button>
        </div>
       
        <Alert show={showAlert} variant="success">
         {copied}
        </Alert>
        </div>
  
      </div>
  
      <div className='address-head'>
        <h2>Upload Payment proof after payment. </h2>
        
        
        <input type="file" 
        placeholder='No file Chosen' />
       
        
        
  
      </div>
      
      
      </>
      
     

    </div>
        </Modal.Body>
        <Modal.Footer>
        {/* {!errorMessage &&   
        <button className='modbut'> Submit Payment</button>} */}
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle id="dropdown-basic">
        {selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="Basic Beginner">Basic Beginner</Dropdown.Item>
        <Dropdown.Item eventKey="Premium">Premium</Dropdown.Item>
        <Dropdown.Item eventKey="Pro">Pro</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


<div className='plans-flex'>
<div className="selected">
<RenderSelectedItems />
</div>
<div  className="selected-side">
<RenderSelectedItemsSide/>
</div>
</div>
</>
  )
}

export default Plans