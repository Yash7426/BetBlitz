
"use client"
import React, { useEffect, useRef, useState } from 'react'
import ChatInput from "./input"
import AnimatedTooltip from '../animated-tooltip'
import { useSocket } from '@/contexts/SocketContext'
import ChatImage from '../Chat/ChatImage'
// import Avatar from "@/assets/avatar.png"
// import Avatar from 'react-avatar'




const Index = ({ roomId }: { roomId: string }) => {
  // const messages = [
  //   {
  //     id:1,
  //     name: "John Doe",
  //     message: "Hello, how are you?",
  //   },
  //   {
  //     id:2,
  //     name: "Alice Smith",
  //     message: "I'm doing great, thanks!",
  //   },
  //   {
  //     id:3,
  //     name: "Michael Johnson",
  //     message: "Has anyone seen my keys? Has anyone seen my keys? Has anyone seen my keys? Has anyone seen my keys? Has anyone seen my keys? ",
  //   },
  //   {
  //     id:4,
  //     name: "Emily Brown",
  //     message: "What's for dinner tonight?",
  //   },
  //   {
  //     id:5,
  //     name: "Daniel Wilson",
  //     message: "Just finished my workout!",
  //   },
  //   {
  //     id:6,
  //     name: "Jessica Martinez",
  //     message: "Who's coming to the party tomorrow? ming to the party tomorrow?Who's coming to the party tomorrow?Who's comin   orrow?Who's coming ",
  //   },
  //   {
  //     id:7,
  //     name: "Matthew Anderson",
  //     message: "I love coding in React!",
  //   },
  //   {
  //     id:8,
  //     name: "Olivia Thomas",
  //     message: "Happy birthday to our team member!",
  //   },
  //   {
  //     id:9,
  //     name: "William Jackson",
  //     message: "I'm excited about our upcoming project!I'm excited about our upcoming project! I'm excited about our upcoming project! ",
  //   },
  //   {
  //     id:10,
  //     name: "Sophia White",
  //     message: "Let's go for a hike this weekend!",

  //   }
  // ];

  const [typing, setTyping] = useState<string>("");
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const { messages, socket } = useSocket();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket?.on("typing_response", (data) => {
      setTyping(data);
    });
  }, []);

  return (
    <div className="w-[40rem]  flex flex-col justify-between relative h-screen bg-black/15">
      <div className="text-3xl font-mono text-white flex  px-5 pt-6 items-center">&#9899; Live Chat</div>
      {/* <div className="mt-5 w-full scrollStyle flex flex-col gap-y-2 overflow-auto flex-grow bg-black/15 h-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex h-auto px-4 py-3 hover:bg-neutral-800"
          >
            <div className="min-w-10 hover:cursor-pointer  scale-75  mr-6">
              <AnimatedTooltip item={message} />
            </div>
            <div>
              <div className="text-sm  mt-1 text-gray-400">{message.message}</div>
            </div>
          </div>
        ))}
      </div> */}
      <div className="basis-[85%] overflow-y-auto scrollStyle p-5 w-full flex flex-col gap-2">
        {messages[roomId]?.map((message: any, index: number) =>
          message.socketId === "kurakani" ? (
            <div className="flex self-center" key={index}>
              <div className="flex  justify-center items-center">
                <p className='text-white max-w-44 truncate text-wrap'>{message.text}</p>
              </div>
            </div>
          ) : message.socketId === socket?.id ? (
            <div className="flex self-end flex-col items-end" key={index}>
              {message.text && <div className={`px-3 py-2 my-3 bg-gray-200   "rounded-bl-none"   w-fit flex justify-center items-center  rounded-full rounded-br-none bg-primary`}>
                <p className="font-sans text-black">{message.text}</p>
                
              </div>}
              {message.image && <ChatImage imgURL={message.image} />}
            </div>
          ) : (
            <div className="flex z-50 gap-2 self-start" key={index}>
              <div className="self-center -mt-7">
                <AnimatedTooltip
                   item={{
                    id: message.socketId,
                    name: message.name,
                   }}
                />
              </div>
              <div>
                {message.text && <div className={`px-3 py-2 my-3 bg-gray-200 rounded-full ${message.image ? "rounded-bl-none" : "rounded-tl-none"} w-fit`}>
                  <p className="font-sans">{message.text}</p>
                </div>}
                {message.image && <ChatImage imgURL={message.image} />}
                
              </div>
            </div>
          )
        )}
        <div ref={lastMessageRef} className="mt-auto text-slate-500">
          {typing}
        </div>
      </div>
      <div className="my-5">
        <ChatInput roomId={roomId as string}/>
      </div>
      {/* <div className="min-h-20 self-end bg-black-2"></div> */}
    </div>
  )
}

export default Index

