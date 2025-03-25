const features = [
  {
    title: "AI-Powered Resume",
    description:
      "Generate professional resumes instantly with AI-driven suggestions.",
    icon: "📝",
  },
  {
    title: "Cover Letter Generator",
    description:
      "Create tailored cover letters in seconds to match your resume.",
    icon: "✉️",
  },
  {
    title: "Customizable Templates",
    description: "Choose from multiple designs and formats to suit your needs.",
    icon: "🎨",
  },
  {
    title: "Instant Download",
    description: "Download your resume as a PDF with just one click.",
    icon: "📥",
  },
];

const Feature = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500">Features</h2>
        <p className="text-gray-600 mt-2">
          Everything you need to create the perfect resume
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <span className="text-4xl">{feature.icon}</span>
              <h3 className="text-lg font-semibold mt-3">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-sm text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
