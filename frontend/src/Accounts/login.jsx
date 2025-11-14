import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../app/reducer/user";
import { showSuccess, showError } from "@/utils";

export function Login() {
  const [logininfo, setlogininfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, isAuthenticated, role } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setlogininfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginAsync(logininfo)).unwrap();
      showSuccess("Login successful!");
    } catch (error) {
      showError(error || "Invalid email or password");
    }
  };

  // 🔥 Redirect after login based on ROLE
  useEffect(() => {
    if (isAuthenticated) {
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, role]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={logininfo.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            required
            value={logininfo.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="••••••••"
          />
        </div>

        <div className="text-right">
          <Link
            to="/account/forgetpassword"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white py-2 rounded transition font-medium ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="text-center mt-6 pt-4 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          Don't have an account?{" "}
          <Link
            to="/account/register"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
