import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  socketId: {
    type: String,
  },
});

export default mongoose.model("Message", messageSchema);
