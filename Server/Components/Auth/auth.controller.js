import generateTokenAndSetCookies from "../../utils/generateToken.js";
import UserModel from "./auth.model.js";
import bcrypt from "bcryptjs";
// signup for user
export const signupUser = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const userExist = await UserModel.findOne({ userName });

    if (userExist) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash Password Here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Profile Pic API
    const profilePicUrl = `https://avatar.iran.liara.run/public/${
      gender === "male" ? "boy" : "girl"
    }?username=${fullName}`;

    const newUser = new UserModel({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: profilePicUrl,
    });

    await newUser.save();

    // Generate token and set cookies after saving the user
    generateTokenAndSetCookies(newUser._id, res);

    return res.status(201).json({
      message: "Signup request created successfully",
      data: {
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      },
      success: true,
    });
  } catch (error) {
    console.error("Error in Signup controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// login for user
export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const userExist = await UserModel.findOne({ userName });

    // decrypt the password

    const passwordCorrect = await bcrypt.compare(
      password,
      userExist?.password || ""
    );

    if (!userExist || !passwordCorrect) {
      return res.status(400).json({ error: "Invalid userName or Password" });
    }

    // generate token

    generateTokenAndSetCookies(userExist._id, res);

    return res.status(201).json({
      message: "Login successfully",
      data: {
        _id: userExist?._id,
        fullName: userExist?.fullName,
        userName: userExist?.userName,
        gender: userExist?.gender,
        profilePic: userExist?.profilePic,
      },
      success: true,
    });
  } catch (error) {
    console.log("Error in Login controller", error.message);
    res.status(500).json({ error: "Internal Server error !!!" });
  }
};

// logout from user
export const logoutUser = (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "development", // Ensures cookie is sent only over HTTPS in production
      sameSite: "strict", // Protects against CSRF attacks
      maxAge: 0,
    });
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    console.log("Error in Logout controller", error.message);
    res.status(500).json({ error: "Internal Server error !!!" });
  }
};
