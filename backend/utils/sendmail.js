const nodemailer = require("nodemailer");
require("dotenv").config();

const sendmail = async ({ otp, email }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      html: `<h2>Your OTP is: ${otp}</h2><p>Valid for 10 minutes.</p>`,
    });

    console.log("📩 Email Sent:", info.response);
  } catch (error) {
    console.error("❌ Email Error:", error.message);
  }
};

module.exports = sendmail;
