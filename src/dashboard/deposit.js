import React, {useState, useRef ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import './deposit.css'
import { GrClose } from "react-icons/gr";
import Alert from 'react-bootstrap/Alert';

import { FaRegCopy } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';

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
     setAddress("gdjdgXh urudkd sgsugdu") 
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
     setAddress("gdjdgXh urudkd sgsugdu") 

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
     setAddress("gdjdgXh urudkd sgsugdu") 

      OpenMode(bitPrice, selectedItem)

      setErrorMessage('')

    }
    else {
      setErrorMessage('Select a coin and input deposit amount')
      OpenMode(errorMessage)
      
    }
  };
 
  


  

  
  const handleCopy = () => {
    // Text to be copied to the clipboard

    // Attempt to copy the text to the clipboard
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
  



function OpenMode (numb, items, error) {
  setModalShow(true)
  setItems(items);
  setNumbe(numb);
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
      
      
      <input type="file" 
      placeholder='No file Chosen' />
     
      
      

    </div>
    
    
    </>
    }
    {!errorMessage && <div>  <p>{items}</p>
  <p>{numbe}</p> </div>}
{errorMessage && <p>{errorMessage}</p>}
  </div>
      </Modal.Body>
      <Modal.Footer>
      {!errorMessage &&   
      <button className='modbut'> Submit Payment</button>}
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
        step="1"
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