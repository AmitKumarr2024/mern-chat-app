import express from "express";
import { getMessage, sendMessage } from "./message.controller.js";
import protectRoute from "../../middleware/protectRoute.js";

const route = new express.Router();

route.get("/:id",protectRoute, getMessage);
route.post("/send/:id", protectRoute, sendMessage);

export default route;
