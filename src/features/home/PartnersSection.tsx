import Image from "next/image";

const PartnersSection = () => {
  // Company logos from public/company folder
  const companyLogos = [
    "/company/partner-1.png",
    "/company/partner-2.png",
    "/company/partner-3.png",
    "/company/partner-4.png",
    "/company/partner-5.png",
    "/company/partner-6.png",
    "/company/partner-7.png",
    "/company/partner-8.png",
    "/company/partner-9.png",
    "/company/partner-10.png",
  ];

  return (
    <section className="relative w-full bg-white py-12 px-4 md:py-16 md:px-6 2xl:py-24 2xl:px-8">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        {/* Heading */}
        <h3 className="text-center text-lg 2xl:text-xl font-bold mb-8 md:mb-10 2xl:mb-14 uppercase tracking-wider text-gray-400">
          Powered by Global Standards
        </h3>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 2xl:gap-10">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 2xl:p-8 flex items-center justify-center hover:shadow-xl hover:border-gray-200 transition-all duration-300"
            >
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-12 2xl:max-h-16 w-auto object-contain"
                width={128}
                height={128}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
