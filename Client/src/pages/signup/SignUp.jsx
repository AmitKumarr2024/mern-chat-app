import React, { useState } from "react";
import { LiaEyeSlashSolid } from "react-icons/lia";
import { LiaEyeSolid } from "react-icons/lia";
import GenderCheckBox from "./GenderCheckBox";

function SignUp() {
  const [hide, setHide] = useState(true);

  //   to hide password
  const handlePasswordHide = () => {
    setHide(!hide);
  };
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl  font-semibold text-center text-gray-300">
          SingUp <span className="text-indigo-500">ChatMeApp</span>{" "}
        </h1>

        <form action="">
          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2" htmlFor="">
              <span className="text-base label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your UserName"
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

          {/* gender */}
          <GenderCheckBox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-sky-500 mt-2 inline-block"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-circle text-2xl mt-2 flex justify-center items-center ">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
