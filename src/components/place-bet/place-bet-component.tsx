import React from 'react'
import InsideCircle1 from "@/assets/inside-circle.png";
import InsideCircle2 from "@/assets/inside-circle-2.png"; 
import OuterCircle from "@/assets/outer-circle.png";
import Image from 'next/image'
import CoinSrc from "@/assets/coin2.png";

const BetButton = () => {
  return (
    <button className="flex align-items absolute top-80 left-52 z-50 font-serif h-12 animate-shimmer items-center justify-center shadow-sm shadow-black  bg-[linear-gradient(110deg,#E4B726,45%,#fff,55%,#E4B726)] bg-[length:200%_100%] px-6 font-medium  text-black transition-colors ">
        DEPOSIT
    </button>
  )
}
export const Coin = () =>{
  return (
      <Image className="inline" src={CoinSrc} alt="coin" width={70} height={70} />
  )
}
const Amount = ({amount=0}) => {
  return (
    <div className="absolute text-5xl font-sans font-semibold top-[15rem] left-60 z-50 flex gap-x-4 justify-center">
      <Coin/> {amount}
    </div>
  )
}



const Index = () => {
  return (
    <div className="h-[40rem] w-[40rem] relative mx-auto">
      <Image src={OuterCircle} height={600} width={600} alt="outer-circle" className="absolute z-50" />
      <Image src={InsideCircle1} height={380  } width={380} alt="inside-circle-1" className="absolute z-30  left-28 top-28" />
      <Image src={InsideCircle2} height={600} width={600} alt="inside-circle-2" className="absolute  " />
      <BetButton/>
      <Amount/>
    </div>
  )
}

export default Index
