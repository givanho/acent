import { Ticker } from "react-ts-tradingview-widgets";



import React from 'react'

const PlatinumPrice = () => {
  return (
    <Ticker colorTheme="dark" symbols={[
        {
            "description": "Platinum",
            "proName": "NYMEX:PL1!"
          }
    
      
    ]}
    isTransparent="true"></Ticker>
  )
}

export default PlatinumPrice