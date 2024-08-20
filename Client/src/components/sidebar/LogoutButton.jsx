import React from "react";
import { GrLogout } from "react-icons/gr";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <GrLogout className="w-6 h-6 text-white cursor-pointer font-bold"/>
    </div>
  );
};

export default LogoutButton;
