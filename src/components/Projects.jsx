import { useState } from "react";

import portfolioImg from "../assets/images/portfolio.png";
import studentImg from "../assets/images/student.png";
import sentinelImg from "../assets/images/sentinelrx.png";
import foodieImg from "../assets/images/foodiehub.png";
import foodieV2Img from "../assets/images/foodiehubv2.png";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import ProjectSearch from "./ProjectSearch";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const projects = [
    // ⭐ FEATURED PROJECT
    {
      title: "SentinelRx",
      image: sentinelImg,
      description:
        "Security-first machine learning pipeline for medication-adherence prediction featuring dataset integrity auditing, target-leakage detection, model evaluation, adversarial robustness testing, privacy defenses, and explainability.",
      tech: [
        "Python",
        "Flask",
        "Machine Learning",
        "Scikit-learn",
        "Pandas",
        "NumPy",
      ],
      github: "https://github.com/Greeshmita-23/SentinelRx",
      demo: "#",
      category: "Machine Learning",
      featured: true,
    },

    // ⭐ SECOND — FULL STACK
    {
      title: "FoodieHub-v2",
      image: foodieV2Img,
      description:
        "Full-stack food delivery application with JWT authentication, restaurant management, order workflows, shopping cart, favorites, reviews, coupons, MongoDB integration, and RESTful APIs.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST APIs",
      ],
      github: "https://github.com/Greeshmita-23/FoodieHub-v2",
      demo: "#",
      category: "MERN Stack",
      featured: false,
    },

    // ⭐ THIRD — PYTHON + DATABASE
    {
      title: "Student Result & Grade Management System",
      image: studentImg,
      description:
        "Web-based student management application with attendance tracking, grade management, and PDF/chart-based academic performance reports using Flask and MySQL.",
      tech: [
        "Python",
        "Flask",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github:
        "https://github.com/Greeshmita-23/Student-Result-Management-System",
      demo: "#",
      category: "Full Stack",
      featured: false,
    },

    // OTHER PROJECT
    {
      title: "FoodieHub Frontend",
      image: foodieImg,
      description:
        "Responsive React food ordering frontend featuring restaurant listings, favorites, shopping cart, checkout interface, and client-side navigation.",
      tech: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
      ],
      github:
        "https://github.com/Greeshmita-23/FoodieHub-Frontend",
      demo: "#",
      category: "Frontend",
      featured: false,
    },

    // PORTFOLIO
    {
      title: "Personal Portfolio Website",
      image: portfolioImg,
      description:
        "Modern developer portfolio built with React, Tailwind CSS, Framer Motion, EmailJS, and GitHub integration, deployed through Vercel.",
      tech: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "EmailJS",
      ],
      github:
        "https://github.com/Greeshmita-23/portfolio-website",
      demo: "#",
      category: "Frontend",
      featured: false,
    },
  ];

  // Featured project
  const featuredProject = projects.find(
    (project) => project.featured
  );

  // Search + category filtering
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      category === "All" || project.category === category;

    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase())
      );

    // When "All" is selected, don't duplicate
    // the featured SentinelRx project in the grid.
    if (category === "All") {
      return (
        matchesCategory &&
        matchesSearch &&
        !project.featured
      );
    }

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
          A collection of projects showcasing my experience in
          full-stack development, machine learning, artificial
          intelligence, REST APIs, cloud computing, cybersecurity,
          and software development.
        </p>

        {/* Featured SentinelRx */}
        {category === "All" && featuredProject && (
          <FeaturedProject project={featuredProject} />
        )}

        {/* Search */}
        <ProjectSearch
          search={search}
          setSearch={setSearch}
        />

        {/* Category Filter */}
        <ProjectFilter
          category={category}
          setCategory={setCategory}
        />

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mt-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onView={setSelectedProject}
            />
          ))}
        </div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}

export default Projects;