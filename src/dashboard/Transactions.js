import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { RiTokenSwapLine } from "react-icons/ri";
import { TbCoins } from "react-icons/tb";
import './transactions.css'

const Transactions = () => {
  return (
    <Tabs
    defaultActiveKey="Deposit"
    id="justify-tab-example"
    className="mb-3"
    justify
    
  >
    <Tab eventKey="Deposit" title={<> <div 
    style={{marginBlock:"10px",display:"flex", flexDirection:"row",
     alignItems:"center",justifyContent:"space-between", width:"50%"}}>
      <FaArrowDownShortWide size={24}  /> Deposit 
      </div></>} >
      <div className='dash-in-single' >
      

<table>
      <thead >
        <tr style={{textAlign:'center'}}>
          <th style={{width:'25%'}}>Amount</th>
          <th style={{width:'25%'}}>Payment</th>
          <th style={{width:'25%'}}>Status</th>
          <th style={{width:'25%'}}>Date Created</th>
        </tr>
      </thead>
      <tbody>
        {/* {data.map(item => (
          <tr key={item.id}>
            <td style={{width:'15%'}}>{item.id}</td>
            <td style={{width:'25%'}}>{item.id}</td>
            <td style={{width:'25%'}}>{item.name}</td>
            <td style={{width:'35%'}}>{item.age}</td>
          </tr>
        ))} */}
      <span className='nunito' style={{fontSize:"12px", marginTop:"20px", textAlign:'center'}}>No record yet</span>

      </tbody>
    </table>
</div>
    </Tab>
    <Tab eventKey="Withdrawal" 
    title={<> <div 
      style={{marginBlock:"10px",display:"flex", flexDirection:"row",
       alignItems:"center",justifyContent:"space-between", width:"50%"}}>
        <FaArrowUpWideShort size={24}  /> Withdrawal 
        </div></>}
    
    >
     
     <div className='dash-in-single' >
      

      <table>
            <thead >
              <tr style={{textAlign:'center'}}>
                <th style={{width:'20%'}}>Amount Requested</th>
                <th style={{width:'20%'}}>Amount + charges</th>
                <th style={{width:'20%'}}> Receiving mode</th>
                <th style={{width:'20%'}}>Status</th>
                <th style={{width:'20%'}}>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map(item => (
                <tr key={item.id}>
                  <td style={{width:'15%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.name}</td>
                  <td style={{width:'35%'}}>{item.age}</td>
                </tr>
              ))} */}
            <span className='nunito' style={{fontSize:"12px", marginTop:"20px", textAlign:'center'}}>No record yet</span>
      
            </tbody>
          </table>
      </div>


    </Tab>
    <Tab eventKey="Other" 
    title={<> <div 
      style={{marginBlock:"10px",display:"flex", flexDirection:"row",
       alignItems:"center",justifyContent:"space-between", width:"50%"}}>
        <TbCoins size={24}  /> Other 
        </div></>}
    >
     
     <div className='dash-in-single' >
      

      <table>
            <thead >
              <tr style={{textAlign:'center'}}>
                <th style={{width:'25%'}}>Amount</th>
                <th style={{width:'25%'}}>Type</th>
                <th style={{width:'25%'}}>Plan / Naration</th>
                <th style={{width:'25%'}}>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map(item => (
                <tr key={item.id}>
                  <td style={{width:'15%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.id}</td>
                  <td style={{width:'25%'}}>{item.name}</td>
                  <td style={{width:'35%'}}>{item.age}</td>
                </tr>
              ))} */}
            <span className='nunito' style={{fontSize:"12px", marginTop:"20px", textAlign:'center'}}>No record yet</span>
      
            </tbody>
          </table>
      </div>


    </Tab>
    
  </Tabs>
  )
}

export default Transactions