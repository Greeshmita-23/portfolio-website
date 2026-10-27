
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming & CS",
    skills: [
      { icon: "☕", name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: "🧠", name: "Data Structures & Algorithms" },
      { icon: "🔷", name: "Object-Oriented Programming" },
      { icon: "💡", name: "Problem Solving" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiFlask />, name: "Flask" },
      { icon: "🔗", name: "REST APIs" },
      { icon: "🔐", name: "JWT Authentication" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    title: "Software Testing & Security",
    skills: [
      { icon: "🧪", name: "Software Testing" },
      { icon: "🔍", name: "Security Testing" },
      { icon: "🛡️", name: "Vulnerability Assessment" },
      { icon: "⚠️", name: "Penetration Testing" },
      { icon: "🔎", name: "Threat Detection" },
      { icon: "🧩", name: "Root Cause Analysis" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { icon: <SiScikitlearn />, name: "Scikit-learn" },
      { icon: <SiPandas />, name: "Pandas" },
      { icon: <SiNumpy />, name: "NumPy" },
      { icon: "🤖", name: "Machine Learning" },
    ],
  },
  {
    title: "Cloud",
    skills: [
      { icon: <FaAws />, name: "AWS" },
      { icon: "☁️", name: "Google Cloud" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <FaGitAlt />, name: "Git & GitHub" },
      { icon: "💻", name: "VS Code" },
      { icon: "🛡️", name: "Wireshark" },
      { icon: "📡", name: "Nmap" },
      { icon: "🐧", name: "Linux" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-[#0c1511] px-6 py-20 text-[#f0f5f1] sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635]">
            Technologies I work with
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Technical <span className="text-[#a3e635]">Skills</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#a3e635]" />

          <p className="mt-7 text-base leading-8 text-[#bdcbc1] sm:text-lg">
            My technical skills span programming fundamentals, full-stack
            development, software testing, machine learning, cloud computing,
            databases, and cybersecurity.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-[#30483a] bg-[#17251e] p-7 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#a3e635]/50 hover:shadow-xl hover:shadow-black/20"
            >
              <h3 className="mb-6 border-b border-[#30483a] pb-4 text-xl font-bold leading-snug text-[#a3e635] sm:text-2xl">
                {category.title}
              </h3>

              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start gap-4 text-base leading-6 text-[#e1eae3] sm:text-lg"
                  >
                    <span className="mt-0.5 flex w-7 shrink-0 justify-center text-xl text-[#a3e635]">
                      {skill.icon}
                    </span>

                    <span className="min-w-0 break-words">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
