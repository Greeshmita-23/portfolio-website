function ProjectFilter({ category, setCategory }) {
  const filters = [
    "All",
    "Frontend",
    "MERN Stack",
    "Machine Learning",
    "Full Stack",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-full transition ${
            category === item
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-blue-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilter;