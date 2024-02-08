import React from 'react'
import Table from 'react-bootstrap/Table';
import "./managed.css"
const Managed = () => {
  return (
    <>
    <div className='managed-contain' >
   
    <div className='managed-header'>
    <h1>
     Ascent Investments Ltd. Account manager
      </h1>
      <p>
      Don’t have time to trade or learn how to trade? Our Account Management Service is The Best Profitable Trading Option for you, We can help you to manage your account in the financial MARKET with a simple subscription model.
Terms and Conditions apply
Reach us at contact@ascentinvestmentltd.com for more info.
        </p>
    
      <button type="submit">Subscribe Now</button>
  </div>
  <label>
<div className="logic">
    </div> 
    <div>  
   
    </div> 
  </label>







   </div>
<h2 className="header2"> My Trading Accounts</h2>
  <Table responsive style={{marginBottom:"32px"}}>
  <thead>
    <tr className='table-head'>
      <th>Account ID</th>
      <th>Account Password</th>
      <th>Account Type</th>
      <th>Currency</th>
      <th>Leverage</th>
      <th>Server</th>
      <th>Duration</th>
      <th>Submitted At</th>
      <th>Started At</th>
      <th>Expiring At</th>
      <th>Status</th>
      <th>Action</th>
     
    </tr>
  </thead>
  <tbody>
    <tr >
      <td colSpan="12" style={{ textAlign: 'center', color:"#8492a6", fontWeight:600, fontFamily:"nunito" }}>No data available</td> 
    </tr>
  </tbody>
    
   
</Table>
</>
  )
}

export default Managed