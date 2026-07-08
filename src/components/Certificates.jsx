import { useState } from "react";
import { Calendar, Building2, ExternalLink } from "lucide-react";

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
      image: awsImg,
    },
    {
      title: "Google Cloud Associate Cloud Engineer",
      issuer: "Google Cloud",
      year: "2024",
      image: googleImg,
    },
    {
      title: "JNCIA-Junos",
      issuer: "Juniper Networks",
      year: "2025",
      image: jnciaImg,
    },
    {
      title: "Cisco AICTE Cybersecurity Internship",
      issuer: "Cisco Networking Academy",
      year: "2023",
      image: ciscoImg,
    },
    {
      title: "Data Science & Artificial Intelligence",
      issuer: "Digital Edify",
      year: "2025",
      image: dataScienceImg,
    },
    {
      title: "Power BI",
      issuer: "Digital Edify",
      year: "2025",
      image: powerBIImg,
    },
    {
      title: "Automation Anywhere Essentials RPA Professional",
      issuer: "Automation Anywhere",
      year: "2023",
      image: automationImg,
    },
  ];

  return (
    <section
      id="certificates"
      className="py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Certifications
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-14">
          Professional certifications validating my expertise in Cloud,
          Networking, Cybersecurity, Artificial Intelligence,
          Analytics and Automation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((cert) => (

            <div
              key={cert.title}
              className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-blue-600">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 mt-4 text-gray-600 dark:text-gray-300">
                  <Building2 size={18} />
                  {cert.issuer}
                </div>

                <div className="flex items-center gap-2 mt-2 text-gray-600 dark:text-gray-300">
                  <Calendar size={18} />
                  {cert.year}
                </div>

                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  <ExternalLink size={18} />
                  View Certificate
                </button>

              </div>

            </div>

          ))}

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