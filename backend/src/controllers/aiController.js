const { CohereClient } = require("cohere-ai");
const dotenv = require("dotenv");
const Resume = require("../models/Resume");

dotenv.config();

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.generateResume = async (req, res) => {
  const { jobTitle, experience, skills: skillsArray } = req.body;

  if (
    !jobTitle ||
    !experience ||
    !Array.isArray(skillsArray) ||
    skillsArray.length === 0
  ) {
    return res
      .status(400)
      .json({ error: "All fields are required and skills must be an array" });
  }

  const prompt = `Generate a well-structured resume for a ${jobTitle} with ${experience} years of experience.
    Include:
    - A professional summary
    - Key technical skills
    - Work experience with achievements
    - Notable projects and impact
    - Education & certifications

    Skills: ${skillsArray.join(", ")}
    Use clear and structured formatting.`;

  const cohereResponse = await cohere.generate({
    model: "command",
    prompt,
    maxTokens: 300,
    temperature: 0.7,
  });

  const generatedText = cohereResponse?.generations?.[0]?.text || "";

  if (!generatedText) {
    return res.status(500).json({ error: "Failed to generate resume" });
  }

  const newResume = new Resume({
    jobTitle,
    experience,
    skills: skillsArray,
    content: generatedText,
  });

  await newResume.save();

  // Send the generated resume back to the client
  // We don't need to send the generated resume back to the client
  // after saving it in the database, as it's already stored.
  res.json({ resume: generatedText });
};
