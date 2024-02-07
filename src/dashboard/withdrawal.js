import React , {useState} from 'react'
import './withdrawal.css'
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import Modal from 'react-bootstrap/Modal';
import { GrClose } from "react-icons/gr";


const Withdrawal = () => {
  const [address, setAddress] = useState("")
  const [modalShow, setModalShow] = React.useState(false);




  function OpenMode (address) {
   
    setAddress(address);
     setModalShow(true)
  }

  function SignupForm() {
    const [wallet, setWallet] = useState('');
    const [amount, setAmount] = useState('');
    return (
      <form>
        <p className='withdrawall'>
          {address} Address:
        </p>
       
        <div  style={{width:"100%"}}>
        <input 
        className='withdrawal'
        value={wallet} onChange={e => setWallet(e.target.value)}
        placeholder="Paste yuor wallet address"
        />
        </div>
        <p className='withdrawall'>
        Enter withdrawal Amount($)
        </p>
        <input 
        className='withdrawal'

        value={amount}
        type="number"
         onChange={e => setAmount(e.target.value)}
        placeholder="Enter a withdrawal amount"
        />
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
    <button onClick={() => setModalShow(false)}><GrClose size={32} color="black"/></button>
  
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <div className='modal-content'>
  
  <>
   <div className="payout-div">
        <div className="payin-div">
          <p>Your withdrawal method </p>
        </div>
         <div className='payin-para'>  <p>{address}</p>
    </div>
      </div>
      <p> You are to initiate a  {address}  withdrawal using your selected payment method.</p>
      
      <div className='assetpic'>
        {address === "USDT ERC (20)"? <SiTether size={82} color="#29302D"/>: address === "Ethereum"? <FaEthereum size={82} color="#29302D"/>: address === "Bitcoin"? <SiBitcoinsv size={82} color="#29302D"/> :""}
      </div>
      
      <div className='address-head'>
       
       
        <div  >
        <SignupForm />
    
        </div>
  
      </div>
  
     
      
      
      </>
      
    
  
    </div>
        </Modal.Body>
        <Modal.Footer>
       
        <button className='modbut'> Submit Payment</button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (


    
    <div className='maincard-div'>

<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <div className='multi-card'>
      
          <div className='single-card'>

          <div className='card-coin'>
          <h2>USDT ERC (20)</h2>
          <SiTether size={100} color="#fff" style={{marginInline:'auto', marginTop:'60px'}}/> 
          </div>

          <div className="card-con">
            <p>Minimum withdrawable amount</p>
            <h1>$100</h1>
            <p>Maximum withdrawable amount</p>
            <h1>$10,000,000,000</h1>
            <p>Charge Type: <span style={{fontWeight:700, paddingLeft:"30px"}}> fixed </span></p>
            <p>Charges Amount: <span style={{fontWeight:700, paddingLeft:"30px"}}>$0</span></p>
            <p>Duration: <span style={{fontWeight:700, paddingLeft:"30px"}}> 2 Days </span></p>

            <button onClick={() => OpenMode("USDT ERC (20)")}>Request Withdrawal</button>

          </div>

          </div>

          <div className='single-card'>

<div className='card-coin'>
<h2>Ethereum</h2>
<FaEthereum size={100} color="#fff" style={{marginInline:'auto', marginTop:'60px'}}/> 
</div>

<div className="card-con">
  <p>Minimum withdrawable amount</p>
  <h1>$500</h1>
  <p>Maximum withdrawable amount</p>
  <h1>$1,000,000</h1>
  <p>Charge Type: <span style={{fontWeight:700, paddingLeft:"30px"}}> fixed </span></p>
  <p>Charges Amount: <span style={{fontWeight:700, paddingLeft:"30px"}}>$0</span></p>
  <p>Duration: <span style={{fontWeight:700, paddingLeft:"30px"}}> Instant </span></p>

  <button onClick={() => OpenMode("Ethereum")}>Request Withdrawal</button>

</div>

</div>

<div className='single-card'>

<div className='card-coin'>
<h2>Bitcoin</h2>
<SiBitcoinsv size={100} color="#fff" style={{marginInline:'auto', marginTop:'60px'}}/> 
</div>

<div className="card-con">
  <p>Minimum withdrawable amount</p>
  <h1>$50</h1>
  <p>Maximum withdrawable amount</p>
  <h1>$100,000</h1>
  <p>Charge Type: <span style={{fontWeight:700, paddingLeft:"30px"}}> fixed </span></p>
  <p>Charges Amount: <span style={{fontWeight:700, paddingLeft:"30px"}}>$0</span></p>
  <p>Duration: <span style={{fontWeight:700, paddingLeft:"30px"}}> Instant </span></p>

  <button onClick={() => OpenMode("Bitcoin")}>Request Withdrawal</button>

</div>

</div>





    </div>








    </div>
  )
}

export default Withdrawal