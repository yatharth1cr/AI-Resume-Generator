const Resume = require("../models/Resume.js");
const express = require("express");
const router = express.Router();

router.get("/resumes", (req, res) => {
  Resume.find()
    .sort({ createdAt: -1 })
    .then((resumes) => res.json(resumes))
    .catch((error) =>
      res.status(500).json({ error: "Failed to fetch resumes" })
    );
});

module.exports = router; // ✅ Ensure it's exported correctly
