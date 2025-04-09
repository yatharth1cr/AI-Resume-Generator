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
              className="text-gray-600 mt-2 text-sm text-center"
            >
              yatharthgiri187@gmail.com
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold mt-3">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/yatharthgiri/"
              className="text-gray-600 mt-2 text-sm text-center"
            >
              linkedin.com/in/yatharthgiri
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-semibold mt-3">Phone</h3>
            <p className="text-gray-600 mt-2 text-sm text-center">
              +91-1234567890
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Send a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Follow Me
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-4">
            Find Me Here
          </h3>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9537353153169!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d7f4f8b1e7e!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1614311234567!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
