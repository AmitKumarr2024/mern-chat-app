import React from "react";
import { GrLogout } from "react-icons/gr";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto py-4">
      {!loading ? (
        <GrLogout
          className="w-6 h-6 text-white cursor-pointer font-bold"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
