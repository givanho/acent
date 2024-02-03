import React from 'react'
import { TbCoins } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";


import './dash.css'
const Dash = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Bob Johnson', age: 35 }
      ];
  return (
    <> 
    <div className='dash-container'>
        <h1 className='nunito'>Account Summary</h1>
        <div className='dash-out-flex'>
<div className='dash-in-flex' >
<div >
    <p className='nunito'>Account Ballance</p>
    <h2 className='nunito'>$ 0.00</h2>
</div>
<div className='dash-icon'>
<TbCoins color='#fff' size={32}/>
</div>
</div>


<div className='dash-in-flex' >
<div >
    <p className='nunito'>Total Profit</p>
    <h2 className='nunito'>$ 0.00</h2>
</div>
<div className='dash-icon'>
<FaChartLine color='#fff' size={32}/>
</div>
</div>


<div className='dash-in-flex' >
<div >
    <p className='nunito'>Total Bonus</p>
    <h2 className='nunito'>$ 0.00</h2>
</div>
<div className='dash-icon'>
<FiGift color='#fff' size={32}/>
</div>
</div>


<div className='dash-in-flex' >
<div >
    <p className='nunito'>Referal Bonus</p>
    <h2 className='nunito'>$ 0.00</h2>
</div>
<div className='dash-icon'>
<FiGift color='#fff' size={32}/>
</div>
</div>

<div className='dash-in-flex' >
<div >
    <p className='nunito'>Total Deposits</p>
    <h2 className='nunito'>$ 0.00</h2>
</div>
<div className='dash-icon'>
<FaArrowDownShortWide color='#fff' size={32}/>
</div>
</div>

<div className='dash-in-flex' >
<div >
    <p className='nunito'>Total Withdrawals</p>
    <h2 className='nunito'>$ 0.00</h2>
</div>
<div className='dash-icon'>
<FaArrowUpWideShort color='#fff' size={32}/>
</div>
</div>



        </div>
    </div>





    <div className='dash-container'>
        <h1 className='nunito'>Active Plan(s) (0)</h1>
        <div className='dash-out-flex'>
<div className='dash-in-single' >
 <p className='nunito'>You do not have an active investment plan at the moment.</p>
 <button className='but nunito'>Buy a Plan</button>
</div>

        </div>
    </div>


    <div className='dash-container'>
        <h1 className='nunito'>Your recent transactions (0)</h1>
        <div className='dash-out-flex'>
<div className='dash-in-single' >
<table>
      <thead >
        <tr>
          <th>Date</th>
          <th>Type</th>
          <th>Amount</th>
        </tr>
      </thead>
      {/* <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody> */}
      <span className='nunito' style={{fontSize:"12px", marginTop:"20px", textAlign:'center'}}>No record yet</span>
    </table>
</div>

        </div>
    </div>

    <div className='dash-container'>
        <h1 className='nunito'>Recent withdrawals</h1>
        <div className='dash-out-flex'>
<div className='dash-in-single' >
<table>
      <thead >
        <tr>
          <th style={{width:'15%'}}>Transaction ID</th>
          <th style={{width:'25%'}}>Customer ID</th>
          <th style={{width:'25%'}}>Amount</th>
          <th style={{width:'35%'}}>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td style={{width:'15%'}}>{item.id}</td>
            <td style={{width:'25%'}}>{item.id}</td>
            <td style={{width:'25%'}}>{item.name}</td>
            <td style={{width:'35%'}}>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
</div>

        </div>
    </div>


    <div className='dash-container'>
        <h1 className='nunito'>Live Market Data</h1>
        <div className='dash-out-flex'>
<div className='dash-in-single' >
  <div style={{width:'100%'}}>
  <AdvancedRealTimeChart colorTheme="light" width="100%" height={400} ></AdvancedRealTimeChart>

  </div>
 
</div>

        </div>
    </div>

    <div className='dash-container'>
        <h1 className='nunito'>Crypto Market Fundamental Data</h1>
        <div className='dash-out-flex'>
<div className='dash-in-single' >
<CryptoCurrencyMarket colorTheme="light" width="100%" height={400}></CryptoCurrencyMarket>

 
</div>

        </div>
    </div>

    
    </>
  )
}

export default Dash

