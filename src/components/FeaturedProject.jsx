import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function FeaturedProject({ project }) {
  return (
    <section className="mb-24">
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-3xl shadow-2xl overflow-hidden">

        <div className="grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-12">

          {/* Left Side - Project Image */}
          <div className="flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-xl h-[340px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Right Side - Project Details */}
          <div>

            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-5">
              ⭐ Featured Project
            </span>

            <h2 className="text-5xl font-bold text-white mb-6">
              {project.title}
            </h2>

            <p className="text-lg text-gray-100 leading-8 mb-8">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition duration-300"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProject;