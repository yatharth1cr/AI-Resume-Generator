const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
  {
    jobTitle: { type: String, required: true },
    experience: { type: Number, required: true },
    skills: { type: [String], required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", ResumeSchema);
