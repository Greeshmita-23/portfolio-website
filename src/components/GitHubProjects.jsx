import { useEffect, useState } from "react";

function GitHubProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Greeshmita-23/repos?sort=updated")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section
      id="github-projects"
      className="py-20 bg-white px-8"
    >
      <h2 className="text-5xl font-bold text-center mb-14">
        GitHub Repositories
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-gray-100 rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold text-blue-600">
              {repo.name}
            </h3>

            <p className="mt-4 text-gray-600">
              {repo.description || "No description available."}
            </p>

            <div className="flex justify-between mt-6 text-sm">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
            </div>

            <div className="mt-6">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg"
              >
                View Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GitHubProjects;