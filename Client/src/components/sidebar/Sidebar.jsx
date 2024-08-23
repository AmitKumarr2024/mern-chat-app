import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import ProfilePic from "./ProfilePic";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col w-20 md:w-64 "> 
      {/* sm:w-16 for small screens and md:w-64 for medium and above screens */}
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="flex items-center justify-between gap-4 ">
        <LogoutButton />
        <ProfilePic/>
      </div>
    </div>
  );
};

export default Sidebar;
