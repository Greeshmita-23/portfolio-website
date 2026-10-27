
function GithubStats() {
  return (
    <section
      id="github"
      className="px-6 py-20 bg-[#101a16] text-[#f0f5f1] sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635] mb-3">
            Open Source
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold">
            GitHub Statistics
          </h2>

          <p className="mt-4 text-[#aab8af] max-w-2xl mx-auto">
            My coding activity, contribution streak, and journey
            building projects on GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl border border-[#304438] bg-[#17251e] p-3 sm:p-5 transition duration-300 hover:border-[#a3e635]/60">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Greeshmita-23&theme=github_dark"
              alt="GitHub profile summary and contribution activity"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>

          <div className="rounded-2xl border border-[#304438] bg-[#17251e] p-3 sm:p-5 flex items-center justify-center transition duration-300 hover:border-[#a3e635]/60">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Greeshmita-23&theme=tokyonight"
              alt="GitHub contribution streak statistics"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://github.com/Greeshmita-23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-[#a3e635] px-6 py-3 text-sm font-semibold text-[#a3e635] transition duration-300 hover:bg-[#a3e635] hover:text-[#101a16]"
          >
            Explore My GitHub
            <span className="ml-2" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default GithubStats;
