const User = require("../models/usermodel");

// ------------------------
// GET ALL USERS (ADMIN ONLY)
// ------------------------
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password -otp -otpexpire");
    return res.status(200).json({ users });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ message: "Failed to load users" });
  }
};

// ------------------------
// DELETE USER BY ID (ADMIN ONLY)
// ------------------------
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const exists = await User.findById(id);
    if (!exists) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.findByIdAndDelete(id);

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    return res.status(500).json({ message: "Failed to delete user" });
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
};
