import React from 'react'
import Navbar from '@/components/navbar'
import { Vortex } from '@/components/ui/vortex'
import Image from 'next/image'
import { TextGenerateEffect } from '@/components/text-generate-effect'
import Logo from "@/assets/Logo2.png";

const Comp = () => {
    return (
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
      </div>
    )
}
const index = () => {
    const words = " Welcome to BetBlitz, where blockchain  technology meets the thrill of boxing matches! Immerse yourself in live streams of intense boxing showdowns, bet on your favorite fighters, collect exclusive NFTs of players and equipment, and compete on our leaderboard for exciting rewards. Join us in revolutionizing sports entertainment!"
    return (
            <div className="h-screen w-screen  dark:bg-black bg-white  flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
            <video
                className="inset-0 absolute scale-y-[1.5] scale-x-150 opacity-30  w-screen h-screen  z-50"
                autoPlay={true}
                loop={true}
                
                muted={true}
            >
                <source src="./bg_video.mp4" type="video/mp4"/>
                <source src="movie.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
            <div className=" w-full z-50">
            <Navbar />

            </div>
            <div className="flex-grow flex z-50 flex-col mt-5 pb-80 items-center justify-center">
                <h2 className="text-white text-8xl font-bold text-center">
                    <Image src={Logo} className="-mb-24" width={500} height={200} alt="logo" />
                </h2>
                <div className="text-gray-800 font-mono text-xl flex flex-col gap-y-3  max-w-6xl  text-center">

                    <TextGenerateEffect words={words} />

                </div>

                <div className="flex justify-center z-50 gap-x-10">
                    <button className="px-4 py-2 mt-10 text-2xl transition duration-200 rounded-lg text-white ">
                        Start Now
                    </button>
                    <button className="px-4 py-2 mt-10 bg-orange-vr text-2xl hover:bg-orange-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                        Connect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index
