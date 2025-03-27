const OpenAI = require("openai");
const dotenv = require("dotenv");
const Resume = require("../models/Resume");

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure API Key is in `.env`
});

exports.generateResume = (req, res) => {
  const { jobTitle, experience, skills } = req.body;
  console.log("Backend Received Data:", req.body);

  if (!jobTitle || !experience || !skills.length) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // OpenAI prompt for resume
  const prompt = `Create a professional resume for the following:
  Job Title: ${jobTitle}
  Experience: ${experience} years
  Skills: ${skills.join(
    ", "
  )}Format the response as a resume with sections: Summary, Experience, Skills, and Education.`;

  openai.chat.completions
    .create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    })
    .then((response) => {
      // const generatedResume = response.choices[0].text.trim();
      const generatedResume = response.choices[0].message.content.trim();
      console.log("Generated Resume:", generatedResume);
      // Check if the generated resume is empty
      if (!generatedResume) {
        return res.status(500).json({ error: "Failed to generate resume" });
      }

      // Save the resume in MongoDB
      const newResume = new Resume({
        jobTitle,
        experience,
        skills,
        content: generatedResume,
      });

      newResume
        .save()
        .then(() => {
          res.json({ resume: generatedResume });
        })
        .catch((error) => {
          console.error("Error saving resume:", error);
          res.status(500).json({ error: "Failed to save resume" });
        });
    })
    .catch((error) => {
      console.error("Error generating resume:", error);
      res.status(500).json({ error: "Failed to generate resume" });
    });
};
