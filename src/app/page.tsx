import Image from "next/image";
import ChatSidebar  from "@/components/chat-sidebar"
import Navbar from "@/components/navbar";
import { Vortex } from "@/components/ui/vortex";
export default function Home() {
  return (
    <main className="min-h-screen bg-black  ">
      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex 
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col  px-2 md:px-10  py-4 w-full h-full"
        >
          <Navbar/>
        
      </Vortex>
    </div>
    </main>
  );
}
