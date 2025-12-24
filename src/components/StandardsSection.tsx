import { BugIcon, ShieldIcon, CogIcon } from "lucide-react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { primaryColor, primaryColorDark } from "../lib/site";

const StandardsSection = () => {
  const certifications = [
    {
      name: "Certified Agile Business Analysis",
      icon: <ShieldIcon color="white" fill="white" />,
    },
    {
      name: "Certified Tester Foundation Level",
      icon: <BugIcon color="white" />,
    },
    {
      name: "Quality Engineering for DevOps",
      icon: <CogIcon color="white" />,
    },
  ];

  return (
    <section className="relative max-w-7xl w-full mx-auto px-4 py-8 md:px-10 md:py-6 bg-gray-200 rounded-2xl overflow-hidden">
      {/* Background Shape */}

      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24">
        {/* Left Side - Content */}
        <div className="flex-1 w-full max-2xl:max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-6 transition-colors duration-300">
            Powered by Global Standards
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
            We are the accredited training provider for iSQI and ISTQB in
            Rwanda. Get internationally recognized certification in software
            testing and business analysis.
          </p>
          <a
            href="#"
            className={`inline-flex items-center gap-3 font-medium px-6 py-4 rounded-md transition-all duration-300 bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white shadow-md hover:shadow-lg transform hover:-translate-y-1`}
          >
            Learn More
            <ArrowRightIcon className="w-5" />
          </a>
        </div>

        {/* Right Side - Certificate with badges */}
        <div className="relative mt-8 lg:mt-0">
          {/* Certificate Image */}
          <div className="relative">
            <img
              src="/all/d8f543e7441cb48d1c86ff70b389c64024504459.png"
              alt=""
              className="w-auto h-64 md:h-[400px] lg:h-[350px] xl:h-[400px] transition-transform duration-700 hover:scale-105"
            />

            {/* Floating Badges */}
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`hidden md:flex absolute bg-white rounded-md px-4 py-3 shadow-lg items-center gap-2 transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 ${
                  index === 0
                    ? "top-1/6 -left-12"
                    : index === 1
                    ? "top-1/3 -right-40 lg:-right-8"
                    : "bottom-20"
                }`}
              >
                <div
                  className="xl:w-10 xl:h-10 w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: primaryColor }}
                >
                  {cert.icon}
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
