import mongoose from "mongoose";
import Room from "../models/roomModel.js";
import Message from "../models/messageModel.js";

// create new room
// @ts-ignore
const addMessage = async (req, res) => {
  const { text, name, socketId, roomId } = req.body;

  let emptyFields = [];

  if (!text) {
    emptyFields.push("title");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please provide text" });
  }

  try {
    const message = await Message.create({ name, text, socketId });
    const room = await Room.findById(roomId);
    if (!room) {
      res.status(400).json({ error: "No such room" });
    }
    const updatedRoom = await Room.findOneAndUpdate(
      { _id: roomId },
      {
        $set: {
          messages: [...(room?.messages || []), message._id],
        },
      }
    );
    res.status(200).json(message);
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message });
  }
};

export { addMessage };
