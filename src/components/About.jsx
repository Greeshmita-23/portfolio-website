
import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaBrain, FaCloud } from "react-icons/fa";

const interests = [
  {
    icon: FaCode,
    title: "Full Stack Development",
    description: "Building responsive and user-friendly web applications.",
  },
  {
    icon: FaShieldAlt,
    title: "Cybersecurity",
    description: "Exploring secure systems, threat detection, and data protection.",
  },
  {
    icon: FaBrain,
    title: "AI & Machine Learning",
    description: "Developing intelligent solutions through data and AI.",
  },
  {
    icon: FaCloud,
    title: "Cloud & Automation",
    description: "Learning scalable cloud technologies and workflow automation.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-[#101a16] px-6 py-24 text-[#f0f5f1] sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635]">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About <span className="text-[#a3e635]">Me</span>
          </h2>

          <div className="mt-5 h-1 w-16 rounded-full bg-[#a3e635]" />
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Professional introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-[#304438] bg-[#17251e] p-7 sm:p-9"
          >
            <h3 className="mb-5 text-xl font-semibold sm:text-2xl">
              My Journey in Technology
            </h3>

            <div className="space-y-4 text-base leading-8 text-[#b8c7bd] sm:text-lg">
              <p>
                I’m a Computer Science and Cybersecurity graduate with a
                strong interest in building scalable web applications and
                exploring intelligent, secure technology solutions.
              </p>

              <p>
                My work with frontend and backend development, databases,
                and Python-based projects has helped me strengthen my
                practical problem-solving and software development skills.
              </p>

              <p>
                I’m also passionate about Artificial Intelligence, cloud
                technologies, cybersecurity, and automation. Through
                hands-on projects and continuous learning, I aim to expand
                my technical expertise and turn ideas into practical
                solutions.
              </p>

              <p>
                I’m eager to contribute to meaningful projects, collaborate
                with innovative teams, and grow as a software developer.
              </p>
            </div>

            <div className="mt-8 border-t border-[#304438] pt-6">
              <p className="text-sm font-medium leading-7 text-[#a3e635]">
                Curious by nature. Driven by learning. Focused on building
                meaningful technology.
              </p>
            </div>
          </motion.div>

          {/* Areas of interest */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {interests.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group flex gap-4 rounded-2xl border border-[#304438] bg-[#17251e]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#a3e635]/50 hover:bg-[#1b2c22]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#a3e635]/10 text-xl text-[#a3e635] transition group-hover:bg-[#a3e635]/15">
                  <Icon />
                </div>

                <div>
                  <h4 className="mb-1 font-semibold text-[#f0f5f1]">
                    {title}
                  </h4>

                  <p className="text-sm leading-6 text-[#aab8af]">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
