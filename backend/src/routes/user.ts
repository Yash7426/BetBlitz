import express from "express";

// @ts-ignore
import { addUser } from '../controllers/userController.js'

export const router = express.Router();

// login route
router.post('/add', addUser)

