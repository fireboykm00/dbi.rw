import { ArrowRight, BadgeCheck } from "lucide-react";

import PartnersSection from "../components/PartnersSection";
import ReadyToGetVerified from "../components/ReadToGetVerified";

const CertificationPage = () => {
  const seals = [
    {
      title: "For Tech Startups",
      description:
        "Recognizes tech start-ups that demonstrate exceptional potential in innovation, growth, and impact within Rwanda's digital sector.",
      image: "/seals/startup.png",
      color: "bg-gray-50",
    },
    {
      title: "For Digital Learning",
      description:
        "Recognizes EdTech solutions that enhance access to quality education and foster learning through technology.",
      image: "/seals/edtech.png",
      color: "bg-gray-50",
    },
    {
      title: "For Online Retail",
      description:
        "Recognizes platforms that demonstrate excellence in user experience, business growth, and market impact.",
      image: "/seals/ecommerce.png",
      color: "bg-gray-50",
    },
    {
      title: "For Engineering Excellence",
      description:
        "Recognizes organizations that demonstrate excellence in software engineering and adherence to industry best practices.",
      image: "/seals/sod.png",
      color: "bg-gray-50",
    },
    {
      title: "For Financial Innovation",
      description:
        "Recognizes FinTech companies that adhere to industry best practices and demonstrate excellence in driving financial inclusion.",
      image: "/seals/fintech.png",
      color: "bg-gray-50",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="p-2">
        <section className="relative min-h-[60vh] md:min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden rounded-xl">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/all/01e93083026649cc62f2b83603f2e70c2855a428.jpg')", // Using existing hero image as placeholder
              backgroundPosition: "center",
            }}
          />

          {/* Gradient Overlay - darker on left for text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-end min-h-[60vh] md:min-h-screen max-w-7xl mx-auto px-4 md:px-6 lg:px-12 pt-16 md:pt-24 pb-8 md:pb-12">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
                The Mark of Excellence and Assurance.
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                The DBI Trust Seal signals to customers and partners that your
                business meets high standards of quality and compliance.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#FBD40E] hover:bg-[#e0bd0c] text-[#212529] font-medium px-6 py-4 rounded-md transition-colors duration-200 mb-12"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Bridging the Gap Section */}
      <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 relative">
        {/* Background Pattern */}
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-[80%] h-full opacity-100 pointer-events-none">
          <img
            src="/shapes/shapes.svg"
            alt="Background Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-20 lg:gap-24 items-center">
            {/* Image Side */}
            <div className="relative h-[600px] transform -rotate-2  bg-black  rounded-4xl overflow-hidden">
              <img
                src="/all/5f5daa7adf3331199f682a231d8c7d576b3a4b1c.jpg"
                alt="Professionals working"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-8 leading-[1.15]">
                Bridging the Gap Between
                <br />
                You and Your Customers
              </h2>
              <p className="text-gray-500 text-lg mb-10 leading-relaxed font-light">
                In the quest to smoothen the trust bridge, the DBI Seal serves
                as a credible mark of excellence. It signals to partners that
                your business meets high standards of quality and compliance
                based on industry best practices.
              </p>

              <div className="space-y-6 text-[#212529]">
                <div className="flex gap-4 items-start">
                  <BadgeCheck
                    className="w-6 h-6 shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <div>
                    <span className="font-bold text-lg">Credible Mark: </span>
                    <span className="font-medium">
                      A proven signal of assurance for your market.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <BadgeCheck
                    className="w-6 h-6  shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <div>
                    <span className="font-bold text-lg">Compliance: </span>
                    <span className="font-medium">
                      Evaluated against general principles of best practices.
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <BadgeCheck
                    className="w-6 h-6 shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <div>
                    <span className="font-bold text-lg">
                      Full Lifecycle Trust:{" "}
                    </span>
                    <span className="font-medium">
                      Depict trustworthiness from inception to delivery.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validate Your Excellence Section */}
      <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Header Card */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#212529] mb-6">
                Validate Your Excellence
              </h2>
              <p className="text-gray-600 text-lg">
                Prove your credibility with a sector-specific seal. Choose your
                path below to get certified.
              </p>
            </div>

            {/* Seal Cards */}
            {seals.map((seal, index) => (
              <div
                key={index}
                className={`${seal.color} rounded-2xl p-8 hover:shadow-lg shadow-md transition-shadow duration-300`}
              >
                <div className="mb-6">
                  <img
                    src={seal.image}
                    alt={seal.title}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#212529] mb-4">
                  {seal.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {seal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Get DBI Trust Seal Section */}
      <div className="p-2 mb-20">
        <section className="p-6 md:p-30 rounded-[16px] bg-[#212529] text-white">
          <div className="">
            <div className="grid xl:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                How To Get DBI Trust Seal
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                Follow these 4 simple steps to earn your Trust Seal and verify
                your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16">
              {[
                {
                  step: "Step 01",
                  title: "Sector Check",
                  description:
                    "Confirm your company fits into one of the verified sectors",
                },
                {
                  step: "Step 02",
                  title: "Eligibility Check",
                  description: "Check your eligibility notice before starting.",
                },
                {
                  step: "Step 03",
                  title: "Self Assessment",
                  description:
                    "Complete the self-assessment for your specific sector.",
                },
                {
                  step: "Step 04",
                  title: "Seal Integration",
                  description:
                    "Integrate the DBI Trust Seal on your platforms.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-start group"
                >
                  {/* Step Badge */}
                  <div className="bg-[#FBD40E] text-[#212529] px-8 py-3 rounded-full text-xl inline-block mb-6 relative z-10 shadow-md">
                    {item.step}
                  </div>

                  {/* Dotted Line - Connecting badge to card */}
                  <div className="hidden md:block absolute top-8 left-14 bottom-0 w-px h-16 border-l-2 border-dotted border-white/30 z-0" />

                  {/* Content Card */}
                  <div className="bg-[#444444] hover:bg-[#555555] text-white rounded-xl p-8 w-full flex-1 transition-colors duration-300 relative z-10 mt-4">
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ReadyToGetVerified />

      {/* Partners Section */}
      <PartnersSection />
      <br />
    </div>
  );
};

export default CertificationPage;
