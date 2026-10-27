
import { Download, ExternalLink, FileText } from "lucide-react";

function Resume() {
  return (
    <section
      id="resume"
      className="bg-[#101a16] px-6 py-20 text-[#f0f5f1] sm:px-8"
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#304438] bg-[#17251e] p-8 text-center sm:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#26392d] text-[#a3e635]">
          <FileText size={32} />
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635]">
          Resume
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl">
          Let's Build Something Great
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#aab8af]">
          Interested in my background and projects? View my resume
          to learn more about my education, technical skills, and
          development experience.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="/resume.pdf"
            download="Greeshmita_Bhogadi_Resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#a3e635] px-6 py-3 font-bold text-[#101a16] transition hover:bg-[#bef264]"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/greeshmita-bhogadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#304438] px-6 py-3 font-semibold transition hover:border-[#a3e635] hover:text-[#a3e635]"
          >
            LinkedIn Profile
            <ExternalLink size={17} />
          </a>
        </div>

        <p className="mt-5 text-sm text-[#aab8af]">
          Make sure your latest PDF is saved as{" "}
          <span className="font-semibold text-[#f0f5f1]">
            resume.pdf
          </span>{" "}
          inside your project's public folder.
        </p>
      </div>
    </section>
  );
}

export default Resume;
