import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import NFT from "@/assets/nft.jpeg"
import {address1 as address} from '@/abi/bet/nft';
import { ImSpinner10 } from "react-icons/im";
import Image from 'next/image';
export default function MyModal({ tokenId, onclick}:{ tokenId:any,onclick:any}) {
  let [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  
  function closeModal() {
    setIsOpen(false)
  }

  async function openModal() {
    setIsLoading(true);
    await onclick();
    setIsLoading(false);  
    setIsOpen(true)
  }

  return (
    <>
      <div className=" z-50 inset-0 flex items-center text-white">
      
        <button type="button" onClick={openModal} className="bg-[#E4B726] flex justify-center min-w-16 items-center  text-xl font-sans text-black font-medium px-2 py-1 ml-2 rounded-lg">
        {isLoading ? <ImSpinner10 className="animate-spin"/> :"Claim"}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative  z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md  pb-10  transform  rounded-2xl bg-black-3 px-6 pt-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium mb-5 text-center border-b border-gray-800 pb-3 leading-6 text-white"
                  >
                    Your Reward
                  </Dialog.Title>
                  <div className=" w-full flex flex-col justify-center">
                    <Image src={NFT} height={200} width={400} alt="reward" className=" z-50" />
                  </div>
                    <div className="flex flex-col mt-5">
                        <div className="text-white text-xl">Contract Address:</div>
                        <div className="text-gray-300 text-sm">{address}</div>
                    </div>
                    <div className="flex flex-col mt-5">
                    <div className="text-white text-xl">Token id:</div>
                        <div className="text-gray-300 text-sm">{tokenId}</div>
                    </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
