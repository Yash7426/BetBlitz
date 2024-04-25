"use client"
import React, { useEffect, useState } from 'react'
import InsideCircle1 from "@/assets/inside-circle.png";
import InsideCircle2 from "@/assets/inside-circle-2.png";
import OuterCircle from "@/assets/outer-circle.png";
import Image from 'next/image'
import CoinSrc from "@/assets/coin2.png";
// import {address,abi} from '@/abi/bet'
import { ethers, providers } from "ethers";
import { abi, address } from '@/abi/bet';
export const Coin = () => {
  return (
    <Image className="inline" src={CoinSrc} alt="coin" width={70} height={70} />
  )
}




const Card = ({ amount, title, withdraw, onclick}: { amount: string, title: string, withdraw?:boolean , onclick?:any}) => {
  
  return (
    <div className="bg-black-2 min-h-32 min-w-80 rounded-lg p-6 flex flex-col ring-2 shadow-sm shadow-black/15 ring-slate-600  ring-offset-slate-6 00">
      <div className="font-mono">
        <Coin /> {amount}
      </div>
      <div className="text-lg font-mono flex justify-between font-normal mx-2 mt-3">
        <span>{title}</span>
       {withdraw && <button onClick={onclick} className="bg-[#E4B726] font-sans text-black font-medium px-2 py-1 ml-2 rounded-lg">Withdraw</button>}
      </div>
    </div>
  )
}
const index = () => {
  const [money, setMoney] = useState<string>("0");
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [amount,setamount]=useState(0)
  const [amount1,setamount1]=useState(0)
  const handlePlayerChange = (event: any) => {
    setSelectedPlayer(event.target.value);
  };

  function listenForTransactionMined(transactionResponse:any, provider:any) {
    try {
        return new Promise((resolve:any, reject) => {
            provider.once(transactionResponse.hash, (transactionReciept:any) => {
                resolve();
            });
        });
    } catch (e) {
        console.log(e);
    }
  }
  async function withdraw() {

    try {
        if (window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();

            // console.log(number)
            // console.log(selectedPlayer)
            const contract = new ethers.Contract(address, abi, signer);
            // console.log(num1)
            const transactionResponse = await contract.settleTeamResultWon();
            await listenForTransactionMined(transactionResponse, provider);
            console.log("Done");
        }
    } catch (e) {
        console.log(e)
    }
}
  async function enter() {
  try {
      if (window.ethereum !== "undefined") {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          let number = 1;
          const contract = new ethers.Contract(address, abi, signer);
          // console.log(num1)
          const transactionResponse = await contract.enter(Number(selectedPlayer), { value: ethers.utils.parseEther(`${money}`) })
          // const transactionResponse = await contract.settleTeamResultWon();
          await listenForTransactionMined(transactionResponse, provider);
          setMoney("0");          
      } else {
      }
  } catch (e) {
      console.log(e)
  }
  }

  async function WinAmount() {
    try {
        if (window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            let number = 1;
            // console.log(number)
            // console.log(selectedPlayer)
            const contract = new ethers.Contract(address, abi, signer);
            // console.log(num1)
            const transactionResponse = await contract.getWinningAmountById()
            setamount(transactionResponse/1000000000000000000);
            // const transactionResponse = await contract.settleTeamResultWon();
            await listenForTransactionMined(transactionResponse, provider);
            console.log("Done");
        } else {
        }
    } catch (e) {
        console.log(e)
    }
    }
  async function TotalAmount() {
    try {
        if (window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            let number = 1;
            // console.log(number)
            // console.log(selectedPlayer)
            const contract = new ethers.Contract(address, abi, signer);
            // console.log(num1)
            const transactionResponse = await contract.getDepositedAmountsById()
            setamount1(transactionResponse/1000000000000000000);
            // const transactionResponse = await contract.settleTeamResultWon();
            await listenForTransactionMined(transactionResponse, provider);
            console.log("Done");
        } else {
        }
    } catch (e) {
        console.log(e)
    }
    }
    useEffect(()=>{
      WinAmount();
      TotalAmount();
    },[])

  return (
    <div className='px-3 pt-3'>

      <div className="flex items-center w-full top-[19rem] justify-center absolute">
        <div className="flex w-full justify-between px-40 items-center space-x-4">
          <div className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-orange-400 h-7 w-7"
              value="1"
              id="player1"
              checked={selectedPlayer === '1'}
              onChange={handlePlayerChange}
            />
            <label htmlFor='player1' className="ml-2 text-3xl font-medium text-gray-200">Player 1</label>
          </div>
          <div className="inline-flex items-center">
            <input
              type="radio"
              id="player2"
              className="form-radio  text-orange-400 h-7 w-7"
              value="2"
              checked={selectedPlayer === '2'}
              onChange={handlePlayerChange}
            />
            <label htmlFor='player2' className="ml-2 text-3xl font-medium text-gray-200">Player 2</label>
          </div>
        </div>

      </div>


      <div className="h-[40rem] w-[40rem] relative mx-auto">
        <Image src={OuterCircle} height={600} width={600} alt="outer-circle" className="absolute z-50" />
        <Image src={InsideCircle1} height={380} width={380} alt="inside-circle-1" className="absolute z-30  left-28 top-28" />
        <Image src={InsideCircle2} height={600} width={600} alt="inside-circle-2" className="absolute  " />
        <button onClick={enter} className="flex align-items absolute top-80 left-52 z-50 font-serif h-12 animate-shimmer items-center justify-center shadow-sm shadow-black  bg-[linear-gradient(110deg,#E4B726,45%,#fff,55%,#E4B726)] bg-[length:200%_100%] px-6 font-medium  text-black transition-colors ">
          DEPOSIT
        </button>
        <div className="absolute text-5xl font-sans font-semibold top-[15rem] left-60 z-50 flex gap-x-4 justify-center">
          <Coin />
          <input type="text" value={money} onChange={(e) => setMoney(e.target.value)} className="w-24 h-14 font-mono  text-4xl bg-transparent  outline-none border-none  " />
        </div>
      </div>

      <div className=" pb-5 pt-2 px-24 mx-44 flex justify-around h-full  rounded-t-lg ">
        <Card amount={amount1.toString()} title={"Total Amount"}/>
        <Card amount={amount.toString()} title={"Winnings"} withdraw={true} onclick={withdraw}/>
      </div>
    </div>
  )
}

export default index
