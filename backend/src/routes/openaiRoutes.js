const express = require("express");
const router = express.Router();
const openaiController = require("../controllers/openaiController");

// Route to generate a resume
router.post("/openai/generate-resume", openaiController.generateResume);

module.exports = router;
