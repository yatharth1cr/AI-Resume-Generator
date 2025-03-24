import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [generatedResume, setGeneratedResume] = useState("");

  const handleGenerate = async () => {
    const response = await axios.post(
      "http://localhost:5000/api/openai/generate-resume",
      {
        jobTitle,
        experience,
        skills: skills.split(","),
      }
    );
    setGeneratedResume(response.data.resume);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">AI Resume Generator</h1>
      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="border p-2 m-2 w-80"
      />
      <input
        type="number"
        placeholder="Years of Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="border p-2 m-2 w-80"
      />
      <input
        type="text"
        placeholder="Skills (comma-separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="border p-2 m-2 w-80"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Generate Resume
      </button>
      {generatedResume && (
        <div className="bg-white p-4 mt-4 w-96 shadow-md">
          <h2 className="text-lg font-bold">Generated Resume</h2>
          <p>{generatedResume}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
