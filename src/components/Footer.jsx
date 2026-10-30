
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, ArrowUp, Download } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#101a16] border-t border-[#304438] px-6 py-10 text-[#f0f5f1] sm:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">
              Greeshmita <span className="text-[#a3e635]">Bhogadi.</span>
            </h2>
            <p className="mt-2 text-sm text-[#aab8af]">
              Full Stack Developer | Software Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/Greeshmita-23"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[#a3e635] transition hover:text-white"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/greeshmita-bhogadi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#a3e635] transition hover:text-white"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="mailto:greeshmita.bhogadi@gmail.com"
              aria-label="Email"
              className="text-[#a3e635] transition hover:text-white"
            >
              <Mail size={22} />
            </a>

          </div>

          {/* Resume Download */}
          <a
            href="/Greeshmita_Resume.pdf"
            download="Greeshmita_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-[#405346] px-5 py-2.5 text-sm font-semibold transition hover:border-[#a3e635] hover:text-[#a3e635]"
          >
            <Download size={17} />
            Download Resume
          </a>

        </div>

        <div className="mt-10 border-t border-[#304438] pt-6 text-center">

          <p className="text-sm text-[#aab8af]">
            © {new Date().getFullYear()} Greeshmita Bhogadi.
            All rights reserved.
          </p>

          <p className="mt-2 text-xs text-[#718078]">
            Designed & Developed with passion.
          </p>

        </div>

        {/* Back to Top */}
        <motion.a
          href="#home"
          whileHover={{ y: -4 }}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#a3e635] text-[#101a16] shadow-lg transition hover:bg-[#bef264]"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.a>

      </div>
    </footer>
  );
}

export default Footer;
