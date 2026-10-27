import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Code2, ArrowUpRight } from "lucide-react";

function ProjectCard({ project, onView }) {
  const hasLiveDemo = project.demo && project.demo !== "#";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#292f2b] bg-[#171c19] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-black/30">
      {/* Project image */}
      <div className="relative overflow-hidden border-b border-[#292f2b] bg-[#101311]">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="h-52 w-full object-contain p-4 transition duration-500 group-hover:scale-[1.03] sm:h-60"
        />

        <span className="absolute left-4 top-4 rounded-full border border-emerald-400/30 bg-[#0b0d0c]/95 px-3 py-1.5 text-xs font-semibold text-emerald-200">
          {project.category}
        </span>
      </div>

      {/* Project content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-3 text-xl font-bold leading-snug text-[#f5f7f6] transition-colors group-hover:text-emerald-200 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mb-6 flex-1 text-sm leading-7 text-[#a5aca8]">
          {project.description}
        </p>

        {/* Technology stack */}
        <div className="mb-6">
          <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <Code2 size={15} />
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">
            {(project.tech || []).map((item) => (
              <span
                key={item}
                className="rounded-md border border-[#303832] bg-[#101311] px-3 py-1.5 text-xs font-medium text-[#c8d0ca]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-auto flex flex-wrap gap-2.5 border-t border-[#292f2b] pt-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-200 px-4 py-2.5 text-sm font-semibold text-[#0b0d0c] transition hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <FaGithub size={17} />
              GitHub
              <FaExternalLinkAlt size={11} />
            </a>
          )}

          {hasLiveDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} live demo`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#39413c] px-4 py-2.5 text-sm font-semibold text-[#e1e7e2] transition hover:border-emerald-400 hover:bg-[#202824] hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <FaExternalLinkAlt size={13} />
              Live Demo
            </a>
          )}

          <button
            type="button"
            onClick={() => onView(project)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#39413c] px-4 py-2.5 text-sm font-semibold text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-400/10 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Details
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;