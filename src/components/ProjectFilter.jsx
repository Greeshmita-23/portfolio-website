function ProjectFilter({ category, setCategory }) {
  const filters = [
    "All",
    "Frontend",
    "MERN Stack",
    "Machine Learning",
    "Full Stack",
  ];

  return (
    <div
      className="mb-10 flex flex-wrap justify-center gap-3"
      role="group"
      aria-label="Filter projects by category"
    >
      {filters.map((item) => {
        const isActive = category === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={isActive}
            className={
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#a3e635] focus:ring-offset-2 focus:ring-offset-[#101a16] " +
              (isActive
                ? "border-[#a3e635] bg-[#a3e635] text-[#101a16] shadow-md shadow-[#a3e635]/10"
                : "border-[#30483a] bg-[#17251e] text-[#d5e2d8] hover:border-[#a3e635]/60 hover:bg-[#203529] hover:text-[#c5f58b]")
            }
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilter;
