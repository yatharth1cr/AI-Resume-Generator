import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const GeneratedResume = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [sections, setSections] = useState({});

  useEffect(() => {
    const resume = state?.resume || "";

    const parseSection = (sectionName) => {
      const regex = new RegExp(`## ${sectionName}\\n+([\\s\\S]+?)(?=\\n##|$)`);
      return resume.match(regex)?.[1]?.trim() || "";
    };

    const parsed = {
      header: "Generated Resume",
      contact: parseSection("Contact Information"),
      summary: parseSection("Professional Summary"),
      skills: parseSection("Key Technical Skills"),
      experience: parseSection("Work Experience"),
      projects: parseSection("Projects"),
      education: parseSection("Education & Certifications"),
    };

    setSections(parsed);
  }, [state?.resume]);

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <header className="mt-14 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
          {sections.header}
        </h1>
        <p className="text-gray-500 text-lg">{sections.contact}</p>
      </header>

      <motion.div
        className="bg-white rounded-lg shadow-md p-6 space-y-8 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sections.summary && (
          <TypewriterSection
            title="Professional Summary"
            content={sections.summary}
          />
        )}
        {sections.skills && (
          <TypewriterSection
            title="Key Technical Skills"
            content={sections.skills}
          />
        )}
        {sections.experience && (
          <TypewriterSection
            title="Work Experience"
            content={sections.experience}
          />
        )}
        {sections.projects && (
          <TypewriterSection title="Projects" content={sections.projects} />
        )}
        {sections.education && (
          <TypewriterSection title="Education" content={sections.education} />
        )}

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition"
          >
            Generate Again
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const TypewriterSection = ({ title, content }) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
      <Typewriter
        words={[content]}
        loop={1}
        cursor
        cursorStyle="|"
        typeSpeed={25}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </p>
  </div>
);

export default GeneratedResume;
