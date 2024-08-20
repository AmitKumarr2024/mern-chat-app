import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full pr-10 p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <RiSendPlane2Fill size={25}/>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
