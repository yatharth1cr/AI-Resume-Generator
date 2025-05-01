const express = require("express");
const router = express.Router();
const resumeAiController = require("../controllers/resumeAiController");
// const coverLetterAiController = require("../controllers/coverLetterAiController");

// Route to generate a resume
router.post("/generate-resume", resumeAiController.generateResume);

// Cover letter generation route
// router.post(
//   "/generate-cover-letter",
//   coverLetterAiController.generateCoverLetter
// );
module.exports = router;
