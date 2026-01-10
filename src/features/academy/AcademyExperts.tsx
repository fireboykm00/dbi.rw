import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { primaryColor } from "../../lib/site";
import Image from "next/image";

const AcademyExperts = () => {
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
    <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/shapes/shapes.svg"
          alt=""
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
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
            Through our Digital Professional Networks, we link member companies
            to leading experts and resources to bridge skill gaps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="h-32 mb-6 flex items-center transition-all duration-200">
                <Image
                  src={expert.logo}
                  alt={`${expert.title} logo`}
                  className="max-h-full max-w-[80%] object-contain"
                  width={500}
                  height={500}
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
  );
};

export default AcademyExperts;
