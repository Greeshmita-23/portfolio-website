import { Briefcase, GraduationCap, ShieldCheck, Brain } from "lucide-react";

function Experience() {
  const timeline = [
    {
      year: "2021 - 2025",
      title: "B.Tech - Computer Science & Cybersecurity",
      company: "KL University",
      description:
        "Pursuing Bachelor's degree in Computer Science & Cybersecurity with hands-on experience in software development, cloud computing, artificial intelligence and cybersecurity.",
      icon: <GraduationCap size={24} />,
    },

    {
      year: "May 2023 - Sep 2023",
      title: "Cybersecurity Intern",
      company: "Cisco AICTE Virtual Internship Program",
      description:
        "Performed network traffic analysis using Wireshark and Nmap, studied vulnerability assessment, penetration testing, cloud security and cybersecurity best practices through practical labs.",
      icon: <ShieldCheck size={24} />,
    },

    {
      year: "AUG 2025 - JAN 2026",
      title: "Data Science & Artificial Intelligence Training",
      company: "Digital Edify",
      description:
        "Completed professional training in Python, Machine Learning, Deep Learning, Data Science, Pandas, NumPy, Scikit-learn and AI model development with hands-on projects.",
      icon: <Brain size={24} />,
    },

    {
      year: "2026 - Present",
      title: "Full Stack & AI Projects",
      company: "Personal Projects",
      description:
        "Built several portfolio projects including SentinelRx, FoodieHub MERN, Portfolio Website, Student Result Management System and AI-powered applications using React, Node.js, Flask and MongoDB.",
      icon: <Briefcase size={24} />,
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <h2 className="text-5xl font-bold text-center mb-4 dark:text-white">
        Experience & Education
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16">
        My academic journey, internship experience and professional training in
        Software Development, Artificial Intelligence and Cybersecurity.
      </p>

      <div className="max-w-5xl mx-auto relative">

        {/* Timeline */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-600 transform -translate-x-1/2 hidden md:block"></div>

        {timeline.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            } justify-center`}
          >
            <div className="md:w-5/12 w-full bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">

              <div className="flex items-center gap-3 text-blue-600 mb-3">
                {item.icon}
                <h3 className="text-2xl font-bold dark:text-white">
                  {item.title}
                </h3>
              </div>

              <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                {item.company}
              </h4>

              <p className="text-blue-600 font-bold mt-2">
                {item.year}
              </p>

              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
                {item.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;