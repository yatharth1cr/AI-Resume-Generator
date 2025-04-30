import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const darkMode = useSelector((state) => state.darkMode.enabled);

  const contactCardClasses = `p-6 rounded-xl shadow-md flex flex-col items-center ${
    darkMode ? "bg-gray-800" : "bg-white"
  }`;

  const inputClasses = `w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400 ${
    darkMode ? "bg-gray-700 border-gray-600 text-white" : "border-gray-300"
  }`;

  return (
    <section
      id="contact"
      className={`py-20 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold ${
              darkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            Contact
          </h2>
          <p className="mt-2 text-base">
            Have any questions or feedback? Get in touch with me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <div className="grid grid-cols-1 md:grid-rows-3 gap-6">
            {[
              {
                title: "Email",
                content: (
                  <a
                    href="mailto:yatharthgiri187@gmail.com"
                    className="text-blue-400 mt-2 text-sm text-center"
                  >
                    yatharthgiri187@gmail.com
                  </a>
                ),
              },

              {
                title: "LinkedIn",
                content: (
                  <a
                    href="https://www.linkedin.com/in/yatharth-raj-giri-b51579287/"
                    className="text-blue-400 mt-2 text-sm text-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yatharth Giri
                  </a>
                ),
              },
              {
                title: "X",
                content: (
                  <a
                    href="https://x.com/Yatharthgiri108"
                    className="text-blue-400 mt-2 text-sm text-center"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @Yatharthgiri108
                  </a>
                ),
              },
            ].map(({ title, content }) => (
              <div key={title} className={contactCardClasses}>
                <h3 className="text-lg font-semibold mt-3">{title}</h3>
                <p className="mt-2 text-sm text-center">{content}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="../../assets/contact.svg"
              alt="Contact Us"
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`p-8 rounded-2xl shadow-lg border ${
              darkMode
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
                console.log({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message"),
                });
              }}
            >
              {["Name", "Email", "Message"].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-medium mb-2">
                    {label}
                  </label>
                  {label === "Message" ? (
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      className={inputClasses}
                      required
                    ></textarea>
                  ) : (
                    <input
                      type={label.toLowerCase()}
                      name={label.toLowerCase()}
                      placeholder={`Your ${label}`}
                      className={inputClasses}
                      required
                    />
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

          {/* Map */}
          <div
            className={`p-8 rounded-2xl shadow-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <h3 className="text-3xl font-bold text-green-500 mb-6">
              Find Me Here
            </h3>
            <p className="mb-4">
              Let&apos;s meet or collaborate. You can find me at this location!
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
