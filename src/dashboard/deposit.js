import React, {useState, useRef ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import './deposit.css'
import { GrClose } from "react-icons/gr";
import Alert from 'react-bootstrap/Alert';
import { collection, query, where ,doc, setDoc, onSnapshot,getDocs , getDoc,serverTimestamp} from "firebase/firestore";
import { db, storage } from '../context/firebase';
import { ref , uploadBytesResumable, getDownloadURL,} from 'firebase/storage';
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaRegCopy } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { UserAuth } from '../context/context'
import moment from 'moment';

const Deposit = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [number, setNumber] = useState('');
  const [numbe, setNumbe] = useState('');
  const [items, setItems] = useState('');
  const [ethPrice, setEthPrice] = useState('');
  const [bitPrice, setBitPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState('');
  const [showAlert, setShowAlert] = useState(false);
 
  const [address, setAddress] = useState("")
  const [modalShow, setModalShow] = React.useState(false);
  const [image1, setImage1] = useState('')
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState(true);
  const [error1, setError1] = useState(true);

  const inputRef = useRef(null);
  const [data, setData] = useState(null)
  const [selectedFileName1, setSelectedFileName1] = useState('No image chosen');
  const { user, logout} = UserAuth();

  const handleCheckboxChange = (value) => {
    setSelectedItem(value);
  };

const numberInputRef = useRef(null);
  const checkboxRef = useRef(null);

  const numberInputRef2 = useRef(null);
  const checkboxRef2 = useRef(null);

  const numberInputRef3 = useRef(null);
  const checkboxRef3 = useRef(null);

  const handleButtonClick = (event) => {
       event.preventDefault();
if(!selectedItem || !numberInputRef.current.value){
  
    setErrorMessage('Select a coin and input deposit amount')
    OpenMode(errorMessage);

  
  return null
}
else{


    // Check if the references are not null
    if (numberInputRef.current && checkboxRef.current) {
      // Your logic here
  
      setNumber(numberInputRef.current.value);
      setSelectedItem('USDT ERC (20)');
     setAddress("15dh4wvW57w45uKFqUVAfCeAdnsGEAGeJa") 
      OpenMode(number, selectedItem);

    setErrorMessage('')

    }
    else{
      return false
    }
    
  }
  };

  
  const handleButtonClick2 = (event) => {
    event.preventDefault();

    if (numberInputRef2.current.value && checkboxRef2.current) {
      setEthPrice(numberInputRef2.current.value);
      setSelectedItem('Ethereum');
     setAddress("0x52050919cce19aa8739e8c56b3e68a31bb0a81a1") 

      OpenMode(ethPrice, selectedItem);

    setErrorMessage('')


    }
    else {
      setErrorMessage('Select a coin and input deposit amount')
      OpenMode(errorMessage);

    }
  };
  
  
  const handleButtonClick3 = (event) => {
    event.preventDefault();

    if (numberInputRef3.current.value && checkboxRef2.current) {
      setBitPrice(numberInputRef3.current.value);
      setSelectedItem('Bitcoin');
     setAddress("15dh4wvW57w45uKFqUVAfCeAdnsGEAGeJa") 

      OpenMode(bitPrice, selectedItem)

      setErrorMessage('')

    }
    else {
      setErrorMessage('Select a coin and input deposit amount')
      OpenMode(errorMessage)
      
    }
  };
 
  


  

  
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
  
  const handleUpload = () => {

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

function OpenMode (numb, items, error) {
  setModalShow(true)
  setItems(items);
  setNumbe(numb);
}
function CloseMode (){
  setUploaded(false)
  setModalShow(false)
  setShowAlert(false)

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
  <button onClick={CloseMode}><GrClose size={32} color="black"/></button>

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
{!errorMessage &&   
<>
 <div className="payout-div">
      <div className="payin-div">
        <p>Your payment method </p>
      </div>
       <div className='payin-para'>  <p>{items}</p>
  </div>
    </div>
    <p> You are to make payment of {numbe} {items} using your selected payment method.</p>
    
    <div className='assetpic'>
      {items === "USDT ERC (20)"? <SiTether size={82} color="#29302D"/>: items === "Ethereum"? <FaEthereum size={82} color="#29302D"/>: items === "Bitcoin"? <SiBitcoinsv size={82} color="#29302D"/> :""}
    </div>
    
    <div className='address-head'>
      <h2>{items} Address: </h2>
      <div >
       <div className='copyaddress'> <h3>{address} </h3>
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
      
      
      <form >
         <input type="file" 
        accept="image/*"
      id="img"
      style={{display:'none'}}
      onChange={handleFileChange1}
    />
      <label className="imge" for="img"> <p>Choose Image</p>  <span>{selectedFileName1} </span></label>
      </form>
     
      
      

    </div>
    
    
    </>
    }
   
{errorMessage && <p>{errorMessage}</p>}
  </div> }
      </Modal.Body>
      <Modal.Footer>
      {!errorMessage &&   
      <button  className={`modbut ${uploaded || uploading || error1? 'disabled' : ''}`} disabled={uploaded || uploading ||error1} onClick={handleUpload}>Submit Payment </button>
      }
      </Modal.Footer>
    </Modal>
  );
}






  return (
    <>
     <MyVerticallyCenteredModal
        show={modalShow}
        onHide={CloseMode}
      />
    <div className="makepay">
      
   

     
    

      <div className='warning'>
      
      <h1> Please only make payments to the wallet address provided to you when you click the *proceed to payment* button
    </h1>  
      </div>
    
    <div className='labeldiv'>
      <form className='labeld' onSubmit={handleButtonClick}>
      <button type="submit">Proceed to Payment</button>
      <div className='amountinput'>
        <p>Amount</p>
      <input
        type="number"
        value={number}
        ref={numberInputRef}
        onChange={(event) => setNumber(parseFloat(event.target.value))}
        step="0.00001"
        min="0"
        placeholder="Enter a deposit amount"
      />
    </div>
    <label>
  <div className="logic">
       <SiTether size={32} color="#29302D"/> <p>USDT ERC (20)</p>
      </div> 
      <div>  
      <input
        
        type="checkbox"
        checked={selectedItem === 'USDT ERC (20)'}
        ref={checkboxRef}
        onChange={() => handleCheckboxChange('USDT ERC (20)')}
      />
      </div> 
    </label>
     </form>

     <form className='labeld ' onSubmit={handleButtonClick2}>
     <button type="submit">Proceed to Payment</button>
     <div className='amountinput'>
     <p>Amount</p>

      <input
        type="number"
        value={ethPrice}
        ref={numberInputRef2}

        onChange={(event) => setEthPrice(parseFloat(event.target.value))}
        step="0.00001"
        min="0"
        placeholder="Enter a deposit amount"
        
      />
    </div>
    <label>
    <div className="logic">
       <FaEthereum size={32} color="#29302D"/> <p>Ethereum</p>
      </div>  
      <div> 
      <input
        type="checkbox"
        ref={checkboxRef2}

        checked={selectedItem === 'Ethereum'}
        onChange={() => handleCheckboxChange('Ethereum')}
      />
     </div> 
    </label>
    </form>

    <form className='labeld' onSubmit={handleButtonClick3}>
    <button type="submit">Proceed to Payment</button>
     <div className='amountinput'>
     <p>Amount</p>

      <input
        type="number"
        value={bitPrice}
        ref={numberInputRef3}

        onChange={(event) => setBitPrice(parseFloat(event.target.value))}
        step="0.000001"
        min="0"
        placeholder="Enter a deposit amount"
      />
    </div>
    <label>
      <div className="logic">
       <SiBitcoinsv size={32} color="#29302D"/> <p>Bitcoin</p>
      </div> 
      <div>
      <input
        ref={checkboxRef3}

        type="checkbox"
        checked={selectedItem === 'Bitcoin'}
        onChange={() => handleCheckboxChange('Bitcoin')}
      />
      </div> 
     
    </label>
      
    </form>
    </div>
 
    
  </div>



</>
  )
}

export default Deposit