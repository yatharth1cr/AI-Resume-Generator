const { CohereClient } = require("cohere-ai");
const dotenv = require("dotenv");
const Resume = require("../models/Resume");

dotenv.config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.generateResume = async (req, res) => {
  try {
    const { jobTitle, experience, skills } = req.body;
    console.log("Backend Received Data:", req.body);

    if (
      !jobTitle ||
      !experience ||
      !Array.isArray(skills) ||
      skills.length === 0
    ) {
      return res
        .status(400)
        .json({ error: "All fields are required and skills must be an array" });
    }

    // Create a prompt
    const prompt = `Generate a well-structured resume for a ${jobTitle} with ${experience} years of experience.
The resume should include:
1. A compelling professional summary.
2. A section for key technical skills.
3. Work experience with achievements.
4. Notable projects with impact.
5. Education and certifications.
Skills: ${skills.join(", ")}.
Ensure the format is clear and professional.
`;

    // Generate response using Cohere
    const response = await cohere.generate({
      model: "command",
      prompt: prompt,
      max_tokens: 300,
      temperature: 0.7,
    });

    const generatedResume = response?.generations?.[0]?.text || "";

    if (!generatedResume) {
      return res.status(500).json({ error: "Failed to generate resume" });
    }

    console.log("Generated Resume:", generatedResume);

    // Save the resume in MongoDB
    const newResume = new Resume({
      jobTitle,
      experience,
      skills,
      content: generatedResume,
    });

    await newResume.save();

    res.json({ resume: generatedResume });
  } catch (error) {
    console.error(
      "Error generating resume:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to generate resume" });
  }
};
