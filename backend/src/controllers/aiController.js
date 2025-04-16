const { CohereClient } = require("cohere-ai");
const dotenv = require("dotenv");
const Resume = require("../models/Resume");

// Load environment variables from .env file
dotenv.config();

// Initialize CohereClient with API key
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

// Controller to generate a resume
exports.generateResume = async (req, res) => {
  const { jobTitle, experience, skills, education } = req.body;

  // Basic input validation
  if (
    !jobTitle ||
    !experience ||
    !Array.isArray(skills) ||
    skills.length === 0
  ) {
    return res.status(400).json({
      error: "All fields are required. 'skills' must be a non-empty array.",
    });
  }

  const prompt = `
  Generate a resume for the following candidate:
  
  - Job Title: ${jobTitle}
  - Experience: ${experience} years
  - Skills: ${skills.join(", ")}
  - Education: ${education}
  
  The resume should include these clear Markdown-style sections with dummy details:
  1. ## Full Name
     (Use: John Doe)
  2. ## Contact Information
     Email: johndoe@example.com | Phone: (123) 456-7890 | Address: 123 Main St, City, Country
  3. ## Professional Summary
  4. ## Key Technical Skills
  5. ## Work Experience
     Include 1–2 roles, company names, duration, and achievements.
  6. ## Projects
     Mention project names, tech used, and impact.
  7. ## Education & Certifications
  
  Output the resume in Markdown format with each section starting with "##".
  `;

  try {
    const response = await cohere.generate({
      model: "command",
      prompt,
      maxTokens: 300,
      temperature: 0.7,
    });

    const generatedText = response?.generations?.[0]?.text?.trim();

    if (!generatedText) {
      return res.status(500).json({ error: "Resume generation failed." });
    }

    const newResume = new Resume({
      jobTitle,
      experience,
      skills,
      education,
      content: generatedText,
    });

    await newResume.save();

    return res.json({ resume: generatedText });
  } catch (err) {
    console.error("Error generating resume:", err);
    return res.status(500).json({ error: "Internal server error." });
  }
};
