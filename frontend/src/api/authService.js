// src/api/authService.js
import api from "./axiosInstance";

// Utility to extract server messages safely
const getMsg = (error) =>
  error?.response?.data?.message ||
  error?.response?.data?.error ||
  error?.message ||
  "Something went wrong";

/* ===========================
        AUTH APIs
   =========================== */

// REGISTER
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw new Error(getMsg(error));
  }
};

// LOGIN
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);

    if (response.data?.Token) {
      localStorage.setItem("token", response.data.Token);
    }

    return response.data;
  } catch (error) {
    throw new Error(getMsg(error));
  }
};

// SEND OTP  ✅ CORRECT
export const sendOtp = async (email) => {
  try {
    const response = await api.post("/auth/user/sendotp", { email });
    return response.data;
  } catch (error) {
    throw new Error(getMsg(error));
  }
};

// VERIFY OTP  ✅ CORRECT
export const verifyOtp = async (email, otp) => {
  try {
    const response = await api.post("/auth/user/veryfyotp", { email, otp });
    return response.data;
  } catch (error) {
    throw new Error(getMsg(error));
  }
};

// RESET PASSWORD  ✅ CORRECT
export const resetPassword = async (email, password) => {
  try {
    const response = await api.post("/auth/user/resetpassword", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(getMsg(error));
  }
};
