import express from "express";
import {
  createRoom,
  getAllRooms,
  getRoomById,
  getUserRooms,
  updateRoom,
} from "../controllers/roomController.js";

export const router = express.Router();

export type Room = {
  title: string;
  id: string;
  messages?: Message[];
};

export type Message = {
  text: string;
  name: string;
  socketId: string;
};

const ROOMS: Room[] = [
  {
    title: "Global Chatroom",
    id: "1",
  },
];

router.get("/", getAllRooms);

router.post("/", createRoom);

router.put("/:id", updateRoom);

router.get("/user/:id", getUserRooms);

router.get("/:id", getRoomById);
