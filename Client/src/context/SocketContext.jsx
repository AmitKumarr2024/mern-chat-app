import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();
  console.log("authUser", authUser);

  useEffect(() => {
    console.log("AuthUser changed:", authUser); // Debugging log
    if (authUser) {
      const socket = io("http://localhost:8000", {
        query: {
          userId: authUser?.data?._id,
        },
      });

      setSocket(socket);

      socket.on("connect", () => {
        console.log("Connected to socket server");
      });

      socket.on("getOnlineUsers", (users) => {
        console.log("Received online users:", users); // Debugging log
        setOnlineUsers(users);
      });

      socket.on("disconnect", () => {
        console.log("Disconnected from socket server");
      });

      socket.on("connect_error", (error) => {
        console.error("Socket connection error:", error);
      });

      return () => {
        console.log("Cleaning up socket connection");
        socket.close();
      };
    } else {
      if (socket) {
        console.log("Closing socket connection due to missing authUser");
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
