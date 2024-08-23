import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId=(receiverID)=>{
    return userSocketMap[receiverID]
}


const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("A user is Connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId && userId !== "undefined") {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} connected with socket ID ${socket.id}`);
  } else {
    console.log("Received undefined or invalid userId:", userId);
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    console.log("Before deletion:", userSocketMap);
    delete userSocketMap[userId];
    console.log("After deletion:", userSocketMap);
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
