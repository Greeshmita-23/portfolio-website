
import Modal from "react-modal";
import {
  X,
  Code2,
  Sparkles,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

Modal.setAppElement("#root");

function ProjectModal({ isOpen, onClose, project }) {
  if (!project) return null;

  const hasLiveDemo = project.demo && project.demo !== "#";

  const features = [
    "Responsive user interface",
    "Clean and maintainable code structure",
    "Project-specific functionality",
    "GitHub source code available",
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel={project.title + " project details"}
      className="relative mx-auto my-4 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#30483a] bg-[#17251e] p-5 text-[#f0f5f1] shadow-2xl outline-none sm:my-8 sm:p-8"
      overlayClassName="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 px-3 py-4 backdrop-blur-sm sm:px-6"
    >
      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#a3e635]/30 bg-[#a3e635]/10 px-3 py-1.5 text-xs font-semibold text-[#c5f58b]">
            <Sparkles size={14} />
            Project Details
          </span>

          <h2 className="text-2xl font-bold leading-tight text-[#f0f5f1] sm:text-3xl">
            {project.title}
          </h2>

          {project.category && (
            <p className="mt-2 text-sm text-[#aebfb2]">
              {project.category}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="shrink-0 rounded-xl border border-[#30483a] p-2.5 text-[#bdcbc1] transition hover:border-[#a3e635]/50 hover:bg-[#203529] hover:text-[#c5f58b] focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
        >
          <X size={20} />
        </button>
      </div>

      {/* Project image */}
      <div className="overflow-hidden rounded-xl border border-[#30483a] bg-[#101a16]">
        <img
          src={project.image}
          alt={project.title + " project preview"}
          className="max-h-80 w-full object-contain p-3 sm:p-5"
        />
      </div>

      {/* Description */}
      <section className="mt-6">
        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#c5f58b]">
          <Code2 size={19} />
          About This Project
        </h3>

        <p className="text-sm leading-7 text-[#bdcbc1] sm:text-base">
          {project.description}
        </p>
      </section>

      {/* Technologies */}
      <section className="mt-7">
        <h3 className="mb-3 text-lg font-semibold text-[#c5f58b]">
          Technologies Used
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
      </section>

      {/* Project highlights */}
      <section className="mt-7">
        <h3 className="mb-3 text-lg font-semibold text-[#c5f58b]">
          Project Highlights
        </h3>

        <ul className="grid gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm leading-6 text-[#bdcbc1]"
            >
              <CheckCircle2
                size={17}
                className="mt-1 shrink-0 text-[#a3e635]"
              />
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Action buttons */}
      <div className="mt-8 flex flex-wrap gap-3 border-t border-[#30483a] pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#a3e635] px-5 py-3 text-sm font-semibold text-[#101a16] transition hover:bg-[#c5f58b] focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
          >
            <FaGithub size={18} />
            View on GitHub
            <ExternalLink size={14} />
          </a>
        )}

        {hasLiveDemo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#3c5948] px-5 py-3 text-sm font-semibold text-[#e1eae3] transition hover:border-[#a3e635] hover:bg-[#203529] hover:text-[#c5f58b] focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
          >
            <ExternalLink size={17} />
            Live Demo
          </a>
        )}

        <button
          type="button"
          onClick={onClose}
          className="ml-auto rounded-xl border border-[#30483a] px-5 py-3 text-sm font-semibold text-[#bdcbc1] transition hover:bg-[#203529] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProjectModal;
