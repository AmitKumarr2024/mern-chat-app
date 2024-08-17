import express from "express";
import protectRoute from "../../middleware/protectRoute.js";
import { getUsersForSidebar } from "./user.controller.js";

const route = new express.Router();

route.get("/", protectRoute, getUsersForSidebar);

export default route;
