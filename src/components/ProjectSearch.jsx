import { Search, X } from "lucide-react";

function ProjectSearch({ search, setSearch }) {
  return (
    <div className="mb-8 flex justify-center px-1">
      <div className="relative w-full max-w-md">
        <label htmlFor="project-search" className="sr-only">
          Search projects by name, technology, or description
        </label>

        <Search
          size={19}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a3e635]"
        />

        <input
          id="project-search"
          type="search"
          placeholder="Search projects or technologies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-[#30483a] bg-[#17251e] py-3.5 pl-12 pr-12 text-sm text-[#f0f5f1] shadow-sm outline-none transition placeholder:text-[#8fa497] hover:border-[#45644f] focus:border-[#a3e635] focus:ring-2 focus:ring-[#a3e635]/20"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear project search"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#bdcbc1] transition hover:bg-[#30483a] hover:text-[#c5f58b] focus:outline-none focus:ring-2 focus:ring-[#a3e635]"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectSearch;
