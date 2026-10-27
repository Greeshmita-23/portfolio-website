
import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { ExternalLink, RefreshCw } from "lucide-react";

function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRepos() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          "https://api.github.com/users/Greeshmita-23/repos?sort=updated&per_page=6",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch repositories");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid repository response");
        }

        setRepos(data.filter((repo) => !repo.fork));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(true);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="github-projects"
      className="px-6 py-20 bg-[#101a16] text-[#f0f5f1] sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635] mb-3">
            Explore My Code
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            GitHub Repositories
          </h2>

          <p className="mt-4 text-[#aab8af] max-w-2xl mx-auto">
            A collection of my development projects, experiments,
            and hands-on learning.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12 text-[#aab8af]">
            Loading repositories...
          </div>
        )}

        {error && (
          <div className="text-center py-10 rounded-2xl border border-[#304438] bg-[#17251e]">
            <p className="text-[#f0f5f1]">
              GitHub repositories could not be loaded right now.
            </p>

            <a
              href="https://github.com/Greeshmita-23?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-[#a3e635] hover:underline"
            >
              Browse repositories directly
              <ExternalLink size={16} />
            </a>
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="text-center py-10 text-[#aab8af]">
            No public repositories found.
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <article
                key={repo.id}
                className="group flex flex-col rounded-2xl border border-[#304438] bg-[#17251e] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a3e635]/70 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#26392d] text-[#a3e635]">
                    <FaGithub size={22} />
                  </div>

                  <span className="rounded-full border border-[#304438] px-3 py-1 text-xs text-[#aab8af]">
                    Public
                  </span>
                </div>

                <h3 className="mt-5 break-words text-xl font-bold text-[#f0f5f1] transition group-hover:text-[#a3e635]">
                  {repo.name.replace(/-/g, " ")}
                </h3>

                <p className="mt-3 flex-grow text-sm leading-6 text-[#aab8af]">
                  {repo.description || "Explore this repository on GitHub to learn more about the project."}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#aab8af]">
                  {repo.language && (
                    <span className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#a3e635]" />
                      {repo.language}
                    </span>
                  )}

                  <span className="flex items-center gap-2">
                    <FaStar className="text-[#a3e635]" />
                    {repo.stargazers_count}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaCodeBranch />
                    {repo.forks_count}
                  </span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#a3e635] px-5 py-3 text-sm font-bold text-[#101a16] transition hover:bg-[#bef264]"
                >
                  View Repository
                  <ExternalLink size={16} />
                </a>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Greeshmita-23?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#304438] px-6 py-3 font-semibold text-[#f0f5f1] transition hover:border-[#a3e635] hover:text-[#a3e635]"
          >
            <FaGithub size={18} />
            View All Repositories
            <RefreshCw size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default GitHubProjects;
