import React, { useState } from "react";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";

function Login(props) {
  const [ hide, setHide ] = useState(true);


//   to hide password
  const handlePasswordHide = () => {
    setHide(!hide);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-indigo-500"> ChatMeApp</span>
        </h1>
        <form>
          {/* username */}
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* password */}
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Password</span>
            </label>
            <div className="flex items-center relative">
              <input
                type={hide ? "password" : "text"} // Toggle between password and text
                id="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 pr-10"
              />
              <span
                className="absolute right-3 cursor-pointer text-xl text-gray-500"
                onClick={handlePasswordHide}
              >
                {hide ? <LiaEyeSlashSolid /> : <LiaEyeSolid />}
              </span>
            </div>
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-sky-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-lg mt-2 flex justify-center items-center py-6">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
