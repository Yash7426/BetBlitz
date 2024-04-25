"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import Leaderboard from "../leaderboard";
import PlaceBet from "@/components/place-bet";
export default function TabsDemo() {
  const tabs = [
    {
      title: "Leaderboard",
      value: "Leaderbaord",
      content: (
        <div className="w-full overflow-x-hidden scrollStyle2  relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black-2 to-black-3">
          <Leaderboard />
        </div>
      ),
    },
    {
      title: "Place bet",
      value: "Place Bet",
      content: (
        <div className="w-full overflow-x-hidden scrollStyle2 relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-black-2 to-black-3">
          <PlaceBet />
        </div>
      ),
    },
    
  ];

  return (
    <div className="h-[55rem] min-h-[55rem] [perspective:1000px] relative  flex flex-col  mx-auto px-5 w-full  items-start justify-start my-2">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
