'use client'
import { useState, useRef, useEffect } from "react"
import Logo from "@/assets/Logo2.png"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { useUser } from "@/contexts/UserContext"
import axios from "axios"
// Profile Dropdown


export default () => {

    const [menuState, setMenuState] = useState(false)
    const pathname = usePathname();
    const { username, userId, setUsername, setUserId } = useUser();
    const router = useRouter();
    const connectWallet = async () => {
        console.log("object")
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
    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        { title: "About us", path: "/about-us" },
        { title: "Stream", path: "/stream" },
    ]
    return (
        <nav className={`z-50  ${pathname == "/" ? "bg-transparent" : "border-gray-400 border-b bg-black"}  w-full`}>
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl w-full mx-auto md:px-8">
                <div className="flex-none z-50 lg:flex-initial">
                    <Link href="/" >
                        <Image
                            className="z-50 -my-8"
                            src={Logo}
                            width={180}
                            height={100}
                            alt="Logo"
                        />
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={` absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-white text-xl font-mono hover:text-orange-vr">
                                        <Link href={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    {/* <div className=" flex">
                        <button onClick={connectWallet} className="z-50 min-w-28 text-white text-xl ">
                            {userId?username:"Connect Wallet"}
                        </button>
                        
                        
                    </div> */}
                    {userId ? (
                        <div className="z-50 border border-white text-sm font-semibold text-white px-4 py-2 rounded-full ">
                            {userId?.substring(0, 13) +
                                "...." +
                                userId?.substring(
                                    userId?.length - 4,
                                    userId?.length - 1
                                )}{" "}
                        </div>
                    ) : (
                        <button
                            className={
                                "z-50  cursor-pointer text-md font-medium hover:bg-white hover:text-black text-white border border-white px-4 py-2 rounded-full"
                            }
                            onClick={() => connectWallet()}
                        >
                            Connect
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}