const mongoose = require("mongoose");

// Define the Resume schema
const ResumeSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    experience: { type: Number, required: true },
    skills: { type: [String], required: true },
    education: { type: String, required: true },
    content: { type: String, required: true },
  },

  // Add timestamps to the schema for createdAt and updatedAt fields
  { timestamps: true }
);

module.exports = mongoose.model("Resume", ResumeSchema);
