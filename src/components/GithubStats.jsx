function GithubStats() {
  return (
    <section
      id="github"
      className="py-20 bg-white px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        GitHub Statistics
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <img
  src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Greeshmita-23&theme=github_dark"
  alt="GitHub Profile Summary"
  className="rounded-xl shadow-xl w-full"
/>

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=Greeshmita-23&theme=tokyonight"
          alt="GitHub Streak"
          className="rounded-xl shadow-xl"
        />

      </div>
    </section>
  );
}

export default GithubStats;