import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white flex items-center justify-center px-8"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-2xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-7xl font-extrabold leading-tight mb-6">
            Greeshmita Bhogadi
          </h1>

          {/* Animated Roles */}
          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "AI & Automation Enthusiast",
              2000,
              "Cloud Enthusiast",
              2000,
              "Open to Work",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-4xl font-bold text-yellow-300"
          />

          {/* Introduction */}
          <p className="mt-8 text-xl leading-10 text-gray-200 max-w-xl">
            I am a Computer Science graduate with hands-on experience in
            full-stack development, Artificial Intelligence, machine learning,
            cloud computing, and cybersecurity. I enjoy building practical,
            scalable, and user-friendly software solutions using modern
            technologies. I am particularly interested in software quality,
            automation, AI-driven solutions, and solving real-world problems
            through technology.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:scale-105 transition duration-300 shadow-lg"
            >
              Download Resume
            </a>

            {/* Projects */}
            <a
              href="#projects"
              className="border-2 border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition duration-300"
            >
              View Projects
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-3xl mt-10">

            {/* GitHub */}
            <a
              href="https://github.com/Greeshmita-23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-yellow-300 hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/greeshmita-bhogadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-300 hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>

            {/* Email */}
            <a
              href="mailto:greeshmita.bhogadi@gmail.com"
              aria-label="Email"
              className="hover:text-yellow-300 hover:scale-110 transition duration-300"
            >
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <img
            src="/profile.png"
            alt="Greeshmita Bhogadi"
            className="w-96 h-96 rounded-full border-8 border-white shadow-2xl object-cover hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;