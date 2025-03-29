const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const aiRoutes = require("./routes/aiRoutes");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const { CohereClient } = require("cohere-ai");

// Load environment variables
dotenv.config();
connectDB(); // Connect to MongoDB

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api", aiRoutes);

app.get("/", (req, res) => {
  res.send("AI Resume Generator API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
