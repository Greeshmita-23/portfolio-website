function Resume() {
  return (
    <section className="py-20 text-center bg-white">
      <h2 className="text-4xl font-bold mb-6">Resume</h2>

      <p className="mb-8">
        Download my latest resume.
      </p>

      <a
        href="/resume.pdf"
        download
        className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume;