import React from "react";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="max-w-4xl mx-auto py-24 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">
          Contact Me
        </h2>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="mailto:leorohi10@gmail.com"
            className="text-blue-600 hover:text-blue-800 flex items-center space-x-2 text-xl"
          >
            <i className="fas fa-envelope text-2xl"></i>
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/rohis10iq/"
            className="text-blue-700 hover:text-blue-900 flex items-center space-x-2 text-xl"
          >
            <i className="fab fa-linkedin text-2xl"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/rohis10iq"
            className="text-pink-600 hover:text-pink-800 flex items-center space-x-2 text-xl"
          >
            <i className="fab fa-instagram text-2xl"></i>
            <span>Instagram</span>
          </a>
          <a
            href="https://github.com/rohis10iq"
            className="text-gray-800 hover:text-gray-600 flex items-center space-x-2 text-xl"
          >
            <i className="fab fa-github text-2xl"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
