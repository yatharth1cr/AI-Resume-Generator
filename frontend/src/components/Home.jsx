import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // State to manage error messages
  const navigate = useNavigate();

  // State to manage error messages
  const [error, setError] = useState("");

  // Validation schema for form fields
  const jobTitleValidation = Yup.string().required("Job title is required");
  const experienceValidation = Yup.number()
    .typeError("Experience must be a number")
    .min(0, "Experience cannot be negative")
    .required("Experience is required");
  const skillsValidation = Yup.string()
    .required("Skills are required")
    .min(2, "Skills must be at least 2 characters long")
    .max(200, "Skills must be at most 200 characters long");
  const educationValidation = Yup.string()
    .required("Education is required")
    .min(2, "Education must be at least 2 characters long")
    .max(100, "Education must be at most 100 characters long");

  // Function to handle form submission
  const handleGenerate = (values, { setSubmitting }) => {
    setError("");
    const formattedSkills = values.skills
      .split(",")
      .map((skill) => skill.trim());

    // Make a POST request to the backend API to generate the resume
    axios
      .post("http://localhost:5000/api/generate-resume", {
        jobTitle: values.jobTitle,
        experience: values.experience,
        skills: formattedSkills,
        education: values.education,
      })
      .then((response) => {
        navigate("/generated-resume", {
          state: { resume: response.data.resume },
        });
      })
      .catch((error) => {
        setError(
          error.response?.data?.error ||
            "Failed to generate resume. Try again later."
        );
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        <span className="text-green-600">AI</span> Resume Generator
      </h1>

      <Formik
        initialValues={{
          jobTitle: "",
          experience: "",
          skills: "",
          education: "",
        }}
        validationSchema={Yup.object({
          jobTitle: jobTitleValidation,
          experience: experienceValidation,
          skills: skillsValidation,
          education: educationValidation,
        })}
        onSubmit={handleGenerate}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-md bg-white p-6 shadow-md rounded-md">
            <div className="mb-4">
              <Field
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="border p-2 w-full rounded-md"
              />
              <ErrorMessage
                name="jobTitle"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="mb-4">
              <Field
                type="number"
                name="experience"
                placeholder="Years of Experience"
                className="border p-2 w-full rounded-md"
              />
              <ErrorMessage
                name="experience"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="mb-4">
              <Field
                type="text"
                name="skills"
                placeholder="Skills (comma-separated)"
                className="border p-2 w-full rounded-md"
              />
              <ErrorMessage
                name="skills"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="mb-4">
              <Field
                type="text"
                name="education"
                placeholder="Education"
                className="border p-2 w-full rounded-md"
              />
              <ErrorMessage
                name="education"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 w-full text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50 cursor-pointer"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Generating..." : "Generate Resume"}
            </button>
          </Form>
        )}
      </Formik>

      {/* Error message display */}
      {error && (
        <div className="text-red-600 mt-4 bg-white p-2 rounded-md shadow-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default Home;
