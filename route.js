import express from "express";
import { handelFeedBackRequst } from "./controller.js";

const router = express.Router();

router.post("/createFeedBack", handelFeedBackRequst);

export default router;
