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
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-green-500 dark:text-green-400">
          Features
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Everything you need to create the perfect resume
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-6">
          {features.map(({ title, description, icon, comingSoon }, index) => (
            <div
              key={index}
              className={`relative p-6 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              } ${comingSoon ? "opacity-60" : ""}`}
            >
              <span className="text-4xl">{icon}</span>
              <h3 className="text-lg font-semibold mt-4">{title}</h3>
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">
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
