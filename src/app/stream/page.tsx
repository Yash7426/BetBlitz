"use client"
import React from 'react'
import ChatSidebar from "@/components/chat-sidebar"
import Navbar from '@/components/navbar'
import Tabs from "@/components/tabs-component"
import YouTubePlayer from '@/components/video-player'
import { CardHoverEffectDemo } from '@/components/card'
import { useRoom } from '@/contexts/RoomContext'
import MyModal from "@/components/modal"
const page = () => {

  const { rooms } = useRoom()

  return (
    <div className="min-h-screen  dark:bg-black bg-white  flex-col dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Navbar />
      <CardHoverEffectDemo projects={rooms} />
    </div>
  )
}

export default page
