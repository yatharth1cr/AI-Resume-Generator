const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Access from .env
  })
);

const generateResume = (req, res) => {
  const { prompt } = req.body;

  openai
    .createCompletion({
      model: "gpt-4",
      prompt: `Generate a professional resume based on: ${prompt}`,
      max_tokens: 500,
    })
    .then((response) => {
      res.json({ resume: response.data.choices[0].text });
    })
    .catch((error) => {
      console.error("OpenAI API Error:", error);
      res.status(500).json({ error: "Failed to generate resume" });
    });
};

module.exports = { generateResume };
