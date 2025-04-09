import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useLocation, useNavigate } from "react-router-dom";

const GeneratedResume = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [content, setContent] = useState(state?.resume || "");

  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8">
      <header className="mt-14 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          Your Resume
        </h1>
      </header>

      <motion.div
        className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content ? (
          <div className="text-gray-700 space-y-4 text-lg leading-relaxed">
            <Typewriter
              words={[content]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={10}
            />
          </div>
        ) : (
          <p className="text-center text-gray-500">No resume data available.</p>
        )}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-pointer transition duration-300 ease-in-out"
          >
            Generate Again
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default GeneratedResume;
