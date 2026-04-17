import express from "express";
import { sendMail } from "../controllers/mail.Controller.js";

export const router = express.Router();

router.post("/send-message", sendMail);

