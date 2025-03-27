const mongoose = require("mongoose");

const connectDB = () => {
  if (!process.env.MONGO_URL) {
    console.error("❌ MONGO_URL is not defined in environment variables.");
    process.exit(1);
  }

  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ MongoDB Connected");
    })
    .catch((error) => {
      console.error("❌ MongoDB Connection Failed:", error);
      process.exit(1);
    });
};

module.exports = connectDB;
