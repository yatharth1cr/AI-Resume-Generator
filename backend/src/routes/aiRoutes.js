const express = require("express");
const router = express.Router();
const aiController = require("../controllers/aiController");

// Route to generate a resume
router.post("/generate-resume", aiController.generateResume);

module.exports = router;
