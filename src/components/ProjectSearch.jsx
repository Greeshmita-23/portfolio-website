function ProjectSearch({ search, setSearch }) {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search Projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 px-5 py-3 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default ProjectSearch;