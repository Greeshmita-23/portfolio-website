
import { useMemo, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectSearch from "./ProjectSearch";
import ProjectModal from "./ProjectModal";

import portfolioImg from "../assets/images/portfolio.png";
import studentImg from "../assets/images/student.png";
import sentinelImg from "../assets/images/sentinelrx.png";
import foodieImg from "../assets/images/foodiehub.png";
import foodieV2Img from "../assets/images/foodiehubv2.png";

const projects = [
  {
    title: "SentinelRx",
    category: "Machine Learning",
    description:
      "A privacy-preserving and adversarially robust machine learning project focused on medication adherence, with data leakage auditing, model evaluation, and security-focused defenses.",
    tech: [
      "Python",
      "Machine Learning",
      "Data Privacy",
      "Model Evaluation",
      "Security",
    ],
    image: sentinelImg,
    github: "https://github.com/Greeshmita-23/SentinelRx",
    demo: "#",
  },
  {
    title: "FoodieHub-v2",
    category: "MERN Stack",
    description:
      "A full-stack food discovery and ordering application built around a modern frontend, backend APIs, and database integration.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: foodieV2Img,
    github: "https://github.com/Greeshmita-23/FoodieHub-v2",
    demo: "#",
  },
  {
    title: "Student Result & Grade Management System",
    category: "Full Stack",
    description:
      "A student result management application for organizing student records, managing grades, calculating academic results, and presenting information through a dashboard.",
    tech: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    image: studentImg,
    github:
      "https://github.com/Greeshmita-23/Student-Result-Management-System",
    demo: "#",
  },
  {
    title: "FoodieHub Frontend",
    category: "Frontend",
    description:
      "A responsive restaurant discovery interface featuring food search, menu browsing, favorites, cart interactions, and a user-friendly layout.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    image: foodieImg,
    github: "https://github.com/Greeshmita-23/FoodieHub-Frontend",
    demo: "#",
  },
  {
    title: "Personal Portfolio Website",
    category: "Frontend",
    description:
      "A personal developer portfolio presenting selected projects, technical skills, education, experience, certifications, and contact information.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    image: portfolioImg,
    github: "https://github.com/Greeshmita-23/portfolio-website",
    demo: "#",
  },
];

function Projects() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const railRef = useRef(null);

  const filteredProjects = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        category === "All" || project.category === category;

      const searchableText = [
        project.title,
        project.description,
        project.category,
        ...project.tech,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        searchTerm === "" || searchableText.includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const openProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollProjects = (direction) => {
    if (!railRef.current) return;

    railRef.current.scrollBy({
      left: direction * railRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#0b0d0c] px-5 py-20 text-[#f5f7f6] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-4 py-2 text-xs font-semibold tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            MY PROJECT COLLECTION
          </span>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Projects worth{" "}
            <span className="text-[#a7f3d0]">exploring.</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a5aca8] sm:text-base">
            A selection of things I've built and explored across full-stack
            development, machine learning, and responsive web applications.
          </p>
        </div>

        {/* Search and filters */}
        <div className="mb-7 space-y-4">
          <ProjectSearch search={search} setSearch={setSearch} />

          <ProjectFilter
            category={category}
            setCategory={setCategory}
          />
        </div>

        {/* Shelf heading and controls */}
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Selected work
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              {category === "All" ? "Explore my projects" : category}
            </h3>

            <p className="mt-1 text-sm text-[#828b85]">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"} found
            </p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollProjects(-1)}
              aria-label="Scroll projects left"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-[#d7dfd9] transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => scrollProjects(1)}
              aria-label="Scroll projects right"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-[#d7dfd9] transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Netflix-inspired horizontal project shelf */}
        {filteredProjects.length > 0 ? (
          <div
            ref={railRef}
            className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-6 pt-2 [scrollbar-width:thin] [scrollbar-color:#34443a_transparent] sm:gap-5"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="w-[82vw] min-w-[260px] max-w-[340px] shrink-0 snap-start sm:w-[42vw] sm:max-w-[360px] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <div className="mb-3 flex items-center justify-between px-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#77847b]">
                    PROJECT / {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-[#b5c1b8]">
                    {project.category}
                  </span>
                </div>

                <div className="h-full overflow-hidden rounded-xl border border-white/10 bg-[#141815] transition duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-xl hover:shadow-black/30">
                  <ProjectCard
                    project={project}
                    onView={openProject}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-[#141815] px-6 py-14 text-center">
            <h3 className="text-xl font-semibold text-white">
              No projects found
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#a5aca8]">
              Try another keyword or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setCategory("All");
                setSearch("");
              }}
              className="mt-6 rounded-lg bg-[#d1fae5] px-5 py-3 text-sm font-semibold text-[#0b0d0c] transition hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Show all projects
            </button>
          </div>
        )}

        {/* GitHub link */}
        <div className="mt-8 border-t border-white/[0.08] pt-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-[#edf2ee]">
                Want to explore the code?
              </h3>
              <p className="mt-1 text-sm text-[#8d9991]">
                Visit my GitHub profile to explore repositories and project work.
              </p>
            </div>

            <a
              href="https://github.com/Greeshmita-23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.035] px-5 py-3 font-semibold text-[#e1e8e3] transition hover:border-emerald-300/40 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <FaGithub size={19} />
              Explore GitHub
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Keep the existing project detail modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeProject}
        project={selectedProject}
      />
    </section>
  );
}

export default Projects;
