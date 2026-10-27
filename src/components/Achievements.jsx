
import { Award, Code2, ShieldCheck, GraduationCap } from "lucide-react";

const achievements = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Internship",
    description:
      "Completed the Cisco AICTE Virtual Internship Program, gaining exposure to network analysis, vulnerability assessment, and security practices.",
    label: "Professional Learning",
  },
  {
    icon: Code2,
    title: "Full Stack Development Projects",
    description:
      "Built projects involving frontend interfaces, backend APIs, database integration, and application functionality.",
    label: "Project Milestone",
  },
  {
    icon: Award,
    title: "AI & Data Science Learning",
    description:
      "Developed knowledge of AI, data science, and data visualization through technical learning and practical work.",
    label: "Technical Learning",
  },
  {
    icon: GraduationCap,
    title: "Computer Science Graduate",
    description:
      "Completed a B.Tech in Computer Science and Cybersecurity at KL University in 2025.",
    label: "Education",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-[#101a16] px-6 py-20 text-[#f0f5f1] sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635]">
            My Journey
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Achievements & Milestones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#aab8af]">
            Highlights from my education, technical learning, and
            software development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#304438] bg-[#17251e] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#a3e635]/70"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#26392d] text-[#a3e635]">
                  <Icon size={24} />
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#a3e635]">
                  {item.label}
                </p>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#aab8af]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
