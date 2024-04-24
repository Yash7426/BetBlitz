import React from 'react'
import ChatSidebar from "@/components/chat-sidebar"
import Navbar from '@/components/navbar'
import Tabs from "@/components/tabs-component"
import YouTubePlayer from '@/components/video-player'
const page = () => {
  return (
    <div className="bg-black-3 flex justify-between">
        <div className="flex w-full flex-col h-screen">
            <Navbar/>
            <div className="overflow-y-auto scrollStyle mt-10 mb-3">
            <YouTubePlayer videoId='uRGqeu97Kkw'/>
            <Tabs/>

            </div>
        </div>
        <ChatSidebar />
    </div>
  )
}

export default page
