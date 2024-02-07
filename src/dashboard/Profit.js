import React from 'react'
import './profit.css'
const Profit = () => {
  // const data = [
  //   { id: "GyFpl", name: '$280', age: "4 feb 2024" },
  //   { id: "LoBBD", name: '$496', age: "4 feb 2024"  },
  //   { id: "OHtse", name: '$125', age: "3 feb 2024"  }
  // ];
  return (
    <div className='dash-in-single' >
        <h1 className='nunito'>Your Investments Profit Breakdown</h1>

<table>
      <thead >
        <tr style={{textAlign:'center'}}>
          <th style={{width:'25%'}}>Plan</th>
          <th style={{width:'25%'}}>Amount</th>
          <th style={{width:'25%'}}>Type</th>
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
  
  )
}

export default Profit