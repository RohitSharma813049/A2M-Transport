const Contactus = require("../models/contactus");

// 📩 Add Contact Message
const Contactusadd = async (req, res) => {
  try {
    const { name, email, number, message } = req.body;

    // Validate fields
    if (!name || !email || !number || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newMessage = new Contactus({
      name,
      email,
      number,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      message: "Message sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Contact Add Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 📥 Get ALL Contact Messages
const Contactusget = async (req, res) => {
  try {
    const messages = await Contactus.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Contact messages fetched successfully",
      messages,
    });
  } catch (error) {
    console.error("Contact Get Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// 🗑 Delete Contact Message
const Contactusdelete = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Contactus.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Contact Delete Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  Contactusadd,
  Contactusget,
  Contactusdelete,
};
