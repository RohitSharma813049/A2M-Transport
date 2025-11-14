const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Load routes
const contactusRoutes = require("./routes/contactus");
const userAccount = require("./routes/useraccount");
const Adminlist = require("./routes/adminuserlist");

// Connect to MongoDB
require("./config/db");

const app = express();
const Port = process.env.PORT || 6523;

// -------------------------------------
// 🔐 SECURITY & BASIC MIDDLEWARE
// -------------------------------------
app.use(helmet());
app.use(express.json());
app.use(morgan("combined"));

// -------------------------------------
// 🌐 CORS CONFIGURATION
// -------------------------------------
const allowedOrigins = [
  "http://localhost:5173",                 // Local development
  "https://a2m-transport-1.onrender.com"   // Deployed frontend
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// -------------------------------------
// 🚦 ROUTES
// -------------------------------------
app.get("/", (req, res) => {
  res.send("Welcome To A2M Transport Backend API");
});

app.use("/api/contact", contactusRoutes);
app.use("/auth", userAccount);
app.use("/admin", Adminlist);

// -------------------------------------
// ❗ GLOBAL ERROR HANDLER
// -------------------------------------
app.use((err, req, res, next) => {
  console.error("🔥 ERROR:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// -------------------------------------
// 🚀 START SERVER
// -------------------------------------
app.listen(Port, () => {
  console.log(`🚀 Backend running on port: ${Port}`);
  console.log(`🔥 Base URL: https://a2m-transport.onrender.com`);
});
