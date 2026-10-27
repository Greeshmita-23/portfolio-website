import {
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Code2,
  CalendarDays,
  MapPin,
} from "lucide-react";

const timeline = [
  {
    type: "Experience",
    year: "Apr 2026 – Oct 2026",
    title: "Full Stack Developer Intern",
    company: "Db4cloud Technologies",
    location: "Hyderabad, Telangana, India · Hybrid",
    description:
      "Gained practical exposure to web application development and software engineering practices during a six-month internship.",
    responsibilities: [
      "Assisted in developing and maintaining web applications.",
      "Worked with frontend technologies, backend frameworks, databases, and APIs.",
      "Participated in software testing, debugging, and troubleshooting.",
      "Followed coding standards and project requirements.",
      "Collaborated with team members on development tasks.",
      "Completed assigned tasks and provided progress updates.",
      "Followed company confidentiality requirements.",
    ],
    icon: Briefcase,
  },
  {
    type: "Projects",
    year: "2026 – Present",
    title: "Selected Projects",
    company: "Personal Projects",
    description:
      "Building software projects including SentinelRx, FoodieHub, and Student Result Management System using web technologies, backend frameworks, databases, and AI/ML techniques.",
    icon: Code2,
  },
  {
    type: "Experience",
    year: "May 2023 – Sep 2023",
    title: "Cybersecurity Intern",
    company: "Cisco AICTE Virtual Internship Program",
    description:
      "Gained practical exposure to network traffic analysis, vulnerability assessment, threat detection, and cybersecurity practices through virtual labs.",
    responsibilities: [
      "Analyzed network traffic using Wireshark and Nmap.",
      "Learned vulnerability assessment and penetration-testing concepts.",
      "Explored system protection and cloud security fundamentals.",
      "Studied threat detection, risk mitigation, and security best practices.",
    ],
    icon: ShieldCheck,
  },
  {
    type: "Education",
    year: "2021 – 2025",
    title: "B.Tech in Computer Science & Cybersecurity",
    company: "KL University",
    description:
      "Built a foundation in programming, computer science, software development, cloud computing, artificial intelligence, and information security.",
    icon: GraduationCap,
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-[#101a16] px-6 py-20 text-[#f0f5f1] sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635]">
            My professional journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Experience <span className="text-[#a3e635]">&</span> Education
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#a3e635]" />

          <p className="mt-7 text-base leading-8 text-[#bdcbc1] sm:text-lg">
            My internships, academic background, and selected projects
            showcase my growth in full-stack development, AI, cloud
            technologies, and cybersecurity.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-5 top-8 w-px bg-[#315442] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={item.title}
                  className={
                    "relative pl-14 md:w-1/2 md:pl-0 " +
                    (isLeft
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12")
                  }
                >
                  <div
                    aria-hidden="true"
                    className={
                      "absolute left-0 top-7 z-10 flex h-10 w-10 " +
                      "items-center justify-center rounded-full border " +
                      "border-[#a3e635]/40 bg-[#17251e] text-[#a3e635] " +
                      "shadow-lg shadow-black/20 md:left-auto " +
                      (isLeft ? "md:right-[-20px]" : "md:left-[-20px]")
                    }
                  >
                    <Icon size={19} />
                  </div>

                  <div className="w-full rounded-2xl border border-[#30483a] bg-[#17251e] p-6 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#a3e635]/50 hover:bg-[#1b2d23] sm:p-7">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full border border-[#a3e635]/20 bg-[#a3e635]/10 px-3 py-1 text-xs font-semibold text-[#c5f58b]">
                        {item.type}
                      </span>

                      <span className="inline-flex items-center gap-2 text-sm text-[#a9baae]">
                        <CalendarDays
                          size={14}
                          className="shrink-0 text-[#a3e635]"
                        />
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-[#f0f5f1] sm:text-2xl">
                      {item.title}
                    </h3>

                    <h4 className="mt-2 font-semibold text-[#a3e635]">
                      {item.company}
                    </h4>

                    {item.location && (
                      <p className="mt-2 flex items-start gap-2 text-sm text-[#a9baae]">
                        <MapPin
                          size={15}
                          className="mt-0.5 shrink-0 text-[#a3e635]"
                        />
                        <span>{item.location}</span>
                      </p>
                    )}

                    <p className="mt-4 text-sm leading-7 text-[#bdcbc1] sm:text-base">
                      {item.description}
                    </p>

                    {item.responsibilities && (
                      <div className="mt-5">
                        <h5 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#e1eae3]">
                          Key Responsibilities
                        </h5>

                        <ul className="space-y-3">
                          {item.responsibilities.map((responsibility) => (
                            <li
                              key={responsibility}
                              className="flex items-start gap-3 text-sm leading-6 text-[#bdcbc1]"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a3e635]" />
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center gap-3 text-center text-sm text-[#a9baae]">
          <Briefcase size={17} className="text-[#a3e635]" />
          Continuously learning, building, and growing as a developer.
        </div>
      </div>
    </section>
  );
}

export default Experience;