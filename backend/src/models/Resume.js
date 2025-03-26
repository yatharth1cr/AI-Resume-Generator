const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  jobTitle: String,
  experience: Number,
  skills: [String],
  resumeText: String,
  createdAt: { type: Date, default: Date.now },
});

const Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;
