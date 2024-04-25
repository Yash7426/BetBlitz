"use client"
import React, { useEffect, useState } from 'react'
import ChatSidebar from "@/components/chat-sidebar"
import Navbar from '@/components/navbar'
import Tabs from "@/components/tabs-component"
import YouTubePlayer from '@/components/video-player'
import { useParams } from 'next/navigation'
import { useSocket } from '@/contexts/SocketContext'
import { useUser } from '@/contexts/UserContext'
import { useRoom } from '@/contexts/RoomContext'
import Popup from '@/components/shared/Popup'
const page = () => {
  const { id } = useParams();
  const { socket, roomUsers } = useSocket();
  const { username } = useUser();

  useEffect(() => {
    if (roomUsers[id as string]?.includes(socket?.id)) return;
    socket?.emit("send_message", {
      text: username + " joined the room.",
      socketId: "kurakani",
      roomId: id,
    });
    socket?.emit("join_room", id);
  }, []);

  const { rooms, myRooms } = useRoom();
  const room = rooms.concat(myRooms).find((room) => room._id === id);
  const [isCopied, setIsCopied] = useState<boolean>(false);


  console.log("object,room", room)

  return (
    <div className="bg-black flex justify-between">
      <div className="flex w-full flex-col h-screen">

        <Navbar />
        <div className="overflow-y-auto scrollStyle mb-3">
          <YouTubePlayer videoUrl={room?.url as string} />
          <div className="basis-[7%] flex items-center justify-between px-5 py-6 font-medium">
            <p className="text-3xl font-[800] w-fit font-mono my-2 inline-block text-orange-vr ">{room?.title}'s Stream</p>
            <button
              type="submit"
              className="bg-orange-vr p-2 rounded-xl cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(id as string);
                setIsCopied(true);
              }}
            >
              Copy Room ID
            </button>
            <Popup
              text="Room ID copied!"
              showPopup={isCopied}
              setShowPopup={setIsCopied}
            />
          </div>
          <Tabs />

        </div>
      </div>
      <ChatSidebar roomId={id as string} />
    </div>
  )
}

export default page
