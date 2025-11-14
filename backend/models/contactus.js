const mongoose = require("mongoose");

const ContactusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
      // ❗ Do NOT use unique: true here
      // User can submit multiple messages with same email
    },

    number: {
      type: String,       // Use String to avoid losing leading digits / +91
      required: true,
      trim: true
    },

    message: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true // Adds createdAt & updatedAt
  }
);

module.exports = mongoose.model("Contactus", ContactusSchema);