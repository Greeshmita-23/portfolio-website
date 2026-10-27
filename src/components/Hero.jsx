import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0b0d0c] px-6 pb-16 pt-28 text-white sm:px-10 lg:px-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_40%,rgba(52,211,153,0.12),transparent_38%)]" />

      <div className="pointer-events-none absolute right-[10%] top-[20%] h-72 w-72 rounded-full bg-emerald-400/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            <span className="h-px w-8 bg-emerald-400" />
            Developer Portfolio / 2026
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Greeshmita
            <span className="mt-2 block bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
              Bhogadi.
            </span>
          </h1>

          <div className="mt-6 text-lg font-medium text-gray-300 sm:text-xl">
            I build{" "}
            <span className="text-emerald-300">
              <TypeAnimation
                sequence={[
                  "digital experiences",
                  1800,
                  "full-stack applications",
                  1800,
                  "AI-powered ideas",
                  1800,
                  "secure technology",
                  1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            <span className="text-emerald-400">_</span>
          </div>

          {/* Smaller introduction paragraph */}
          <p className="mt-4 max-w-md text-[13px] leading-[1.65] text-gray-400 sm:text-sm">
            Computer Science and Cybersecurity graduate exploring full-stack
            development, intelligent systems, and secure digital experiences.
            I enjoy turning ideas into practical projects and continuously
            learning new technologies.
          </p>

          {/* Action buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-100 px-5 py-3 text-sm font-semibold text-[#0b0d0c] transition hover:bg-emerald-200"
            >
              Explore My Work <FiArrowUpRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              download="Greeshmita_Bhogadi_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-emerald-300 hover:text-emerald-300"
            >
              <FiDownload size={16} /> Download Resume
            </a>
          </div>

          {/* Social links */}
          <div className="mt-7 flex flex-wrap items-center gap-5 text-sm text-gray-400">
            <a
              href="https://github.com/Greeshmita-23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-emerald-300"
            >
              <FiGithub size={17} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/greeshmita-bhogadi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-emerald-300"
            >
              <FiLinkedin size={17} /> LinkedIn
            </a>

            <a
              href="mailto:greeshmita.bhogadi@gmail.com"
              className="inline-flex items-center gap-2 transition hover:text-emerald-300"
            >
              <FiMail size={17} /> Email
            </a>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative order-1 mx-auto w-full max-w-[280px] sm:max-w-sm lg:order-2 lg:max-w-md"
        >
          <div className="absolute -inset-3 rounded-[48%_48%_18px_18px] border border-emerald-300/10" />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_18px_18px] border border-white/15 bg-[#171c19] shadow-2xl shadow-black/40">
            <img
              src="/profile.png"
              alt="Greeshmita Bhogadi"
              className="h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0c]/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-5 hidden rounded-xl border border-white/10 bg-[#171c19] px-5 py-4 shadow-xl sm:block">
            <p className="text-xs text-gray-400">Graduation</p>
            <p className="mt-1 text-sm font-semibold text-emerald-300">
              B.Tech · 2025
            </p>
          </div>

          <div className="absolute -right-4 top-10 hidden rounded-xl border border-white/10 bg-[#171c19] px-4 py-3 shadow-xl sm:block">
            <p className="text-xs text-gray-400">Focus</p>
            <p className="mt-1 text-sm font-semibold text-white">
              Full Stack · AI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;