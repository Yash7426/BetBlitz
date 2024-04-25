import "dotenv/config";
import { router as roomRoutes } from "./routes/roomRoutes.js";
import { router as userRoutes } from "./routes/user.js";
import { router as messageRoutes } from "./routes/messageRoutes.js";
import { app, server } from "./routes/socket.js";
import { log } from "./utils/log.js";
import mongoose from "mongoose";

app.use("/rooms", roomRoutes);
app.use("/message", messageRoutes);
app.use("/user", userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    // listen for requests
    server.listen(process.env.PORT || 5000, () => {
      log("SERVER RUNNING");
    });
  })
  .catch((error) => {
    console.log(error);
  });
