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
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-500">Features</h2>
        <p className="text-gray-600 mt-2">
          Everything you need to create the perfect resume
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-8">
          {features.map(({ title, description, icon, comingSoon }, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center relative ${
                comingSoon ? "opacity-60" : ""
              }`}
            >
              <span className="text-4xl">{icon}</span>
              <h3 className="text-lg font-semibold mt-3">{title}</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">
                {description}
              </p>
              {comingSoon && (
                <span className="absolute top-2 right-2 bg-yellow-300 text-yellow-800 text-xs px-2 py-1 rounded-full">
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
