import { showError, showSuccess } from "@/utils";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export function Otpveryfy() {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      showError("Email not provided. Please go back and try again.");
      return;
    }

    try {
      const response = await axios.post(
        "https://a2m-transport.onrender.com/auth/otpveryfy",
        { email, otp },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      showSuccess(response.data.message || "OTP verified successfully.");

      // Navigate to reset password page with email
      navigate("/account/resetpassword", { state: { email } });
    } catch (error) {
      if (error.response) {
        showError(error.response.data.message || "Invalid OTP.");
      } else {
        showError("Network error: Failed to reach server.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">OTP Verification</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="otp" className="block mb-1 font-medium">
            Enter OTP sent to your email
          </label>
          <input
            id="otp"
            type="text"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter your OTP"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition font-medium"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
}
