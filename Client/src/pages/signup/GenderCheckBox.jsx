import React from "react";

const GenderCheckBox = ({ onCheckBoxChange, selectGender }) => {
  return (
    <div className=" flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer text-white ${
            selectGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectGender === "male"}
            onChange={(e) => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer text-white ${
            selectGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectGender === "female"}
            onChange={(e) => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
