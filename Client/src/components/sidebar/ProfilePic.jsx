import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const ProfilePic = () => {
  const { authUser } = useAuthContext();
  console.log("authUser", authUser);

  return (
    <div className="avatar flex flex-col items-center mt-4 ">
      {/* Add animation classes to the div containing the profile picture */}
      <div className="w-9 h-9 rounded-full border-2 border-transparent bg-clip-padding animate-colorful-glow">
        <img src={authUser.data.profilePic} className="rounded-full" alt="Profile" />
      </div>
      <p className="text-[0.8rem] tracking-widest font-normal text-white">{authUser.data.fullName}</p>
    </div>
  );
};

export default ProfilePic;
