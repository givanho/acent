import React, {useState, useRef ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import './deposit.css'
import Modal from 'react-modal';
import { GrClose } from "react-icons/gr";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Payment from './Payment'
import { FaRegCopy } from "react-icons/fa";
import ReactModal from 'react-modal';

// Set global style override for ReactModal
const Deposit = () => {
ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  const [selectedItem, setSelectedItem] = useState("");
  const [number, setNumber] = useState('');
  const [numbe, setNumbe] = useState('');
  const [items, setItems] = useState('');
  const [ethPrice, setEthPrice] = useState('');
  const [bitPrice, setBitPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessag, setErrorMessag] = useState('');
  const [copied, setCopied] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

const address1 = "gdjdgXh urudkd sgsugdu"
const address2 = "2dhdgbs suhdis siojioo"
const address3 = "1235448887552277888"
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
    openModal(errorMessage);
  
  return null
}
else{


    // Check if the references are not null
    if (numberInputRef.current && checkboxRef.current) {
      // Your logic here
  
      setNumber(numberInputRef.current.value);
      setSelectedItem('USDT ERC (20)');
      openModal(number, selectedItem);
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
      openModal(ethPrice, selectedItem);
    setErrorMessage('')


    }
    else {
      setErrorMessage('Select a coin and input deposit amount')
      openModal(errorMessage);

    }
  };
  
  
  const handleButtonClick3 = (event) => {
    event.preventDefault();

    if (numberInputRef3.current.value && checkboxRef2.current) {
      setBitPrice(numberInputRef3.current.value);
      setSelectedItem('Bitcoin');
      openModal(bitPrice, selectedItem);
      setErrorMessage('')

    }
    else {
      setErrorMessage('Select a coin and input deposit amount')
      openModal(errorMessage);
      
    }
  };
 
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius:'15px',
      width:"50%"

    },
  };
  const customStyles2 = {
    content: {
  
      width:"100%"

    },
  };


function openModal(numb, item, error) {
    setIsOpen(true);
  setItems(item);
    setNumbe(numb);
    setErrorMessag(error)
  }

  

  function closeModal() {
    setIsOpen(false);
  }

  const handleCopy = () => {
    // Text to be copied to the clipboard

    // Attempt to copy the text to the clipboard
    navigator.clipboard.writeText(address1)
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
  


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  return (
    <>
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
        step="0.00022"
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
        step="0.000023"
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


<div style={{width:"100%", marginInline:"auto", display:"flex", justifyContent:'center',flexDirection:"row"}}>

<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={screenWidth < 768 ? customStyles2: customStyles}
  contentLabel="Example Modal"
>

  <button onClick={closeModal}><GrClose size={32} color="black"/></button>
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
       <div className='copyaddress'> <h3>{address1} </h3>
        <button onClick={handleCopy}>
        <FaRegCopy color='gray' style={{marginLeft:"18px"}}/>
        </button>
      </div>
     
      {/* Bootstrap Alert */}
      <Alert show={showAlert} variant="success">
        Link has been copied!
      </Alert>
      </div>

    </div>

    <div className='address-head'>
      <h2>Upload Payment proof after payment. </h2>
      
      
      <input type="file" 
      placeholder='No file Chosen' />
     
      
      

    </div>
    
    <button className='modbut'> Submit Payment</button>
    </>
    }
    {!errorMessage && <div>  <p>{items}</p>
  <p>{numbe}</p> </div>}
{errorMessage && <p>{errorMessage}</p>}
  </div>
 
</Modal>
</div>
</>
  )
}

export default Deposit