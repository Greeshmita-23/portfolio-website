import { useState } from "react";
import {
  Calendar,
  Building2,
  ExternalLink,
  Award,
  BookOpen,
} from "lucide-react";

import awsImg from "../assets/certificates/aws.png";
import googleImg from "../assets/certificates/google-cloud.png";
import jnciaImg from "../assets/certificates/jncia.png";
import ciscoImg from "../assets/certificates/cisco.png";
import dataScienceImg from "../assets/certificates/datascience.png";
import powerBIImg from "../assets/certificates/powerbi.png";
import automationImg from "../assets/certificates/automation-anywhere.png";

import CertificateModal from "./CertificateModal";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      category: "Cloud Computing",
      image: awsImg,
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      year: "2024",
      category: "Cloud Computing",
      image: googleImg,
    },
    {
      title: "JNCIA-Junos",
      issuer: "Juniper Networks",
      year: "2025",
      category: "Networking",
      image: jnciaImg,
    },
    {
      title: "Cisco AICTE Cybersecurity Internship",
      issuer: "Cisco Networking Academy",
      year: "2023",
      category: "Cybersecurity",
      image: ciscoImg,
    },
    {
      title: "Data Science & Artificial Intelligence",
      issuer: "Digital Edify",
      year: "2025",
      category: "Course",
      image: dataScienceImg,
    },
    {
      title: "Power BI",
      issuer: "Digital Edify",
      year: "2025",
      category: "Course",
      image: powerBIImg,
    },
    {
      title: "Automation Anywhere Essentials RPA Professional",
      issuer: "Automation Anywhere",
      year: "2023",
      category: "Automation",
      image: automationImg,
    },
  ];

  return (
    <section
      id="certificates"
      className="scroll-mt-20 bg-[#0c1511] px-6 py-20 text-[#f0f5f1] sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#a3e635]">
            Learning & Professional Development
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Certifications <span className="text-[#a3e635]">&</span> Courses
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#a3e635]" />

          <p className="mt-7 text-base leading-8 text-[#bdcbc1] sm:text-lg">
            Certifications and technical training across cloud computing,
            networking, cybersecurity, artificial intelligence, analytics,
            and automation.
          </p>
        </div>

        {/* Certificate cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <article
              key={cert.title}
              className="group overflow-hidden rounded-2xl border border-[#30483a] bg-[#17251e] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[#a3e635]/50 hover:bg-[#1b2d23] hover:shadow-xl hover:shadow-black/20"
            >
              {/* Certificate image */}
              <div className="relative overflow-hidden bg-[#101a16]">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  loading="lazy"
                  className="h-56 w-full object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#a3e635]/25 bg-[#101a16]/95 px-3 py-1.5 text-xs font-semibold text-[#c5f58b]">
                    {cert.category === "Course" ? (
                      <BookOpen size={13} />
                    ) : (
                      <Award size={13} />
                    )}
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Certificate details */}
              <div className="flex h-full flex-col p-6">
                <h3 className="text-xl font-bold leading-snug text-[#f0f5f1] transition-colors group-hover:text-[#c5f58b]">
                  {cert.title}
                </h3>

                <div className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#bdcbc1]">
                  <Building2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#a3e635]"
                  />
                  <span>{cert.issuer}</span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-[#a9baae]">
                  <Calendar
                    size={16}
                    className="shrink-0 text-[#a3e635]"
                  />
                  <span>{cert.year}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(cert)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#a3e635]/30 bg-[#a3e635]/10 px-5 py-3 font-semibold text-[#c5f58b] transition hover:border-[#a3e635] hover:bg-[#a3e635] hover:text-[#101a16] focus:outline-none focus:ring-2 focus:ring-[#a3e635] focus:ring-offset-2 focus:ring-offset-[#17251e]"
                >
                  <ExternalLink size={17} />
                  View Certificate
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Closing note */}
        <div className="mt-14 text-center">
          <p className="text-sm leading-7 text-[#a9baae]">
            Continuously expanding my technical knowledge through learning,
            hands-on practice, and professional development.
          </p>
        </div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={selectedCertificate !== null}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}

export default Certificates;
