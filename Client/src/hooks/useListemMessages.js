import React, { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../sound/message.mp3";

const useListemMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages,incrementUnseenMessages,selectedConversation } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
     // Increment unseen messages count if the conversation is not selected
     if (selectedConversation?._id !== newMessage.conversationId) {
        incrementUnseenMessages(newMessage.conversationId);
      }
    });
    return () => socket?.off("newMessage");
  }, [socket, setMessages, messages,incrementUnseenMessages, selectedConversation]);
};

export default useListemMessages;
