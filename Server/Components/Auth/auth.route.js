import express from "express";
import { loginUser, logoutUser, signupUser } from "./auth.controller.js";

const route = new express.Router();

route.post("/signup",signupUser);
route.post("/login",loginUser);
route.post("/logout",logoutUser);

export default route;
