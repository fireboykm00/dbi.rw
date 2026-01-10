import Image from "next/image";

const CertificationValidation = () => {
  const seals = [
    {
      title: "Fintech Trust Seal",
      description:
        "Recognizing companies driving innovation and financial inclusion through secure technology and best practices.",
      image: "/seals/fintech.png",
    },
    {
      title: "E-Commerce Trust Seal",
      description:
        "Recognizing platforms demonstrating excellence in user experience, business growth, and market impact.",
      image: "/seals/ecommerce.png",
    },
    {
      title: "EdTech Trust Seal",
      description:
        "Recognizing solutions enhancing access to quality education and driving digital transformation in learning.",
      image: "/seals/edtech.png",
    },
    {
      title: "Startup Trust Seal",
      description:
        "Recognizing tech start-ups with exceptional potential in innovation and growth within Rwanda's digital sector.",
      image: "/seals/startup.png",
    },
    {
      title: "Software Development Seal",
      description:
        "Recognizing organizations demonstrating excellence in software engineering, quality, and technical proficiency.",
      image: "/seals/sod.png",
    },
    {
      title: "Mobility Trust Seal",
      description:
        "Recognizing solutions that enhance transportation efficiency and promote sustainable mobility through technology.",
      image: "/seals/mobility.png",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 2xl:py-32 2xl:px-16 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 2xl:mb-24 max-w-3xl 2xl:max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
            Validing Your Excellence.
          </h2>
          <p className="text-xl 2xl:text-2xl text-gray-500 font-light leading-relaxed">
            Choose your sector-specific path and gain the credibility your
            business deserves with an official DBI Trust Seal.
          </p>
        </div>

        {/* Seal Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:gap-10 mb-16 2xl:mb-20">
          {seals.map((seal, index) => (
            <div
              key={index}
              className="group p-10 2xl:p-12 rounded-[32px] border border-gray-100 bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 2xl:w-40 2xl:h-40 mb-8 2xl:mb-10 transform group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={seal.image}
                  alt={seal.title}
                  className="w-full h-full object-contain drop-shadow-lg"
                  width={1000}
                  height={1000}
                />
              </div>
              <h3 className="text-2xl 2xl:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {seal.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed 2xl:text-lg">
                {seal.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="flex justify-center">
          <div className="w-full h-px bg-linear-to-r from-transparent via-gray-100 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default CertificationValidation;
