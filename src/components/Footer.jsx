import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Greeshmita Bhogadi
            </h2>

            <p className="text-gray-400 mt-2">
              Computer Science & Cybersecurity Graduate
            </p>

            <p className="text-gray-400">
              Full Stack • AI • Cloud • Cybersecurity
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-3xl">

            <a
              href="https://github.com/Greeshmita-23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/greeshmita-bhogadi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:greeshmita.bhogadi@gmail.com"
              className="hover:text-red-400 transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-3">

          <p>
            © {new Date().getFullYear()} Greeshmita Bhogadi. All Rights Reserved.
          </p>

          <p>
            Built with ❤️ using React.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;