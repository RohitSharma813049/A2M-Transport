import { showError, showSuccess } from "@/utils";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/api/axiosInstance"; // IMPORTANT

export function Forgetpassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/user/otpsend", { email });

      showSuccess(response.data.message || "OTP sent successfully!");

      navigate("/account/otpverify", { state: { email } });
    } catch (error) {
      if (error.response) {
        showError(error.response.data.message || "Something went wrong.");
      } else {
        showError("Network error. Failed to reach server.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Enter your email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-medium"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
}
