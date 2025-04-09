const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-500">Contact</h2>
        <p className="text-gray-600 mt-2">
          Have any questions or feedback? Get in touch with me
        </p>

        {/* Contact Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold mt-3">Email</h3>
            <a
              href="mailto:yatharthgiri187@gmail.com"
              className="text-blue-600 mt-2 text-sm text-center"
            >
              yatharthgiri187@gmail.com
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold mt-3">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/yatharth-raj-giri-b51579287/"
              className="text-blue-600 mt-2 text-sm text-center"
            >
              Yatharth Giri
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold mt-3">Phone</h3>
            <p className="text-gray-600 mt-2 text-sm text-center">7065365105</p>
          </div>
        </div>

        <div className="mt-12 px-8 md:px-8 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-blue-600 mb-6">
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
                <div>
                  <label className="block text-start text-gray-700 text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-start text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-start text-gray-700 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-blue-600 mb-6">
                  Find Me Here
                </h3>
                <p className="text-gray-600 mb-4">
                  Let's meet or collaborate. You can find me at this location!
                </p>
              </div>
              <iframe
                className="w-full h-96 rounded-xl shadow-md border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153169!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7f4f8b1e7e!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1614311234567!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
