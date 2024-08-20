import "./App.css";
import React from "react";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/SignUp";
import Home from './pages/home/Home'

function App(props) {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Home />
    </div>
  );
}

export default App;
