import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  address: {
    type: String,
    required: true,
    unique: true,
  },
  myRooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
});

export default mongoose.model("User", userSchema);
