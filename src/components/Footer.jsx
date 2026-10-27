
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowUpRight, Download } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#101a16] px-6 py-24 text-[#f0f5f1] sm:px-8"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#a3e635]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#a3e635]/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#a3e635]"
        >
          Welcome to My Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Greeshmita <span className="text-[#a3e635]">Bhogadi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 min-h-[84px] max-w-3xl text-xl font-semibold leading-relaxed text-[#d0dbd2] sm:text-2xl md:min-h-[44px]"
        >
          <TypeAnimation
            sequence={[
              "I'm a Software Developer",
              1800,
              "I'm a Full Stack Developer",
              1800,
              "I'm interested in Cybersecurity",
              1800,
              "I explore AI & Machine Learning",
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#a3e635] px-7 py-3.5 font-bold text-[#101a16] transition duration-300 hover:bg-[#bef264] sm:w-auto"
          >
            Explore My Work
            <ArrowUpRight size={19} />
          </a>

          <a
            href="/resume.pdf"
            download="Greeshmita_Bhogadi_Resume.pdf"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#405346] px-7 py-3.5 font-semibold text-[#f0f5f1] transition duration-300 hover:border-[#a3e635] hover:text-[#a3e635] sm:w-auto"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#aab8af]">
            Connect With Me
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Greeshmita-23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#304438] text-[#a3e635] transition hover:border-[#a3e635] hover:bg-[#17251e]"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/greeshmita-bhogadi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#304438] text-[#a3e635] transition hover:border-[#a3e635] hover:bg-[#17251e]"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="mailto:greeshmita.bhogadi@gmail.com"
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#304438] text-[#a3e635] transition hover:border-[#a3e635] hover:bg-[#17251e]"
            >
              <Mail size={21} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
