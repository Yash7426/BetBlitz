"use client";
import IRoom from "@/interfaces/IRoom";
import IRoomContext from "@/interfaces/IRoomContext";
import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";
import axios from "axios";

const intialData: IRoomContext = {
  rooms: [],
  myRooms: [],
  setMyRooms: () => {},
};

const RoomContext = createContext<IRoomContext>(intialData);

export function useRoom() {
  return useContext(RoomContext);
}

export default function RoomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [myRooms, setMyRooms] = useState<IRoom[]>([]);
  const { userId } = useUser();

  useEffect(() => {
    fetchRoomsfromServer();
    fetchMyRooms();
  }, []);

  // useEffect(() => {
  //   updateMyRooms();
  // }, [myRooms]);

  async function fetchRoomsfromServer(): Promise<void> {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "rooms");
    const rooms = await response.json();
    console.log(rooms, "all rooms here");
    setRooms(rooms);
  }

  async function fetchMyRooms() {
    if (userId) {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + `rooms/user/${userId}`
      );
      console.log(response, "user rooms here");
      if (myRooms) setMyRooms(response.data);
    } else setMyRooms([]);
  }

  // async function updateMyRooms() {
  //   try {
  //     console.log("hrllo", myRooms);
  //     if (myRooms.length > 0) {
  //       const newRoom = await axios.post(
  //         process.env.NEXT_PUBLIC_BASE_URL + `rooms/`,
  //         { ...myRooms[myRooms.length - 1], participants: [userId], userId }
  //       );
  //       console.log(newRoom);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <RoomContext.Provider value={{ rooms, myRooms, setMyRooms }}>
      {children}
    </RoomContext.Provider>
  );
}
