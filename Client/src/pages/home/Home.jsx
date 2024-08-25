import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import useConversation from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="grid lg:grid-cols-[300px,1fr] h-screen max-h-screen bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* Sidebar */}
      <section
        className={`${
          selectedConversation ? "hidden" : "block"
        } lg:block`}>
        <Sidebar />
      </section>
      {/* Main Content */}
      <section
        className={`${
          selectedConversation ? "block" : "hidden"
        } lg:block`}>
        <MessageContainer />
      </section>
    </div>
  );
};

export default Home;
