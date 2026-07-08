import { FaUserGraduate, FaLaptopCode, FaCloud, FaShieldAlt } from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaUserGraduate size={35} />,
      title: "Education",
      text: "B.Tech in Computer Science & Cybersecurity\nCGPA: 8.4/10",
    },
    {
      icon: <FaLaptopCode size={35} />,
      title: "Development",
      text: "Frontend, Full Stack Development, React.js, JavaScript, Python & Flask.",
    },
    {
      icon: <FaCloud size={35} />,
      title: "Cloud & AI",
      text: "AWS Cloud, Machine Learning, Scikit-learn, Pandas, NumPy.",
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Cybersecurity",
      text: "Networking, Wireshark, Nmap, Linux, Secure Application Development.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-4">
          About Me
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-14">
          I am a Computer Science & Cybersecurity undergraduate passionate
          about building scalable web applications, AI-powered systems,
          cloud solutions, and secure software. I enjoy solving real-world
          problems through technology while continuously learning and
          improving my development skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card) => (

            <div
              key={card.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl duration-300"
            >

              <div className="text-blue-600 mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
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