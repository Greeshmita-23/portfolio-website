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

function Skills() {
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

  return (
    <section
      id="skills"
      className="py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center mb-4">
          Technical Skills
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-14 max-w-4xl mx-auto">
          My technical expertise spans programming fundamentals, full-stack
          development, software testing, machine learning, cloud computing,
          databases, and cybersecurity.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-7 hover:-translate-y-3 hover:shadow-blue-300 duration-300"
            >

              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex items-center gap-4 text-lg"
                  >

                    <span className="text-2xl text-blue-600">
                      {skill.icon}
                    </span>

                    <span>
                      {skill.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;