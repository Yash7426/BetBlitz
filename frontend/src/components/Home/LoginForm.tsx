"use client";
import { useUser } from "@/contexts/UserContext";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { ethers, providers } from "ethers";
import axios from "axios";

function LoginForm() {
  const [name, setName] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setUsername, setUserId } = useUser();
  const router = useRouter();

  const handleInputChange = (e: any) => {
    setName(e.target.value);
  };

  const connectWallet = async () => {
    if (localStorage.getItem("user")) {
      const userData = JSON.parse(localStorage.getItem("user")!);
      setUsername(userData.address);
      setUserId(userData._id);
      router.push("/chat");
      return;
    }
      // Requesting access to user's MetaMask accounts
      // @ts-ignore
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      
      // Assuming there's at least one account, get the first one
      const address = accounts[0];

      // Do something with the address, like displaying it
      console.log("Connected account address:", address);
    const response = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + "user/add",
      {
        address,
      }
    );
    console.log(response)
    setUserId(response.data._id);
    setUsername(address as string);
    localStorage.setItem("user", JSON.stringify(response.data));
    // router.push("/chat");
  };

  const onStart = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (name) {
      localStorage.setItem("name", name);
      setUsername(name);
    } else {
    }
    router.push("/chat");
  };
  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={onStart}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            className="px-6 py-6 text-lg text-gray-600 w-80 h-10 bg-gray-100 border-gray-[rgba(0,0,0,.2)] rounded-full focus:outline-none border focus:border-primary focus:bg-gray-50 focus:placeholder-gray-400/60 placeholder:text-base"
            placeholder="Display Name"
            onChange={handleInputChange}
            minLength={3}
            maxLength={20}
            required={true}
          />
        </div>
        <div className="flex  gap-5 items-center">
          <button
            type="submit"
            className="flex  justify-center items-center w-40 btn"
          >
            {isLoading ? (
              <ClipLoader color="white" size={20} />
            ) : (
              "Start Room"
            )}
          </button>
        </div>
      </form>
      <button onClick={connectWallet}>Connect Wallet</button>
    </>
  );
}

export default LoginForm;
