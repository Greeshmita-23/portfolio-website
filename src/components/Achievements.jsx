import {
  Award,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Cloud,
  Brain,
  Laptop,
  Network,
} from "lucide-react";

function Achievements() {
  const achievements = [
  {
    title: "8.4 CGPA",
    description: "B.Tech in Computer Science & Cybersecurity",
    icon: <GraduationCap size={40} />,
    color: "from-indigo-500 to-purple-600",
  },

  {
    title: "7 Professional Certifications",
    description:
      "AWS • Google Cloud • JNCIA • Cisco • AI • Power BI • Automation Anywhere",
    icon: <Award size={40} />,
    color: "from-yellow-500 to-orange-500",
  },

  {
    title: "5+ Major Projects",
    description:
      "SentinelRx, FoodieHub, Portfolio, Student Result Management System & AI Applications",
    icon: <Briefcase size={40} />,
    color: "from-green-500 to-emerald-600",
  },

  {
    title: "Cisco AICTE Intern",
    description:
      "Completed a 5-month Cybersecurity Virtual Internship Program",
    icon: <ShieldCheck size={40} />,
    color: "from-blue-500 to-cyan-600",
  },

  {
    title: "Cloud Computing",
    description:
      "AWS Certified Cloud Practitioner & Google Cloud Associate Cloud Engineer",
    icon: <Cloud size={40} />,
    color: "from-sky-500 to-blue-600",
  },

  {
    title: "Artificial Intelligence",
    description:
      "Completed Data Science & AI Training with practical Machine Learning projects",
    icon: <Brain size={40} />,
    color: "from-pink-500 to-rose-600",
  },

  {
    title: "Full Stack Developer",
    description:
      "React • Node.js • Express.js • MongoDB • Flask • Tailwind CSS",
    icon: <Laptop size={40} />,
    color: "from-teal-500 to-green-600",
  },

  {
    title: "Networking & Security",
    description:
      "JNCIA-Junos Certified with hands-on experience in Wireshark & Nmap",
    icon: <Network size={40} />,
    color: "from-violet-500 to-indigo-600",
  },
];

  return (
    <section
      id="achievements"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Achievements
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-16">
          Highlights of my academic journey, certifications, technical skills,
          and project experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {achievements.map((item, index) => (

            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden"
            >

              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

              <div className="p-8 text-center">

                <div className="flex justify-center text-blue-600 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;