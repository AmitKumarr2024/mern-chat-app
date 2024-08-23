import React, { useState } from "react";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useSignup from "../../hooks/useSignup";

function SignUp() {
  const [hide, setHide] = useState(true);
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  //   to hide password
  const handlePasswordHide = () => {
    setHide(!hide);
  };

  // handle gender
  const handleCheckBox = (gender) => {
    setInput({ ...input, gender });
  };

// user personal hooks

const{loading,signup}=useSignup()


  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl  font-semibold text-center text-gray-300">
          SingUp <span className="text-indigo-500">ChatMeApp</span>{" "}
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text text-white">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text text-white">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your UserName"
              className="w-full input input-bordered h-10"
              value={input.userName}
              onChange={(e) => setInput({ ...input, userName: e.target.value })}
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
                value={input.password}
                onChange={(e) =>
                  setInput({ ...input, password: e.target.value })
                }
              />
              <span
                className="absolute right-3 cursor-pointer text-xl text-gray-500"
                onClick={handlePasswordHide}
              >
                {hide ? <LiaEyeSlashSolid /> : <LiaEyeSolid />}
              </span>
            </div>
          </div>

          {/* confirm password */}
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text text-white">Confirm Password</span>
            </label>
            <div className="flex items-center relative">
              <input
                type={hide ? "password" : "text"} // Toggle between password and text
                id="confirmPassword"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10 pr-10"
                value={input.confirmPassword}
                onChange={(e) =>
                  setInput({ ...input, confirmPassword: e.target.value })
                }
              />
              <span
                className="absolute right-3 cursor-pointer text-xl text-gray-500"
                onClick={handlePasswordHide}
              >
                {hide ? <LiaEyeSlashSolid /> : <LiaEyeSolid />}
              </span>
            </div>
          </div>

          {/* gender */}
          <GenderCheckBox
            onCheckBoxChange={handleCheckBox}
            selectGender={input.gender}
          />
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-sky-500 mt-2 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-circle text-2xl mt-2 flex justify-center items-center " disabled={loading}>
              {loading?<span className="loading loading-spinner"></span>:"Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
