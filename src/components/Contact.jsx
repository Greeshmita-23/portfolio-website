import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center dark:text-white">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 mb-16">
          I'm always open to internship opportunities, full-time roles,
          collaborations, and exciting software development projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <Mail
              size={42}
              className="mx-auto text-red-500 mb-5"
            />

            <h3 className="text-2xl font-bold mb-3 dark:text-white">
              Email
            </h3>

            <a
              href="mailto:greeshmita.bhogadi@gmail.com"
              className="text-blue-600 hover:underline break-all"
            >
              greeshmita.bhogadi@gmail.com
            </a>

          </div>

          {/* GitHub */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <FaGithub
              className="mx-auto text-[42px] mb-5"
            />

            <h3 className="text-2xl font-bold mb-3 dark:text-white">
              GitHub
            </h3>

            <a
              href="https://github.com/Greeshmita-23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/Greeshmita-23
            </a>

          </div>

          {/* LinkedIn */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300">

            <FaLinkedin
              className="mx-auto text-[42px] text-blue-600 mb-5"
            />

            <h3 className="text-2xl font-bold mb-3 dark:text-white">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/greeshmita-bhogadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/greeshmita-bhogadi
            </a>

          </div>

        </div>

        {/* Location */}
        <div className="mt-16 flex justify-center items-center gap-2 text-lg text-gray-700 dark:text-gray-300">

          <MapPin
            size={22}
            className="text-red-500"
          />

          <span>Andhra Pradesh, India</span>

        </div>

      </div>
    </section>
  );
}

export default Contact;