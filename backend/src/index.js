const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const openaiRoutes = require("./routes/openaiRoutes");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(cors({ origin: "*" }));

app.use(express.json());

// Routes
app.use("/api", openaiRoutes);

app.get("/", (req, res) => {
  res.send("AI Resume Generator API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
