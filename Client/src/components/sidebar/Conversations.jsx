import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmojis } from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversation } = useGetConversation();
  console.log("Conversation", conversation);
  return (
    <div className=" flex flex-col overflow-auto">
      {conversation.map((conversations,idx) => {
        return (
          <Conversation
            key={conversations._id}
            conversations={conversations}
            emoji={getRandomEmojis()}
            lastIdx={idx === conversation.length - 1}
          />
        );
      })}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
