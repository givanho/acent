import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";
const Gold = () => {
   
  return (
    <>
    <TickerTape colorTheme="dark" symbols={[
    {
      "description": "Gold",
      "proName": "COMEX:GC2!"
    },
    {
      "description": "Silver",
      "proName": "COMEX:SI2!"
    },
   
    {
      "description": "Palladium",
      "proName": "NYMEX:PA1!"
    },
    {
      "description": "Copper",
      "proName": "COMEX:HG1!"
    },
    {
      "description": "Platinum",
      "proName": "NYMEX:PL1!"
    }
  ]}></TickerTape>
    </>
  )
}

export default Gold