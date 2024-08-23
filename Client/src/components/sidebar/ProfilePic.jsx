import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const ProfilePic = ({}) => {
  const { authUser } = useAuthContext();
  console.log("authUser",authUser);
  

  return (
    <div className="avatar flex flex-col items-center mt-4">
      <div className="w-9 h-9 rounded-full">
        <img src={authUser.data.profilePic} />
      </div>
      <p className="text-[0.6rem] font-bold text-white">{authUser.data.fullName}</p>
    </div>
  );
};

export default ProfilePic;
