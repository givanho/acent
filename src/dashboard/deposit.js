import React, {useState} from 'react'
import { SiTether } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";
import './deposit.css'
const Deposit = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleCheckboxChange = (value) => {
    setSelectedItem(value);
  };
  const handleButtonClick = () => {
    // Handle button click action here
    console.log("Button clicked!");
  };
  return (
    <div className="makepay">
    Please only make payments to the wallet address provided to you when you click the *proceed to payment* button<h1>
    </h1>
    <label>
  <div className="logic">
       <SiTether/> <p>USDT ERC (20)</p>
      </div>    
      <input
        type="checkbox"
        checked={selectedItem === 'item1'}
        onChange={() => handleCheckboxChange('item1')}
      />
      
    </label>
    <label>
    <div className="logic">
       <FaEthereum/> <p>Ethereum</p>
      </div>    
      <input
        type="checkbox"
        checked={selectedItem === 'item2'}
        onChange={() => handleCheckboxChange('item2')}
      />
     
    </label>
    <div className="logic">
       <SiBitcoinsv/> <p>Bitcoin</p>
      </div>  
    <label>
      <input
        type="checkbox"
        checked={selectedItem === 'item3'}
        onChange={() => handleCheckboxChange('item3')}
      />
     
    </label>
    <button disabled={!selectedItem} onClick={handleButtonClick}>Proceed to Payment</button>
  </div>
  )
}

export default Deposit