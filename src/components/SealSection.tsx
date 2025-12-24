import { BadgeCheck } from "lucide-react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { primaryColor, primaryColorDark } from "../lib/site";

const SealSection = () => {
  const sealTypes = [
    {
      name: "Fintech Trust Seal:",
      description: "For financial innovation and inclusion.",
    },
    {
      name: "E-Commerce Trust Seal:",
      description: "For reliable online marketplaces.",
    },
    {
      name: "Startup Trust Seal:",
      description: "For high-growth tech ventures.",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-20">
      {/* Background Shape */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom-right opacity-60"
        style={{ backgroundImage: "url('/shapes/shapes.svg')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Side - Image with overlays */}
          <div className="relative flex-1 w-full max-w-lg">
            {/* Main Image */}
            <div className="relative rounded-2xl h-64 md:h-[600px] lg:h-[500px] xl:h-[600px]">
              <img
                src="/all/56d112e5e1cd2d4b5abb8a898f4a3655b593e8f5.jpg"
                alt="Professional working"
                className="w-full h-full object-cover rounded-2xl transform scale-x-[-1] transition-transform duration-700"
              />

              {/* Security Check Badge */}
              <div className="hidden md:flex absolute top-1/5 -translate-y-1/2 -right-10 lg:-right-12 xl:-right-16 shadow-lg drop-shadow-2xl z-10 bg-white rounded-md px-5 py-4 items-center gap-2 transition-all duration-300 hover:-translate-y-2">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  <ShieldCheckIcon className="text-white w-6" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Security Check: Passed
                </span>
              </div>

              {/* Testimonial Card */}
              <div className="hidden md:block max-w-[300px] absolute bottom-20 -right-5 lg:-right-8 xl:-right-10 z-10 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 absolute p-1 -top-3 -left-4 rounded-full flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fill="white"
                      width="16"
                    >
                      <path d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64L0 216zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-136z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Exceptional service and peace of mind. Highly recommend!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-xl">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-gray-900 leading-tight mb-6">
              A Seal for Every Sector
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Validate your platform against industry best practices. The DBI
              Trust Seal signals security, reliability, and compliance to your
              customers and partners.
            </p>

            {/* Seal Types List */}
            <div className="space-y-4 mb-8">
              {sealTypes.map((seal, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group transition-all duration-200 hover:translate-x-1"
                >
                  {/* Icon */}
                  <div className="mt-1 transition-colors duration-200 text-gray-400 group-hover:text-blue-500">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  {/* Text */}
                  <p className="text-base">
                    <span className="font-semibold">{seal.name}</span>{" "}
                    <span className="text-gray-600">{seal.description}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#"
                className={`inline-flex items-center gap-3 text-white font-medium px-6 py-4 rounded-md transition-all duration-300 bg-[${primaryColor}] hover:bg-[${primaryColorDark}] shadow-md hover:shadow-lg transform hover:-translate-y-1`}
              >
                Get Started
                <ArrowRightIcon className="w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SealSection;
