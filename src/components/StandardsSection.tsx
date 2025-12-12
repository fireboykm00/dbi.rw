import { primaryColor } from "../lib/site";
import { BugIcon, ShieldIcon, CogIcon } from "lucide-react";
const StandardsSection = () => {
  const certifications = [
    { name: "Certified Agile Business Analysis", icon: BugIcon },
    { name: "Certified Tester Foundation Level", icon: ShieldIcon },
    { name: "Quality Engineering for DevOps", icon: CogIcon },
  ];

  return (
    <section className="relative max-w-7xl w-full mx-auto px-10 py-6 bg-gray-200 rounded-xl overflow-hiddexn">
      {/* Background Shape */}

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side - Content */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            Powered by Global Standards
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We are the accredited training provider for iSQI and ISTQB in
            Rwanda. Get internationally recognized certification in software
            testing and business analysis.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-white font-medium px-6 py-4 rounded-md transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: primaryColor }}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Right Side - Certificate with badges */}
        <div className="relative">
          {/* Certificate Image */}
          <div className="relative">
            <img
              src="/all/d8f543e7441cb48d1c86ff70b389c64024504459.png"
              alt=""
              className="w-auto h-[400px]"
            />

            {/* Floating Badges */}
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`absolute bg-white rounded-md px-4 py-3 shadow-lg flex items-center gap-2 ${
                  index === 0
                    ? "top-1/3 -left-12"
                    : index === 1
                    ? "top-1/2 -right-40"
                    : "bottom-20"
                }`}
              >
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  {<cert.icon className="text-white" />}
                </div>
                <span className="text-xs font-medium text-gray-800 whitespace-nowrap">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
