
const Resume = () => {
  const resumePath = "/Greeshmita_Resume.pdf";

  return (
    <div>
      <h1>My Resume</h1>

      {/* View Resume */}
      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>

      {/* Download Resume */}
      <a
        href={resumePath}
        download="Greeshmita_Resume.pdf"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
