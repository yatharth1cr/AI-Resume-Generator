import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const jobTitleValidation = Yup.string().required("Job title is required");
  const experienceValidation = Yup.number()
    .typeError("Experience must be a number")
    .min(0, "Experience cannot be negative")
    .required("Experience is required");
  const skillsValidation = Yup.string().required("Skills are required");

  const handleGenerate = async (values, { setSubmitting }) => {
    setError("");
    const formattedSkills = values.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/generate-resume",
        {
          jobTitle: values.jobTitle,
          experience: values.experience,
          skills: formattedSkills,
        }
      );

      navigate("/generated-resume", {
        state: { resume: response.data.resume },
      });
    } catch (error) {
      setError(
        error.response?.data?.error ||
          "Failed to generate resume. Try again later."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        <span className="text-blue-600">AI</span> Resume Generator
      </h1>

      <Formik
        initialValues={{ jobTitle: "", experience: "", skills: "" }}
        validationSchema={Yup.object({
          jobTitle: jobTitleValidation,
          experience: experienceValidation,
          skills: skillsValidation,
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

            <button
              type="submit"
              className="bg-blue-600 w-full text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Generating..." : "Generate Resume"}
            </button>
          </Form>
        )}
      </Formik>

      {error && (
        <div className="text-red-600 mt-4 bg-white p-2 rounded-md shadow-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default Home;
