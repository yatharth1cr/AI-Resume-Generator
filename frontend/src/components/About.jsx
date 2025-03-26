import React from "react";

const About = () => {
  return (
    <section className="bg-white text-gray-900 py-24  px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-orange-600">AI</span>
          Resume Generator
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          AI Resume Generator is an advanced tool designed to help you create
          professional, optimized resumes effortlessly. Using cutting-edge AI
          technology, it tailors your resume to highlight your skills,
          experience, and achievements, ensuring you stand out in the job
          market.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          Whether you're a fresher or an experienced professional, our
          AI-powered solution simplifies resume creation, making the process
          quick, efficient, and impactful. Get started today and build a resume
          that gets noticed!
        </p>
      </div>
    </section>
  );
};

export default About;
