import { primaryColor } from "../lib/site";
import { QuoteIcon, ShieldCheck, BadgeCheck } from "lucide-react";

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
    <section className="relative w-full bg-white overflow-hidden py-20">
      {/* Background Shape */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-60"
        style={{ backgroundImage: "url('/shapes/shapes.svg')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Image with overlays */}
          <div className="relative flex-1 w-full max-w-lg">
            {/* Main Image */}
            <div className="relative rounded-2xl h-[600px]">
              <img
                src="/all/56d112e5e1cd2d4b5abb8a898f4a3655b593e8f5.jpg"
                alt="Professional working"
                className="w-full h-[600px] object-cover rounded-2xl transform scale-x-[-1]"
              />

              {/* Security Check Badge */}
              <div className="absolute top-1/5 -translate-y-1/2 -right-10 shadow-lg drop-shadow-2xl z-10 bg-white rounded-md px-5 py-4 flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-md flex items-center justify-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  <ShieldCheck className=" text-white" />
                </div>
                <span className="text-sm font-medium text-gray-800">
                  Security Check: Passed
                </span>
              </div>

              {/* Phone Mockup */}
              <div className="absolute bottom-24 right-8 w-20 h-36 bg-white rounded-xl shadow-xl border border-gray-200 flex items-center justify-center">
                <div className="w-16 h-32 bg-gray-100 rounded-lg"></div>
              </div>

              {/* Testimonial Card */}
              <div className="max-w-[300px] absolute bottom-20  -right-5 z-10 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 absolute p-1 -top-3 -left-4 rounded-full flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <QuoteIcon className="text-white transform rotate-180" />
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
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight mb-6">
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
                <div key={index} className="flex items-start gap-3">
                  {/* Icon */}
                  <div className="mt-1">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  {/* Text */}
                  <p className="text-base">
                    <span
                      className="font-semibold"
                      style={{ color: primaryColor }}
                    >
                      {seal.name}
                    </span>{" "}
                    <span className="text-gray-600">{seal.description}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 text-white font-medium px-6 py-4 rounded-md transition-colors duration-200 hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              Get Started
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
        </div>
      </div>
    </section>
  );
};

export default SealSection;
