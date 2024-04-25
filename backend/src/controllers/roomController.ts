import mongoose from "mongoose";
import Room from "../models/roomModel.js";
import User from "../models/userModel.js";
import path from "path";

// @ts-ignore
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({}).populate({path:"messages"}).populate({path:"participants"});
    res.status(200).json(rooms);
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message });
  }
};

// @ts-ignore
const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such room" });
    }

    const room = await Room.findById(id).populate({path:"messages"}).populate({path:"participants"});
    res.status(200).json(room);
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message });
  }
};

// @ts-ignore
const getUserRooms = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such user" });
    }

    const user = await User.findById(id).populate({path:"myRooms"});
    res.status(200).json(user?.myRooms ?? []);
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message });
  }
};

// create new room
// @ts-ignore
const createRoom = async (req, res) => {
  const { title, participants, userId,url } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "Please provide title" });
  }

  try {
    const room = await Room.create({ title, participants ,url});
    const userRooms = await User.findById(userId);
    if (!userRooms) {
      res.status(400).json({ error: "No such user" });
    }
    const user = await User.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          myRooms: [...(userRooms?.myRooms ?? []), room._id],
        },
      }
    );
    res.status(200).json(room);
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message });
  }
};

// @ts-ignore
const updateRoom = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such room" });
  }

  const room = await Room.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!room) {
    return res.status(400).json({ error: "No such room" });
  }

  res.status(200).json(room);
};

export { getAllRooms, getRoomById, updateRoom, getUserRooms, createRoom };
