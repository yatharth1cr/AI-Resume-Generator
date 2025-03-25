import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Home = () => {
  const [generatedResume, setGeneratedResume] = useState("");

  // Validation schema using Yup
  const validationSchema = Yup.object({
    jobTitle: Yup.string().required("Job title is required"),
    experience: Yup.number()
      .typeError("Experience must be a number")
      .min(0, "Experience cannot be negative")
      .required("Experience is required"),
    skills: Yup.string().required("Skills are required"),
  });

  const handleGenerate = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/openai/generate-resume",
        {
          jobTitle: values.jobTitle,
          experience: values.experience,
          skills: values.skills.split(",").map((skill) => skill.trim()), // Convert skills string to array
        }
      );
      setGeneratedResume(response.data.resume);
    } catch (error) {
      console.error("Error generating resume:", error);
      setGeneratedResume("Failed to generate resume. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">AI Resume Generator</h1>

      <Formik
        initialValues={{ jobTitle: "", experience: "", skills: "" }}
        validationSchema={validationSchema}
        onSubmit={handleGenerate}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col items-center">
            <div className="mb-3">
              <Field
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="border p-2 m-2 w-80"
              />
              <ErrorMessage
                name="jobTitle"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="mb-3">
              <Field
                type="number"
                name="experience"
                placeholder="Years of Experience"
                className="border p-2 m-2 w-80"
              />
              <ErrorMessage
                name="experience"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <div className="mb-3">
              <Field
                type="text"
                name="skills"
                placeholder="Skills (comma-separated)"
                className="border p-2 m-2 w-80"
              />
              <ErrorMessage
                name="skills"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-600 w-80 text-white px-4 py-2 mt-4 rounded cursor-pointer hover:bg-orange-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Generating..." : "Generate Resume"}
            </button>
          </Form>
        )}
      </Formik>

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
