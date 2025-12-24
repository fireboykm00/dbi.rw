import PartnersSection from "../components/PartnersSection";
import { darkColor, primaryColor } from "../lib/site";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ReadyToGetVerified from "../components/ReadToGetVerified";

const AcademyPage = () => {
  const certifications = [
    {
      title: "Certified Agile Business Analysis",
      description:
        "Optimize workflows and implement IT solutions that add real business value to your organization.",
      tag: "Agile Development & Business Process",
    },
    {
      title: "Certified Tester Foundation Level",
      description:
        "Master the essential testing terminology and concepts used worldwide in the software development lifecycle.",
      tag: "Test Design & Global Standards",
    },
    {
      title: "Quality for DevOps",
      description:
        'Shift from just "testing" to "building quality" into your IT systems within high-performance DevOps teams.',
      tag: "DevOps & Scrum Quality",
    },
  ];

  const experts = [
    {
      logo: "/experts/rhia.png",
      title: "Rwanda Health Informatics Association",
      description:
        "Connects health professionals and data scientists to strengthen Rwanda's health system through the responsible use of technology.",
    },
    {
      logo: "/experts/isaca.png",
      title: "ISACA Rwanda",
      description:
        "A professional association providing certifications and guidance in IT governance, cybersecurity, auditing, and risk management.",
    },
    {
      logo: "/experts/digital-frontiers-institute.png",
      title: "Digital Frontiers Institute",
      description:
        "Equips professionals with advanced knowledge in digital finance, fintech, and financial inclusion through accredited online training.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="p-2">
        <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden rounded-xl flex items-center justify-center bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('/all/587b0cfabd568a039db949742072ab6090ae1cd3.jpg')",
              }}
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/50" />

          {/* Content */}
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Master Global Tech Standards
            </h1>
          </div>
        </section>
      </div>

      <div className="p-2 relative">
        <img
          src="/shapes/shapes.svg"
          className="w-full inset-0 absolute h-full pointer-events-none opacity-20"
        />
        <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 flex flex-col md:flex-row gap-6 lg:gap-10 items-center max-w-7xl w-full mx-auto overflow-hidden">
          <div className="grow">
            <img
              src="/all/d8f543e7441cb48d1c86ff70b389c64024504459.png"
              className="w-full object-cover -rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </div>
          <div>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: primaryColor }}
            >
              Don't just learn. Get Accredited.
            </h2>
            <p className="text-gray-600">
              Digital Business Institute is fully accredited by the Southern
              African Software Testing Qualifications Board (SASTQB) to deliver
              the ISTQB Certified Tester Foundation Level (CTFL) training. Your
              certificate will be recognized in over 100 countries.
            </p>
          </div>
        </section>
      </div>

      {/* Internationally Accredited Certifications Section */}
      <div className="p-2">
        <section
          className="py-12 px-4 md:py-24 md:px-6 lg:px-12 rounded-[20px]"
          style={{ backgroundColor: darkColor }}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
              Internationally Accredited Certifications
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: primaryColor }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-8 grow">{cert.description}</p>
                  <div className="mt-auto">
                    <p
                      className="font-bold text-sm mb-6"
                      style={{ color: primaryColor }}
                    >
                      {cert.tag}
                    </p>
                    <button className="cursor-pointer group flex items-center gap-2">
                      <ArrowRightIcon
                        className="w-6 h-6 transition-transform group-hover:translate-x-1"
                        style={{ color: primaryColor }}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Connect with Global Experts Section */}
      <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/shapes/shapes.svg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: primaryColor }}
            >
              Connect with Global Experts
            </h2>
            <p className="text-gray-600 max-w-md md:text-right">
              Through our Digital Professional Networks, we link member
              companies to leading experts and resources to bridge skill gaps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              >
                <div className="h-32 mb-6 flex items-center transition-all duration-200">
                  <img
                    src={expert.logo}
                    alt={`${expert.title} logo`}
                    className="max-h-full max-w-[80%] object-contain"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: primaryColor }}
                >
                  {expert.title}
                </h3>
                <div className="border-t grow border-gray-200 pt-6 gap-6 flex flex-col">
                  <p className="text-gray-600 grow leading-relaxed">
                    {expert.description}
                  </p>
                  <div className="mt-auto flex justify-end ">
                    <ArrowRightIcon
                      className={`w-6 h-6 text-[${primaryColor}] transition-transform duration-300 hover:translate-x-1 cursor-pointer`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReadyToGetVerified />
      <PartnersSection />
    </div>
  );
};

export default AcademyPage;
