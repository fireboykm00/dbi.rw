import { useState } from "react";
import { faqData } from "../lib/site";
import { ChevronDown, ChevronUp } from "lucide-react";

const DirectoryPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const certifiedPlatforms = [
    { name: "Murukali", logo: "/certified/murukali.png" },
    { name: "Vuba Vuba", logo: "/certified/vuba-vuba.png" },
    { name: "Izetech", logo: "/certified/izetechlogo.png" },
    { name: "Zalenda", logo: "/certified/zalenda.png" },
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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="p-2">
        <section className="relative min-h-screen w-full overflow-hidden rounded-[20px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/all/56d112e5e1cd2d4b5abb8a898f4a3655b593e8f5.jpg')",
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-[#03396C]/70 via-[#03396C00]/40 to-transparent" />

          {/* Content Container */}
          <div className="relative z-10 flex flex-col justify-end min-h-screen max-w-7xl mx-auto px-6 pt-24 pb-12">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                Trusted Businesses
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
                DBI Certified
                <br />
                <span className="text-[#4dd0e1]">Business Directory</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Find and connect with certified digital businesses in Rwanda.
                Every business listed here has been verified for
                trustworthiness.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Certified Platforms Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1929] mb-4">
              Certified Platforms
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These companies have demonstrated their commitment to quality and
              trust by earning the DBI Trust Seal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center">
            {certifiedPlatforms.map((platform, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center h-40"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="max-h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1929] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about the DBI Trust Seal and
              certification process.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-[#0a1929] pr-8">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#03396C] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="p-6 pt-0 bg-white text-gray-600 leading-relaxed border-t border-gray-100">
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectoryPage;
