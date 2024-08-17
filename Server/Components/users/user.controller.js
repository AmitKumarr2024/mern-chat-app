import UserModel from "../Auth/auth.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loginUserId = req.params._id;
    const filterUser = await UserModel.find({
      _id: {
        $ne: loginUserId,
      },
    }).select("-password");

    res.status(200).json(filterUser);
  } catch (error) {
    console.error("error in getUsersForSidebar controller ", error.message);

    res.status(500).json({ error: "Internal server error" });
  }
};
