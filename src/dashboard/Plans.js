import React, {useState,useEffect, useRef} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import './plans.css'
const Plans = () => {
  const [selectedItem, setSelectedItem] = useState("Basic Beginner");
  const [amounts, setAmount] = useState("");
  const [sideAmount, setSideAmount] = useState("");
   const amountRef = useRef("");

  const handleChange = (e) => {
    amountRef.current = e.target.value ;
  };
 
  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };
  function AmountInput() {

    return (
      <form className="amountins">
        <input   
        type="number"
       placeholder="enter an amount"
        defaultValue={amountRef.current && amounts}
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
      <Stack direction="horizontal" gap={3}>
         <button className="pl" onClick={()=>setAmount(100)}> 
         <div className="paycoin">
  <div >
<SiTether size={25}color="#29302D"/>
  </div>
  <p> &emsp;USDT</p>
  </div></button>
         <button className="pl" onClick={()=>setAmount(250)}>
         <div  className="paycoin">
  <div >
<FaEthereum size={25}color="#29302D"/>
  </div>
  <p> &emsp;Ethereum</p>
  </div>
         </button>
         <button className="pl" onClick={()=>setAmount(500)}>
         <div  className="paycoin">
  <div >
<SiBitcoinsv size={25}color="#29302D"/>
  </div>
  <p> &emsp;Bitcoin</p>
  </div>
         </button>
       
       </Stack>
      </div>
    );
  }

  

  function RenderSelectedItemsSide() {
     useEffect(() => {
    setSideAmount(prev => prev.amounts || prev.amountRef.current);
  }, [amountRef.current, amounts]);
    
    return (
      <div>
        {selectedItem === "Basic Beginner" && (
          <div>
            <h2>Your Investment Details</h2>
            <h3>Name of Plan &ensp; &emsp; Plan Price</h3>
            <p>{selectedItem} &ensp; &emsp; $500</p>
            <h3>Duration &ensp; &emsp; Profit</h3>
            <p>1 Month &ensp; &emsp; 1.58% daily</p>
            <h3>Minimum Deposit &ensp; &emsp; Maximum Deposit</h3>
            <p>$500 &ensp; &emsp; $5000</p>
            <h3>Minimum Return &ensp; &emsp; Maximum Return</h3>
            <p>2% &ensp; &emsp; 3%</p>
            <hr></hr>
            <h3>Payment Method: &ensp; &emsp; </h3>
            <hr></hr>
            <h2>Amount to Invest: &ensp; &emsp; {amountRef.current? amountRef.current : amounts}</h2>







            {/* <div>
            <div>
<h3>Name of plan</h3>
            </div>
            <div>

            </div>

            </div> */}
          </div>
        )}
        {selectedItem === "Premium" && (
          <p>Render content for Premium</p>
        )}
        {selectedItem === "Pro" && (
          <p>Render content for Pro</p>
        )}
      </div>
    );
  }



  return (
    <>
    
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