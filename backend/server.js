const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const contactusRoutes = require("./routes/contactus");

require("./config/db");

const userAccount = require("./routes/useraccount");
const Adminlist = require("./routes/adminuserlist")

const app = express();
const Port = process.env.PORT || 6523;

// Middleware
app.use(helmet());
app.use(express.json());
app.use(morgan("combined"));

const corsOptions = {
  origin: ["https://a2m-transport-1.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/contact", contactusRoutes);

// Routes
app.get("/", (req, res) => res.send("Welcome To App"));
app.use("/auth", userAccount);
app.use("/admin",Adminlist);


// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Start Server
app.listen(Port, () => {
  console.log(`✅ Server running on: http://localhost:${Port}`);
});
