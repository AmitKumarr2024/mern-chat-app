import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetConversation from "../../hooks/useGetConversation";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../../skeletons/MessageSkeleton";
import formateDate from "../../utils/formateDate";
import useListemMessages from "../../hooks/useListemMessages";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListemMessages();
  const messageEndRef = useRef(null);

  const conversationStartDate =
    messages.length > 0 ? formateDate(messages[0]?.createdAt) : null;

  useEffect(() => {
    setTimeout(() => {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto " ref={messageEndRef}>
      {!loading && messages.length > 0 && (
        <>
          {conversationStartDate && (
            <div className="text-center text-gray-400 my-4">
              {conversationStartDate}
            </div>
          )}
          {messages.map((message) => (
            <div key={message._id} ref={messageEndRef}>
              <Message message={message} />
            </div>
          ))}
        </>
      )}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation </p>
      )}
    </div>
  );
};

export default Messages;
