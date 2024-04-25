import Image from "next/image";
import CoinSrc from "@/assets/coin.png";
import Snow from "@/assets/snow.svg";
import {address,abi} from '@/abi/bet'
import { ethers, providers } from "ethers";
import { useEffect,useState } from "react";

// @ts-ignore
declare var window:any;

function listenForTransactionMined(transactionResponse:any, provider:any) {
    try {
        //listen for this transaction to be finished
        return new Promise((resolve:any, reject) => {
            provider.once(transactionResponse.hash, (transactionReciept:any) => {
                resolve();
            });
        });
    } catch (e) {
        console.log(e);
    }
  }
export const Coin = () =>{
    return (
        <Image className="inline" src={CoinSrc} alt="coin" width={40} height={40} />
    )
}

export default () => {
    
    const tableItems = [
        {
            UserId: "dszld19281slz0_eq0e8we",
            bet: "30",
            payout: "75"
        },
    ];
    const hexToDecimal = (hexString:any) => parseInt(hexString);
    const [arr,setarr]=useState<any>([]);
    const [arr1,setarr1]=useState<any>([]);
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
                const transactionResponse = await contract.getAllDepositedAmounts()
                setarr(transactionResponse);
                // const transactionResponse = await contract.settleTeamResultWon();
                await listenForTransactionMined(transactionResponse, provider);
                console.log("Done");
            } else {
            }
        } catch (e) {
            console.log(e)
        }
    }
    async function WinningAmount() {
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
                const transactionResponse = await contract.getAllWinningAmounts()
                setarr1(transactionResponse);
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
        TotalAmount()
        WinningAmount()
    },[])
    console.log("arr->", arr)
    console.log("arr1->", arr1)
    return (
        <div className="w-full font-mono   relative mx-auto">
            <div className="py-6 relative shadow-sm  rounded-lg overflow-x-auto">
                <div className="text-5xl mb-5  text-white font-mono mx-6">
                📶 Leaderboard
                </div>
                <table className="w-full table-auto  text-sm text-left">
                    <thead className=" text-xl pt-3 text-white font-medium">
                        <tr>
                            <th className="pb-3 bg-gray-900 pt-6 px-6">User Id</th>
                            <th className="pb-3 bg-gray-900 pt-6 px-6 ">
                                Bet Amount
                            </th>
                            <th className="pb-3 bg-gray-900 pt-6 px-6">Returns</th>
                            <th className="pb-3 bg-gray-900  pt-6 px-6">
                            Payout
                            </th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 ">
                        {
                           arr && arr1 && arr.length>0 && arr1.length && arr[0].length>0 && arr[1].map((item:any, idx:any) => {
                               const depositAmount = hexToDecimal(item._hex)/10**18;
                               const winningsAmount = hexToDecimal(arr1[1][idx]._hex);
                                const multiplier =  ((winningsAmount) / depositAmount).toFixed(2);
                                console.log(item, depositAmount, winningsAmount)
                                return (
                                <tr key={idx} className={(idx%2==0?"":"bg-gray-900")}>
                                    <td className="flex items-center gap-x-3  py-4 px-6 whitespace-nowrap">
                                       <div className="mt-1 text-gray-200">
                                        {/* {item.UserId} */}
                                        {arr[0][idx]}
                                       </div>
                                    </td>
                                    <td className="px-6 py-4 text-lg font-bold font-mono text-white   whitespace-nowrap"> <Coin/> {depositAmount}</td>
                                    <td className="px-6 py-4 font-bold text-lg font-mono text-gray-400 whitespace-nowrap">{multiplier}x</td>
                                    <td className="px-6 py-4 text-cyan-500 font-mono text-lg  font-bold  whitespace-nowrap"><Coin/> {winningsAmount}</td>

                                </tr>)
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}