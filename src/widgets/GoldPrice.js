import { Ticker } from "react-ts-tradingview-widgets";



import React from 'react'

const GoldPrice = () => {
  return (
    <Ticker colorTheme="dark" symbols={[
      {
        "description": "Gold",
        "proName": "COMEX:GC2!"
      },
    
      
    ]}
    isTransparent="true"></Ticker>
  )
}

export default GoldPrice