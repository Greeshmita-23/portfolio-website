import {
  FaUserGraduate,
  FaLaptopCode,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaUserGraduate size={35} />,
      title: "Education",
      text: "B.Tech in Computer Science\n2021 – 2025 | CGPA: 8.4/10",
    },
    {
      icon: <FaLaptopCode size={35} />,
      title: "Software Development",
      text: "Full Stack Development, React.js, JavaScript, Java, Python, Flask, Node.js, Express.js & REST APIs.",
    },
    {
      icon: <FaCloud size={35} />,
      title: "AI & Cloud",
      text: "Machine Learning, Scikit-learn, Pandas, NumPy, AWS and Google Cloud with hands-on project experience.",
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Security & Quality",
      text: "Security testing, vulnerability assessment, penetration testing, threat detection and secure application development.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center mb-4">
          About Me
        </h2>

        {/* Introduction */}
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-14 leading-8">
          I am a Computer Science graduate with hands-on experience in
          full-stack development, Artificial Intelligence, machine learning,
          cloud computing, and cybersecurity. I enjoy building practical,
          scalable, and user-friendly software solutions using modern
          technologies. My interests include software quality, automation,
          AI-driven solutions, and solving real-world problems through
          technology while continuously expanding my technical skills.
        </p>

        {/* About Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card) => (

            <div
              key={card.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl duration-300"
            >

              {/* Icon */}
              <div className="text-blue-600 mb-5">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line leading-7">
                {card.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default About;