'use client'
import { useState, useRef, useEffect } from "react"
import Logo from "@/assets/Logo2.png"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
// Profile Dropdown


export default () => {

    const [menuState, setMenuState] = useState(false)
    const pathname = usePathname();
  // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Home", path: "/" },
        { title: "About us", path: "/about-us" },
        { title: "Stream", path: "/stream" },
    ]
    return (
        <nav className={`z-50  ${pathname=="/"?"bg-transparent":"border-gray-400 border-b bg-black"}  w-full`}>
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl w-full mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="javascript:void(0)">
                        <Image
                            className="-my-8"
                            src={Logo} 
                            width={180} 
                            height={100}
                            alt="Logo"
                        />
                    </a>
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
                    <div className=" flex">
                        <button className="min-w-28">
                            <div className="text-white text-xl ">
                                Connect Wallet
                            </div>
                        </button>
                        
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}