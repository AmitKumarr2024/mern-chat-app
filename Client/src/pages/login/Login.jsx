import React, { useState } from "react";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

function Login(props) {
  const [hide, setHide] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  // to submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(userName, password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          {/* username */}
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text text-white">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {/* password */}
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <div className="flex items-center relative">
              <input
                type={hide ? "password" : "text"} // Toggle between password and text
                id="password"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 cursor-pointer text-xl text-gray-500"
                onClick={handlePasswordHide}
              >
                {hide ? <LiaEyeSlashSolid /> : <LiaEyeSolid />}
              </span>
            </div>
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-sky-500 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button
              className="btn btn-block btn-circle text-2xl mt-2 flex justify-center items-center "
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
