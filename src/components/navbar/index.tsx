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
        { title: "Connect", path: "/connect" },
    ]
    return (
        <nav className={`  ${pathname=="/"?"bg-transparent":"border-gray-400 border-b bg-black-3"}  w-full`}>
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
                                    <li key={idx} className="text-white hover:text-orange-vr">
                                        <Link href={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        
                    </div>
                    <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
                        <form className="flex items-center space-x-2 border rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className={`w-full ${pathname=="/"?"bg-black":"bg-black-3"} outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto`}
                                type="text"
                                placeholder="Search"
                            />
                        </form>
                        
                        <button 
                            className="outline-none text-gray-400 block lg:hidden"
                            onClick={() => setMenuState(!menuState)}
                        >
                            {
                                menuState ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}