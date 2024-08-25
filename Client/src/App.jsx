import "./App.css";
import React from "react";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import NotFound from "./pages/Error";

function App(props) {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-full flex items-center justify-center">
      <Toaster />
      <Routes>
        <Route path="/" element={authUser?<Home />:<Navigate to={'/login'}/>} />
        <Route path="/login" element={authUser?<Navigate to={'/'}/>:<Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={'/'}/>: <SignUp />} />
        <Route path="*" element={<NotFound/>} />

      </Routes>
    </div>
  );
}

export default App;
