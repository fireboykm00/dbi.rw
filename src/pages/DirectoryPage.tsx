import { useState } from "react";
import {
  darkColor,
  faqData,
  primaryColor,
  primaryColorDark,
} from "../lib/site";
import {
  MagnifyingGlassIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import PartnersSection from "../components/PartnersSection";
import ReadyToGetVerified from "../components/ReadToGetVerified";

const DirectoryPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("All Sectors");

  const certifiedPlatforms = [
    { name: "Murukali Market Smart", logo: "/certified/murukali.png" },
    { name: "Vuba Vuba", logo: "/certified/vuba-vuba.png" },
    { name: "Izetech", logo: "/certified/izetechlogo.png" },
    { name: "Zalenda Shop", logo: "/certified/zalenda.png" },
    { name: "eHaho", logo: "/certified/ehaho-logo.png" },
    { name: "Tuma", logo: "/certified/tuma.webp" },
    { name: "Hotpoint Rwanda", logo: "/certified/Hotpoint-Rwanda.webp" },
    { name: "Romac", logo: "/certified/romac.png" },
    { name: "Roots Rwanda", logo: "/certified/roots-rwanda.png" },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="p-2">
        <section className="relative w-full overflow-hidden rounded-[20px] min-h-[80vh] flex items-center justify-center bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
              style={{
                backgroundImage:
                  "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
              }}
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/60" />

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center flex flex-col items-center pt-20">
            <div className="w-full flex flex-col items-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Official Registry of Certified Businesses
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed">
                Browse the list of organizations that have met the DBI standards
                for quality, compliance, and trust.
              </p>

              {/* Search Bar */}
              <div className="w-full max-w-3xl bg-white rounded-lg p-2 flex items-center shadow-xl ring-4 md:ring-10 ring-white/10 transition-all duration-300 hover:ring-white/20">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-4 shrink-0" />
                <input
                  type="text"
                  placeholder="Search Company Name..."
                  className={`flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none bg-transparent text-lg w-full`}
                />
                <button
                  className={`bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white px-8 py-4 rounded-md flex items-center gap-2 transition-all duration-300 font-medium shrink-0 shadow-md hover:shadow-lg`}
                >
                  Search
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Certified Platforms Section */}
      <section className="relative py-12 px-4 md:py-24 md:px-6 lg:px-12 bg-white overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/shapes/shapes.svg"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              "All Sectors",
              "Fintech",
              "E-Commerce",
              "EdTech",
              "Startups",
              "Software",
            ].map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveTab(sector)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === sector
                    ? `bg-white text-[${primaryColor}] shadow-md scale-105`
                    : "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifiedPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-300 group flex flex-col hover:-translate-y-1"
              >
                <div className="h-32 flex items-center justify-center mb-8 transition-all duration-200">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="mt-auto">
                  <span className="inline-block bg-[#548235] text-white text-xs font-medium px-3 py-1 rounded-sm mb-4">
                    Verified
                  </span>

                  <div className="flex items-end justify-between">
                    <h3 className={`text-xl font-bold text-[${primaryColor}]`}>
                      {platform.name}
                    </h3>
                    <ArrowRightIcon
                      className={`w-6 h-6 text-gray-400 group-hover:text-[${primaryColor}] transition-all duration-300 group-hover:translate-x-1`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              className={`w-8 h-8 flex items-center justify-center bg-white text-[${primaryColor}] rounded-md text-sm font-medium shadow-sm border border-gray-100`}
            >
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="p-2">
        <section
          className="py-12 px-4 md:py-24 md:px-6 lg:px-12 rounded-[20px]"
          style={{
            backgroundColor: darkColor,
          }}
        >
          <div className="max-w-7xl w-full mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 text-lg">
                Everything you need to know about the DBI Trust Seal and
                certification process.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden border border-white/10">
              {faqData.map((faq, index) => (
                <div key={index} className="overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 ${
                      openFaqIndex === index
                        ? `bg-[${primaryColor}] text-white`
                        : `bg-white hover:bg-[${primaryColor}]/10`
                    } ${
                      index !== faqData.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-lg font-semibold pr-8 transition-colors duration-300 ${
                        openFaqIndex === index
                          ? "text-white"
                          : `text-[${primaryColor}]`
                      }`}
                    >
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <XMarkIcon className="w-5 h-5 text-current shrink-0 transition-transform duration-300 rotate-90" />
                    ) : (
                      <PlusIcon
                        className={`w-5 h-5 text-[${primaryColor}] shrink-0 transition-transform duration-300 group-hover:rotate-90`}
                      />
                    )}
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaqIndex === index
                        ? "max-h-[1000px] opacity-100 p-8 pt-4"
                        : "max-h-0 opacity-0"
                    } bg-gray-50 text-gray-700 leading-relaxed`}
                  >
                    <div className="pt-4 border-t border-gray-100">
                      {Array.isArray(faq.answer) ? (
                        <ul className="list-disc pl-5 space-y-2">
                          {faq.answer.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ReadyToGetVerified />
      <PartnersSection />
    </div>
  );
};

export default DirectoryPage;
