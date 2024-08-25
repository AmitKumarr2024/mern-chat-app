import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { RiMessage2Fill } from "react-icons/ri";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { BsArrowLeft } from "react-icons/bs";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  // Function to handle back button click
  const handleBack = (e) => {
    e.preventDefault();
    setSelectedConversation(null); // Deselect the current conversation
  };

  // Effect to clean up the selected conversation when the component unmounts
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[650px] flex flex-col h-screen relative">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500  py-2 w-full z-10">
            <div className="flex items-center gap-2">
              <BsArrowLeft
                onClick={handleBack}
                size={30}
                className="text-slate-100 mx-2 cursor-pointer"
              />
              <span className="label-text text-lg font-bold">To : </span>
              <span className="text-gray-900 font-bold text-xl">
                {selectedConversation.fullName}
              </span>
            </div>
          </div>

          {/* Messages container */}
          <div className="flex-grow h-screen   overflow-y-scroll mb-2">
            <Messages />
          </div>

          {/* Message input at the bottom */}
          <div className="w-full  z-10">
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

// Component to show when no chat is selected
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
