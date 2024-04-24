import React from 'react'
import PlaceBetComponent from '@/components/place-bet/place-bet-component'
import { Coin } from '@/components/place-bet/place-bet-component'
const Card = ({amount,title}:{amount:string, title:string}) => {
  return (
    <div className="bg-black-2 min-h-32 min-w-80 rounded-lg p-6 flex flex-col ring-2 shadow-sm shadow-black/15 ring-slate-600  ring-offset-slate-6 00">
      <div className="font-mono">
          <Coin/> {amount}
      </div>
      <div className="text-lg font-mono font-normal mx-2 mt-3">
          {title}
      </div>
    </div>
  )
}
const index = () => {
  return (
    <div className='px-3 pt-3'>
      <PlaceBetComponent />
      <div className=" pb-5 pt-2 px-24 mx-44 flex justify-around h-full  rounded-t-lg ">
          <Card amount={"15"} title={"Total Amount"}/>
          <Card amount={"30"} title={"Winnings"}/>
      </div>  
    </div>
  )
}

export default index
