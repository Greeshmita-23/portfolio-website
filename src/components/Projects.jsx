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
    {
      title: "SentinelRx",
      image: sentinelImg,
      description:
        "AI-powered healthcare application that predicts medication adherence using privacy-preserving and adversarially robust machine learning.",
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

    {
      title: "Student Result Management System",
      image: studentImg,
      description:
        "Web application for managing student marks, grades, reports and academic performance.",
      tech: [
        "Python",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github:
        "https://github.com/Greeshmita-23/student-result-management-system",
      demo: "#",
      category: "Full Stack",
      featured: false,
    },

    {
      title: "FoodieHub Frontend",
      image: foodieImg,
      description:
        "Responsive React food ordering frontend with restaurant listings, favorites, cart and checkout UI.",
      tech: [
        "React",
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

    {
      title: "FoodieHub-v2",
      image: foodieV2Img,
      description:
        "Full Stack food ordering platform with authentication, cart, checkout and MongoDB backend.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github:
        "https://github.com/Greeshmita-23/FoodieHub-v2",
      demo: "#",
      category: "MERN Stack",
      featured: false,
    },

    {
      title: "Portfolio Website",
      image: portfolioImg,
      description:
        "Modern developer portfolio built with React, Tailwind CSS, Framer Motion, EmailJS and GitHub integration.",
      tech: [
        "React",
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

  const featuredProject = projects.find(
    (project) => project.featured
  );

  const filteredProjects = projects.filter((project) => {
  const matchesCategory =
    category === "All" || project.category === category;

  const matchesSearch =
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.tech.some((tech) =>
      tech.toLowerCase().includes(search.toLowerCase())
    );

  if (category === "All") {
    return matchesCategory && matchesSearch && !project.featured;
  }

  return matchesCategory && matchesSearch;
});

  return (
  <section
    id="projects"
    className="py-20 bg-gray-100 dark:bg-gray-900 px-6"
  >
    <div className="max-w-7xl mx-auto">

      <h2 className="text-5xl font-bold text-center mb-4">
        Featured Projects
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
        A collection of projects showcasing my expertise in Frontend Development,
        Full Stack Development, Machine Learning, Artificial Intelligence,
        Cloud Computing and Cybersecurity.
      </p>

      {/* Show Featured Project ONLY when All is selected */}
      {category === "All" && featuredProject && (
        <FeaturedProject project={featuredProject} />
      )}

      {/* Search */}
      <ProjectSearch
        search={search}
        setSearch={setSearch}
      />

      {/* Filter */}
      <ProjectFilter
        category={category}
        setCategory={setCategory}
      />

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8 mt-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onView={setSelectedProject}
          />
        ))}
      </div>

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