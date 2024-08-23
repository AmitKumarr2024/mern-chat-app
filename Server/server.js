import path from "path";
import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import authRoute from "./Components/Auth/auth.route.js";
import messageRoute from "../Server/Components/chat/message.route.js";
import userRoute from "./Components/users/user.route.js";
import connectToMongoDb from "./config/connecToMongoDb.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";
dotenv.config();

const PORT = process.env.PORT || 8001;

const __dirname = path.resolve();

app.use(express.json()); //to parse the incoming request with JSON Payloads
app.use(cookieParser());

app.use("/api/auth/", authRoute);
app.use("/api/message/", messageRoute);
app.use("/api/users/", userRoute);
app.use(express.static(path.join(__dirname, "/Client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Client", "dist", "index.html"));
});
// app.get("/", (req, res) => {
//   res.status(200).send("<h1>Hello Amit</h1>");
// });

server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is running at port: ${chalk.bold.red(PORT)}`);
});
