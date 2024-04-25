"use client";
import IMessage from "@/interfaces/IMessage";
import ISocketContext from "@/interfaces/ISocketContext";
import { createContext, useContext, useEffect, useState } from "react";
import * as socketIO from "socket.io-client";
import { useUser } from "./UserContext";
import { useRouter } from "next/navigation";
import { useRoom } from "./RoomContext";

const intialData: ISocketContext = {
  socket: undefined,
  roomUsers: {},
  messages: {},
};

const SocketContext = createContext<ISocketContext>(intialData);

export function useSocket() {
  return useContext(SocketContext);
}

export default function SocketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [roomUsers, setRoomUsers] = useState({});
  const [socket, setSocket] = useState<socketIO.Socket>();
  const [messages, setMessages] = useState<{ [key: string]: IMessage[] }>({});
  const { rooms, myRooms } = useRoom();

  const { username } = useUser();
  const router = useRouter();

  useEffect(() => {
    const obj = {};
    for (let i = 0; i < rooms?.length; i++) {
      setMessages((prev) => {
        const newMessages = { ...prev };
        newMessages[rooms[i]._id as string] = [...(rooms[i]?.messages ?? [])];
        return newMessages;
      });
    }
  }, [rooms]);

  useEffect(() => {
    if (!username) {
      router.replace("/");
      return;
    }
    let socket = socketIO.connect(process.env.NEXT_PUBLIC_BASE_URL!);
    socket.on("receive_message", (data: IMessage) => {
      setMessages((prev) => {
        const newMessages = { ...prev };
        newMessages[data.roomId] = [...(newMessages[data.roomId] ?? []), data];
        return newMessages;
      });
    });
    socket.on("users_response", (data) => setRoomUsers(data));
    setSocket(socket);
  }, []);

  return (
    <SocketContext.Provider value={{ socket, roomUsers, messages }}>
      {children}
    </SocketContext.Provider>
  );
}
