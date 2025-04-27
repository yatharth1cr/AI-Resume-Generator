import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkMode.enabled);

  return (
    <section
      className={`py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is{" "}
            <span className="bg-gradient-to-r from-green-500 to-gray-500 bg-clip-text text-transparent animate-pulse">
              AI Resume Generator
            </span>
            ?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Say goodbye to boring templates and hours spent formatting!
            <span className="text-green-600 dark:text-green-400 font-semibold">
              {" "}
              AI Resume Generator
            </span>{" "}
            helps you craft professional, job-ready resumes in just minutes.
            Powered by intelligent suggestions, it tailors your resume to
            highlight your top skills, experience, and achievements.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Whether you're just starting out or looking to land your next big
            role, our AI-driven tool streamlines the resume-building process —
            making it faster, smarter, and way more effective.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Try It Now
          </button>
        </div>

        {/* Illustration */}
        <div className="flex-1">
          <img
            src="/assets/AboutUs.svg"
            alt="AI Resume Illustration"
            className={`w-full max-w-md mx-auto ${darkMode ? "invert" : ""}`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
