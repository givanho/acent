import React, {useState, useEffect} from 'react'
import { TbCoins } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";
import { Outlet, NavLink, Link ,  useLocation} from "react-router-dom";
import Plans from '../dashboard/Plans';
import { UserAuth } from '../context/context'
import Table from 'react-bootstrap/Table';
import {
  orderBy,
  collection,
  getDocs,
  doc,
  onSnapshot,
  updateDoc,
  arrayRemove,
  arrayUnion,
  query,
  deleteDoc ,
  where ,
  setDoc, 
  getDoc,
  serverTimestamp
  
} from "firebase/firestore";
import { db, storage } from '../context/firebase';


import './dash.css'
const Dash = () => {
  const [showPlans, setShowPlans] = useState(false);
  const { user, logout} = UserAuth();
  const [datas, setDatas] = useState(null)
  const [activePlans, setActivePlans] = useState(0)
  const createdAtValues = [];
  const [interest, setInterest] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [totalAmount, setTotalAmount] = useState("")
  const [accountBalance, setAccountBalance] = useState("")
  const currentDate = new Date();

    const data = [
      { id: "GyFpl", name: '$280', age: "4 feb 2024" },
      { id: "LoBBD", name: '$496', age: "4 feb 2024"  },
      { id: "OHtse", name: '$125', age: "3 feb 2024"  }
      ];

      function HandlePlan(){
      setShowPlans(true)
      }


      useEffect(() => {
        if (user) {
          
    
          const q = query(collection(db, 'users'), where('userID', '==', user.uid));
    
          //The unsubscribe function returned by onSnapshot is used to 
          //remove the listener when the component unmounts, preventing memory leaks.
    
          const unsubscribe = onSnapshot(q, (querySnapshot) => {
            if (!querySnapshot.empty) {
              const doc = querySnapshot.docs[0];
              
              setDatas(doc.data());
              
            }
            
      datas?.funded.forEach(item => {
        if (item.hasOwnProperty('createdAt')) {
          createdAtValues.push(item.createdAt);
        }
      });
      createdAtValues.forEach(createdAt => {
        setInterest( Math.ceil((new Date(currentDate) - new Date(createdAt)) / (1000 * 60 * 60 * 24)));
        setActivePlans(Math.ceil((new Date(currentDate) - new Date(createdAt))/ (1000 * 60 * 60 * 24)) )
       
      });
          });
          setTotalAmount(datas?.funded?.reduce((total, item) => total + parseFloat(item.amount), 0))
          setAccountBalance(datas?.funded?.reduce((total, item) => total + parseFloat(item.amount), 0 ))
          setInterestRate(datas?.funded?.reduce((total, item) => {
            const amount = parseFloat(item.amount);
            let multiplier = 0.03; // Default multiplier for amounts less than 5
        
            if (amount >= 5000 && amount < 10000) {
              multiplier = 0.1;
            } else if (amount >= 10000) {
              
              multiplier = 0.3;
              if (interest > 14){
                setInterest(14)
              }

            }
        
            return total + (amount * (interest * multiplier));
          }, 0).toFixed(2))
          return () => {
            unsubscribe();
          };
        }
      }, [datas?.funded, user, totalAmount, interest, currentDate]);

  return (
    <>
    
    



    <div className='dash-container'>
        <h1 className='nunito'>Account Summary</h1>
        <div className='dash-out-flex'>
<div className='dash-in-flex' >
<div >
    <p className='nunito'>Account Ballance</p>
   {accountBalance ? <h2 className='nunito'>$ {(Number(accountBalance) + Number(interestRate)).toFixed(2)}</h2>
   :
   <h2 className='nunito'>$ 0.00</h2>
  } 
</div>
<div className='dash-icon'>
<TbCoins color='#fff' size={32}/>
</div>
</div>


<div className='dash-in-flex' >
<div >
    <p className='nunito'>Total Profit</p>
   {
    datas?.funded ? 
    <h2 className='nunito'>
  $ {interestRate}
</h2>
:
<h2 className='nunito'>$ 0.00 </h2>
   }

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
    {datas?.funded ? (
  <div>
    {/* Map through each item in the funded array */}
    
    {/* Calculate the total profit */}
    <h2 className="nunito">
      $ {datas?.funded?.reduce((total, item) => total + parseFloat(item.amount), 0 )}
    </h2>
  </div>
) :     <h2 className='nunito'>$ 0.00</h2>
}
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
      {datas?.funded ? 
      <h1 className='nunito'>Active Plan(s) ({[...new Set(datas?.funded?.map(item => item.plan))].length})</h1>
      :
      <h1 className='nunito'>Active Plan(s) (0)</h1>
      }
        <div className='dash-out-flex'>
<div className='dash-in-single' >

{
  datas?.funded ? (
    [...new Set(datas?.funded?.map(item => item.plan))].map((plan, index) => (
      
      <div key={index}>
        {/* Render each unique plan */}
        <h2   className="nunito" style={{fontSize:'16px'}}> {index + 1} {plan}</h2>
      </div>
    ))
  ) : (
    showPlans ? (
      <div>
      <Plans />
      </div>
    ) : (
      <div>
        <p className='nunito'>You do not have an active investment plan at the moment.</p>
        <button className='but nunito' onClick={HandlePlan}>Buy a Plan</button>
      </div>
    )
  )
}





</div>

        </div>
    </div>


    <div className='dash-container'>
        <h1 className='nunito'>Your recent transactions (0)</h1>
        <div className='dash-out-flex'>
<div className='dash-in-single' >


    <Table  className='table-head'  style={{marginBottom:"32px", width:"100%"}} >
  <thead>
    <tr className='table-head'>
      <th>#</th>
      <th>Date</th>
      <th>Type</th>
      <th>Amount</th>
     
     
    </tr>
  </thead>
  <tbody className='tbod'>
    {datas?.funded?.map((user, index) => (
      <tr  className='table-head' key={index}>
      <td>{index}</td>
<td>
{datas?.funded ?<div >
      {datas?.funded?.map((item, index) => (
        <div key={index}>
          {/* Render each item in the array */}
          <p style={{ fontSize: '13px', fontFamily: "nunito",marginBottom:'10px' }}> {item.createdAt} </p>
        </div>
      ))}
    </div> : "" }
            
 
</td>

<td>

{datas?.funded ?<div >
      {datas?.funded?.map((item, index) => (
      
<div key={index} >
     <p style={{ fontSize: '13px', fontFamily: "nunito",marginBottom:'10px' }}>
        $ {item.plan}
     </p>
  
        </div>
     
      ))}
    </div> : "" }

    
</td>



<td>

{datas?.funded ?<div >
      {datas?.funded?.map((item, index) => (
      
<div key={index} >
     <p style={{ fontSize: '13px', fontFamily: "nunito",marginBottom:'10px' }}>
        $ {item.amount}
     </p>
  
        </div>
     
      ))}
    </div> : "" }

    
</td>

           


            




          
        
          
              
            
      
        {/* Render other user attributes in corresponding columns */}
      </tr>
    ))}
  </tbody>
    
   
</Table>





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

