import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Validation Schema
  const validationSchema = Yup.object({
    jobTitle: Yup.string().required("Job title is required"),
    experience: Yup.number()
      .typeError("Experience must be a number")
      .min(0, "Experience cannot be negative")
      .required("Experience is required"),
    skills: Yup.string()
      .required("Skills are required")
      .min(2, "Skills must be at least 2 characters long")
      .max(200, "Skills must be at most 200 characters long"),
    education: Yup.string()
      .required("Education is required")
      .min(2, "Education must be at least 2 characters long")
      .max(100, "Education must be at most 100 characters long"),
  });

  // Form Submission Handler
  const handleGenerate = (values, { setSubmitting }) => {
    setError("");
    const formattedSkills = values.skills
      .split(",")
      .map((skill) => skill.trim());

    // Send data to the backend
    axios
      .post("http://localhost:5000/api/generate-resume", {
        jobTitle: values.jobTitle,
        experience: values.experience,
        skills: formattedSkills,
        education: values.education,
      })
      .then((response) => {
        // Navigate to generated-resume page with response data
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg- rounded-xl shadg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="hidden md:block">
          <img
            src="src/assets/home.svg"
            alt="Resume Illustration"
            className="w-full h-auto"
          />
        </div>

        {/* Form */}
        <div>
          <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
            AI<span className="text-gray-800">Resume Generator</span>
          </h2>

          <Formik
            initialValues={{
              jobTitle: "",
              experience: "",
              skills: "",
              education: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleGenerate}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="jobTitle"
                  >
                    Job Title
                  </label>
                  <Field
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                    placeholder="e.g. Frontend Developer"
                  />
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="experience"
                  >
                    Years of Experience
                  </label>
                  <Field
                    type="number"
                    name="experience"
                    id="experience"
                    className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                    placeholder="e.g. 2"
                  />
                  <ErrorMessage
                    name="experience"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="skills"
                  >
                    Skills{" "}
                    <span className="text-gray-500">(comma-separated)</span>
                  </label>
                  <Field
                    type="text"
                    name="skills"
                    id="skills"
                    className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                    placeholder="e.g. React, JavaScript, Tailwind"
                  />
                  <ErrorMessage
                    name="skills"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="education"
                  >
                    Education
                  </label>
                  <Field
                    type="text"
                    name="education"
                    id="education"
                    className="border border-gray-300 p-2 w-full rounded-md focus:ring-2 focus:ring-green-400 outline-none"
                    placeholder="e.g. B.Tech in Computer Science"
                  />
                  <ErrorMessage
                    name="education"
                    component="div"
                    className="text-red-600 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-all duration-200 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Generating..." : "Generate Resume"}
                </button>
              </Form>
            )}
          </Formik>

          {error && (
            <div className="mt-4 text-red-600 bg-red-50 border border-red-200 rounded-md p-3 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
