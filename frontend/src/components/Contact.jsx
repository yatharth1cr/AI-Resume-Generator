import React from "react";

const Contact = ({ darkMode }) => {
  const isDark = darkMode;
  const contactCardClasses = `p-6 rounded-xl shadow-md flex flex-col items-center ${
    isDark ? "bg-gray-800" : "bg-white"
  }`;

  return (
    <section
      id="contact"
      className={`py-20 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${
              isDark ? "text-green-400" : "text-green-600"
            }`}
          >
            Contact
          </h2>
          <p className="mt-2 text-base">
            Have any questions or feedback? Get in touch with me.
          </p>
        </div>

        {/* Contact Info + Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <div className="grid grid-cols-1 md:grid-rows-3 gap-6">
            <div className={contactCardClasses}>
              <h3 className="text-lg font-semibold mt-3">Phone</h3>
              <p className="mt-2 text-sm text-center">7065365105</p>
            </div>

            <div className={contactCardClasses}>
              <h3 className="text-lg font-semibold mt-3">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/yatharth-raj-giri-b51579287/"
                className="text-blue-400 mt-2 text-sm text-center"
              >
                Yatharth Giri
              </a>
            </div>

            <div className={contactCardClasses}>
              <h3 className="text-lg font-semibold mt-3">Email</h3>
              <a
                href="mailto:yatharthgiri187@gmail.com"
                className="text-blue-400 mt-2 text-sm text-center"
              >
                yatharthgiri187@gmail.com
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="../../assets/contact.svg" // use imported image if needed
              alt="Contact Us"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`p-8 rounded-2xl shadow-lg border ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-3xl font-bold text-green-500 mb-6">
              Send a Message
            </h3>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");
                console.log({ name, email, message });
              }}
            >
              {["Name", "Email", "Message"].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-medium mb-2">
                    {label}
                  </label>
                  {label !== "Message" ? (
                    <input
                      type={label.toLowerCase()}
                      name={label.toLowerCase()}
                      placeholder={`Your ${label}`}
                      className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "border-gray-300"
                      }`}
                      required
                    />
                  ) : (
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      className={`w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${
                        isDark
                          ? "bg-gray-700 border-gray-600 text-white"
                          : "border-gray-300"
                      }`}
                      required
                    ></textarea>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div
            className={`p-8 rounded-2xl shadow-lg border ${
              isDark
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-3xl font-bold text-green-500 mb-6">
              Find Me Here
            </h3>
            <p className="mb-4">
              Let's meet or collaborate. You can find me at this location!
            </p>
            <iframe
              className="w-full h-96 rounded-xl shadow-md border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153169!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7f4f8b1e7e!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1614311234567!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
