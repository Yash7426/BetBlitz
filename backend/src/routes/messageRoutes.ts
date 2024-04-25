import express from "express";

import {addMessage} from "../controllers/messageController.js"

export const router = express.Router();


router.post("/", addMessage);
