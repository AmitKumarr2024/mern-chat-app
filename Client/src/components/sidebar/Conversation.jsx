import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import useListemMessages from "../../hooks/useListemMessages";

const Conversation = ({ conversations, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  

  const isSelected = selectedConversation?._id === conversations?._id;
  const { onlineUsers } = useSocketContext() || { onlineUsers: [] }; // Provide a default fallback
  const isOnline = onlineUsers.includes(conversations?._id); // Assuming `conversations` is defined elsewhere

  // Define a handler function for onClick
  const handleClick = () => {
    setSelectedConversation(conversations);
  };

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer 
        ${isSelected ? "bg-sky-500" : ""}`}
        onClick={handleClick} // Pass the handler function
      >
        <div className={`avatar  ${isOnline ? "online " : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversations.profilePic} alt="user Avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversations.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
