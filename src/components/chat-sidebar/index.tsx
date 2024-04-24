import React from 'react'
import ChatInput from "./input"
import AnimatedTooltip from '../animated-tooltip'




const Index = () => {
  return (
    <div className="w-[30rem] flex flex-col justify-between relative h-screen bg-black/15">
      <div className="text-3xl font-mono text-white flex  px-5 pt-6 items-center">&#9899; Live Chat</div>
      <div className="mt-5 w-full scrollStyle flex flex-col gap-y-2 overflow-auto flex-grow bg-black/15 h-full">
        {messages.map((message, index) => (
          <div
            key={index}
            className="flex h-auto px-4 py-3 hover:bg-neutral-800"
          >
            <div className="min-w-10 hover:cursor-pointer  scale-75  mr-6">
              <AnimatedTooltip item={message}/>
            </div>
            <div>
              <div className="text-sm  mt-1 text-gray-400">{message.message}</div>
            </div>
          </div>
        ))}
      </div>
      <div className=" mx-1 py-5 border-t border-gray-600">
        <ChatInput/>
      </div>
      {/* <div className="min-h-20 self-end bg-black-2"></div> */}
    </div>
  )
}

export default Index

const messages = [
  {
    id:1,
    name: "John Doe",
    message: "Hello, how are you?",
  },
  {
    id:2,
    name: "Alice Smith",
    message: "I'm doing great, thanks!",
  },
  {
    id:3,
    name: "Michael Johnson",
    message: "Has anyone seen my keys? Has anyone seen my keys? Has anyone seen my keys? Has anyone seen my keys? Has anyone seen my keys? ",
  },
  {
    id:4,
    name: "Emily Brown",
    message: "What's for dinner tonight?",
  },
  {
    id:5,
    name: "Daniel Wilson",
    message: "Just finished my workout!",
  },
  {
    id:6,
    name: "Jessica Martinez",
    message: "Who's coming to the party tomorrow? ming to the party tomorrow?Who's coming to the party tomorrow?Who's comin   orrow?Who's coming ",
  },
  {
    id:7,
    name: "Matthew Anderson",
    message: "I love coding in React!",
  },
  {
    id:8,
    name: "Olivia Thomas",
    message: "Happy birthday to our team member!",
  },
  {
    id:9,
    name: "William Jackson",
    message: "I'm excited about our upcoming project!I'm excited about our upcoming project! I'm excited about our upcoming project! ",
  },
  {
    id:10,
    name: "Sophia White",
    message: "Let's go for a hike this weekend!",
    
  }
];