import React from 'react'

const History = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 35 }
  ];
  return (
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
  )
}

export default History