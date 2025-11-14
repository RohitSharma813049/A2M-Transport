// server.js
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Try to import a connect function from config/db if available.
// If your ./config/db currently just runs mongoose.connect() on require,
// keep it as-is but consider exporting a function for better control.
let connectDB;
try {
  connectDB = require("./config/db");
} catch (e) {
  console.warn("Could not require('./config/db') as a module. Proceeding with require side-effects if any.");
  // Fallthrough: require for side effects:
  try { require("./config/db"); } catch (err) { console.warn("Side-effect require('./config/db') failed:", err.message); }
}

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 6523;

// -------------------------------------
// 🔐 SECURITY & BASIC MIDDLEWARE
// -------------------------------------
app.set("trust proxy", 1); // if behind a proxy (Render)
app.use(helmet());
app.use(express.json());
app.use(morgan("combined"));

// -------------------------------------
// 🌐 CORS CONFIGURATION
// -------------------------------------
app.use(
  cors({
    origin: "https://a2m-transport-1.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  })
);



// -------------------------------------
// 🚦 ROUTES
// -------------------------------------
app.get("/", (req, res) => {
  res.send("Welcome To A2M Transport Backend API");
});

// health/readiness probe
app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok", time: new Date().toISOString() });
});

// Load routes (after middleware)
app.use("/api/contact", require("./routes/contactus"));
app.use("/auth", require("./routes/useraccount"));
app.use("/admin", require("./routes/adminuserlist"));

// -------------------------------------
// ❗ GLOBAL ERROR HANDLER
// -------------------------------------
app.use((err, req, res, next) => {
  console.error("🔥 ERROR:", err.stack || err);
  // If CORS error from our origin check
  if (err.message && err.message.indexOf("CORS") >= 0) {
    return res.status(403).json({ message: "CORS Error: origin not allowed" });
  }
  res.status(500).json({ message: "Internal Server Error" });
});

// -------------------------------------
// 🚀 START SERVER
// -------------------------------------
function startServer() {
  app.listen(PORT, () => {
    console.log(`🚀 Backend running on port: ${PORT}`);
    if (process.env.RENDER_EXTERNAL_URL) {
      console.log(`🔥 Base URL: ${process.env.RENDER_EXTERNAL_URL}`);
    } else {
      console.log(`🔥 Base URL (guess): https://a2m-transport-1.onrender.com`);
    }
  });
}

// If connectDB is a function that returns a Promise, wait for it.
// This is non-breaking: if connectDB is undefined or not a function, just start.
if (typeof connectDB === "function") {
  // If your ./config/db exports async function connectDB() { ... }
  connectDB()
    .then(() => {
      console.log("✅ MongoDB connected (via exported function).");
      startServer();
    })
    .catch((err) => {
      console.error("❌ MongoDB connection failed:", err);
      // Still start server (optional). Choose your preference.
      // process.exit(1); // <-- uncomment to crash if DB connection is required
      startServer();
    });
} else {
  // connectDB not a function or not exported: assume config/db did side-effect connect or will connect itself
  console.log("⚠️ connectDB not exported as function; starting server immediately (ensure ./config/db connects on require).");
  startServer();
}
