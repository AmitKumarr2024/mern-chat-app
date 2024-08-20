import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_RlT-ytB9A_TQFLKMqVYpdJiiRbckTCThmw&s"
            alt="Tailwind css chat bubble component"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-orange-500`}>Hi wats up ?</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42pm</div>
    </div>
  );
};

export default Message;
