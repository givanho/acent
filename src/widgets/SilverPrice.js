import { Ticker } from "react-ts-tradingview-widgets";



import React from 'react'

const SilverPrice = () => {
  return (
    <Ticker colorTheme="dark" symbols={[
        {
            "description": "Silver",
            "proName": "COMEX:SI2!"
          },
    
      
    ]}
    isTransparent="true"></Ticker>
  )
}

export default SilverPrice