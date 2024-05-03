import React, {useState,useEffect, useRef} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import Modal from 'react-bootstrap/Modal';
import { GrClose } from "react-icons/gr";
import Alert from 'react-bootstrap/Alert';
import { UserAuth } from '../context/context'
import moment from 'moment';

import { collection, query, where ,doc, setDoc, onSnapshot,getDocs , getDoc,serverTimestamp} from "firebase/firestore";
import { db, storage } from '../context/firebase';
import { ref , uploadBytesResumable, getDownloadURL,} from 'firebase/storage';
import { RiVerifiedBadgeFill } from "react-icons/ri";

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
  const [error, setError] = useState(true);
  const [error1, setError1] = useState(true);
  const [image1, setImage1] = useState('')
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);


   const inputRef = useRef(null);
const [data, setData] = useState(null)
const [selectedFileName1, setSelectedFileName1] = useState('No image chosen');

   const { user, logout} = UserAuth();

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
    if(amounts && items){
      setError(false)
    }
  }, [amounts, items]);

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


  function FileSelect() {
    
    

    return (
      <form >
         <input type="file" 
        accept="image/*"
      id="img"
      style={{display:'none'}}
      onChange={handleFileChange1}
    />
      <label className="imge" for="img"> <p>Choose Image</p>  <span>{selectedFileName1} </span></label>
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
         <button className={`pp ${amounts === 100 ? "activeg" : ""}`} onClick={()=> setAmount(100)}>$100</button>
         <button className={`pp ${amounts === 250 ? "activeg" : ""}`} onClick={()=> setAmount(250)}>$250</button>
         <button className={`pp ${amounts === 500 ? "activeg" : ""}`} onClick={()=> setAmount(500)}>$500</button>
         <button className={`pp ${amounts === 1000 ? "activeg" : ""}`} onClick={()=> setAmount(1000)}>$1,000</button>
         <button className={`pp ${amounts === 1500 ? "activeg" : ""}`} onClick={()=> setAmount(1500)}>$1,500</button>
         <button className={`pp ${amounts === 2000 ? "activeg" : ""}`} onClick={()=> setAmount(2000)}>$2,000</button>
       </div>
     
       </>
        )}
        {selectedItem === "Premium" && (
           <>
           <h2>Choose Quick Amount to Invest</h2>
           <div className="rowbu">
         <button className={`pp ${amounts === 100 ? "activeg" : ""}`} onClick={()=> setAmount(100)}>$100</button>
         <button className={`pp ${amounts === 250 ? "activeg" : ""}`} onClick={()=> setAmount(250)}>$250</button>
         <button className={`pp ${amounts === 500 ? "activeg" : ""}`} onClick={()=> setAmount(500)}>$500</button>
         <button className={`pp ${amounts === 1000 ? "activeg" : ""}`} onClick={()=> setAmount(1000)}>$1,000</button>
         <button className={`pp ${amounts === 1500 ? "activeg" : ""}`} onClick={()=> setAmount(1500)}>$1,500</button>
         <button className={`pp ${amounts === 2000 ? "activeg" : ""}`} onClick={()=> setAmount(2000)}>$2,000</button>
       </div>
       
         </>
        )}
        {selectedItem === "Pro" && (
       <>
       <h2>Choose Quick Amount to Invest</h2>
       <div className="rowbu">
         <button className={`pp ${amounts === 100 ? "activeg" : ""}`} onClick={()=> setAmount(100)}>$100</button>
         <button className={`pp ${amounts === 250 ? "activeg" : ""}`} onClick={()=> setAmount(250)}>$250</button>
         <button className={`pp ${amounts === 500 ? "activeg" : ""}`} onClick={()=> setAmount(500)}>$500</button>
         <button className={`pp ${amounts === 1000 ? "activeg" : ""}`} onClick={()=> setAmount(1000)}>$1,000</button>
         <button className={`pp ${amounts === 1500 ? "activeg" : ""}`} onClick={()=> setAmount(1500)}>$1,500</button>
         <button className={`pp ${amounts === 2000 ? "activeg" : ""}`} onClick={()=> setAmount(2000)}>$2,000</button>
       </div>
   
     </>
        )}

<h2>Or Enter Your Amount</h2>
       <div className="amountin">
        <AmountInput />
       </div>
      
      <h2>Choose Payment Method</h2>
      <div className="rowbut">
  <div >
    <button className={`pl ${items?.payment?.name === "USDT" ? "activef" : ""}`} onClick={() => setItems({payment:{name:"USDT", address:USDT}})}> 
      <div className="paycoin">
        <div>
          <SiTether size={25} color="#29302D" />
        </div>
        <p>&emsp;USDT</p>
      </div>
    </button>
  </div>
  <div >
    <button className={`pl ${items?.payment?.name === "Ethereum" ? "activef" : ""}`} onClick={() => setItems({payment:{name:"Ethereum", address:Ethereum}})}>
      <div className="paycoin">
        <div>
          <FaEthereum size={25} color="#29302D" />
        </div>
        <p>&emsp;Ethereum</p>
      </div>
    </button>
  </div>
  <div >
    
    <button className={`pl ${items?.payment?.name === "Bitcoin" ? "activef" : ""}`} onClick={() => setItems({payment:{name:"Bitcoin", address:Bitcoin}})}>
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
            <div style={{display:"flex", justifyContent:'space-between', alignItems:'end'}}>
            <div> <h3>Payment Method:  </h3></div>
            <div> <p>{items?.payment?.name}  </p></div>
            </div>
            <hr></hr>


            <div style={{display:"flex", justifyContent:'space-between'}}>
            <div> <h2 style={{fontFamily:"nunito", fontWeight:600,color:"#8492a6" }}>Amount to Invest: </h2>
            
            </div> <div><h2 style={{fontFamily:"nunito" }}>${amounts }</h2></div> 
</div>

<button  className={`modbut ${error? 'disabled' : ''}`} disabled={error} onClick={() => OpenMode(items)}>Confirm & Invest </button>

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
            <div> <p>{items?.payment?.name}  </p></div>
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
            <div> <h3>Payment Method:  </h3></div>
            <div> <p>{items?.payment?.name}  </p></div>
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

  const handleUpload = () => {
    setUploaded(false)
setError(true)
    const storageRef = ref(storage);
    const userRef = doc(db, 'users', user.uid);
    const timestamp = moment().valueOf();


    const uploadImage = (image) => {
      const imageRef = ref(storageRef, 'payments/' + data.firstname +data.lastname+ '/payment'+timestamp)
      const uploadTask = uploadBytesResumable(imageRef, image);
  
      uploadTask.on('state_changed',
        (snapshot) => {
         
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          if(progress < 100){
          setUploading(true)
          setUploaded(false)

        
          }
          else{
          setUploaded(true)
          setUploading(false)

          }
        },
        (error) => {
          console.error(error);
        },
  
   () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
         getDownloadURL(uploadTask.snapshot.ref)
        .then(async (downloadURL) => {
                   
            setImage1('');
  setError1(true)
    setShowAlert(true);
  setSelectedFileName1('No image chosen');
  if (setSelectedFileName1 !=='No image chosen' ){
    setError1(false)
  }
        await  getDoc(userRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                let paymentProofs = userData.payment || []; // Get existing payment URLs or initialize as an empty array
                paymentProofs.push(downloadURL); // Add the new download URL to the array
        
                // Update the 'payment' field with the updated array of download URLs
                 setDoc(userRef, { payment: paymentProofs }, { merge: true });
            }
        });
          });
        }
  
  
      );
      
    };
    if (image1) {
      uploadImage(image1);
    }
   
  };

  

  
  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);
    setError1(false)
    setSelectedFileName1(file ? file.name : 'No image chosen');
    
  };

  



  useEffect(() => {
    if (user) {
      

      const q = query(collection(db, 'users'), where('userID', '==', user.uid));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          
          setData(doc.data());
          
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, []);


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

function ModalHide () {
    setError(true);
    setUploaded(false);
    setUploading(false);
     setModalShow(false);
}  
  function OpenMode ( item) {
  
    setModalShow(true)
    setItems(item.payment.name);
    setAddress(item.payment.address);

    
   
  
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
        {
          uploaded ? 
          <div className="verified">
          <div style={{margin:"auto"}}>
          <RiVerifiedBadgeFill size={200} color={"#1a81c5"}
        />  
          </div>
        
        <h2> Payment proof uploaded</h2>
        </div>
        :
        
        
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
        
        
        <FileSelect/>


        
  
      </div>
      
      
      </>
      
     

    </div>
        
  }
        </Modal.Body>
        <Modal.Footer>
<button  className={`modbut ${uploaded || uploading || error1? 'disabled' : ''}`} disabled={uploaded || uploading ||error1} onClick={handleUpload}>Submit Payment </button>

        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={ModalHide}
      />
    <div className="dropd">
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
</div>

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