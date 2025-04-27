import { useSelector } from "react-redux";

const features = [
  {
    title: "AI-Powered Resume",
    description:
      "Generate professional resumes instantly with AI-driven suggestions.",
    icon: "📝",
    comingSoon: false,
  },
  {
    title: "Cover Letter Generator",
    description:
      "Create tailored cover letters in seconds to match your resume.",
    icon: "✉️",
    comingSoon: true,
  },
  {
    title: "Customizable Templates",
    description: "Choose from multiple designs and formats to suit your needs.",
    icon: "🎨",
    comingSoon: true,
  },
  {
    title: "Instant Download",
    description: "Download your resume as a PDF with just one click.",
    icon: "📥",
    comingSoon: true,
  },
];

const Feature = () => {
  const darkMode = useSelector((state) => state.darkMode.enabled);

  return (
    <section
      id="features"
      className={`py-28 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-3xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          <span className="text-green-600">Key </span>Features
        </h2>
        <p className={`mt-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Everything you need to create the perfect resume
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-6">
          {features.map(({ title, description, icon, comingSoon }, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl shadow-md flex flex-col items-center transition-all duration-300
                ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} 
                ${comingSoon ? "opacity-70" : ""}
              `}
            >
              <span className="text-4xl">{icon}</span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p
                className={`mt-2 text-sm text-center ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {description}
              </p>

              {comingSoon && (
                <span className="absolute top-2 right-2 bg-yellow-300 text-yellow-900 text-xs font-semibold px-2 py-0.5 rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
