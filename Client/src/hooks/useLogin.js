import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (userName, password) => {
    const success = await handleErrorInput(userName, password);
    if (!success) return;
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data)); // Corrected line
      setAuthUser(data);
      toast.success("User Login Successfully");
    } catch (error) {
      toast.error(error.message); // Log the error
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

const handleErrorInput = (userName, password) => {
  if (!userName || !password) {
    toast.error("Please fill all Fields");
    return false;
  }
  if (password.length <= 6) {
    toast.error("Password must be at least 6 characters ");
  }
  return true;
};
