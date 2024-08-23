import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { RiMessage2Fill } from "react-icons/ri";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { IoMdArrowRoundBack } from "react-icons/io";

// Renamed the boolean variable to avoid conflict with component name
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // Example change
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[650px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected /> // Correctly using the NoChatSelected component
      ) : (
        <>
          {/* header */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            
            <span className="label-text">To : </span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          {/* message */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.data.fullName} ❄️</p>
        <p>Select a chat to start messaging</p>
        <RiMessage2Fill className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
