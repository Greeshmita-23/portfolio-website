import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Sparkles, Code2 } from "lucide-react";

function FeaturedProject({ project }) {
  const hasLiveDemo = project.demo && project.demo !== "#";

  return (
    <section className="mb-16">
      <div className="overflow-hidden rounded-3xl border border-[#30483a] bg-[#17251e] shadow-2xl shadow-black/20 transition duration-300 hover:border-[#a3e635]/50">
        <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-12">
          {/* Project image */}
          <div className="flex justify-center">
            <div className="w-full overflow-hidden rounded-2xl border border-[#30483a] bg-[#0c1511]">
              <img
                src={project.image}
                alt={project.title + " project preview"}
                loading="lazy"
                className="h-64 w-full object-contain p-3 sm:h-80 lg:h-[360px]"
              />
            </div>
          </div>

          {/* Project details */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#a3e635]/30 bg-[#a3e635]/10 px-4 py-2 text-sm font-semibold text-[#c5f58b]">
              <Sparkles size={16} />
              Featured Project
            </span>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-[#f0f5f1] sm:text-4xl lg:text-5xl">
              {project.title}
            </h2>

            <p className="mb-7 text-base leading-8 text-[#bdcbc1] sm:text-lg">
              {project.description}
            </p>

            {/* Technology stack */}
            <div className="mb-8">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#a3e635]">
                <Code2 size={17} />
                Built With
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#3c5948] bg-[#101a16] px-3 py-2 text-sm font-medium text-[#e1eae3]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project links */}
            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#a3e635] px-5 py-3 font-semibold text-[#101a16] transition duration-300 hover:bg-[#c5f58b] focus:outline-none focus:ring-2 focus:ring-[#a3e635] focus:ring-offset-2 focus:ring-offset-[#17251e]"
                >
                  <FaGithub size={18} />
                  View Source
                  <FaExternalLinkAlt size={13} />
                </a>
              )}

              {hasLiveDemo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#3c5948] px-5 py-3 font-semibold text-[#e1eae3] transition duration-300 hover:border-[#a3e635] hover:bg-[#101a16] hover:text-[#c5f58b] focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
                >
                  <FaExternalLinkAlt size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProject;
