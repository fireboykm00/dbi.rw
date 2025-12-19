import { useState } from "react";
import { faqData } from "../lib/site";
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
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn, scaleIn } from "../lib/animations";

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
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="p-2">
        <section className="relative w-full overflow-hidden rounded-[20px] min-h-[80vh] flex items-center justify-center">
          {/* Background Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center flex flex-col items-center pt-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="w-full flex flex-col items-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Official Registry of Certified Businesses
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed"
              >
                Browse the list of organizations that have met the DBI standards
                for quality, compliance, and trust.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                variants={scaleIn}
                className="w-full max-w-3xl bg-white rounded-lg p-2 flex items-center shadow-xl  ring-4 md:ring-10 ring-white/10"
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-4 shrink-0" />
                <input
                  type="text"
                  placeholder="Search Company Name..."
                  className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none bg-transparent text-lg w-full"
                />
                <button className="bg-white hover:bg-gray-100 text-[#455F84] px-8 py-4 rounded-md flex items-center gap-2 transition-colors font-medium shrink-0 shadow-md">
                  Search
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </motion.div>
            </motion.div>
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
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
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === sector
                    ? "bg-white text-[#455F84] shadow-md"
                    : "bg-transparent text-gray-500 hover:text-gray-900"
                }`}
              >
                {sector}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {certifiedPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
              >
                <div className="h-32 flex items-center justify-center mb-8">
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
                    <h3 className="text-xl font-bold text-[#455F84]">
                      {platform.name}
                    </h3>
                    <ArrowRightIcon className="w-6 h-6 text-gray-400 group-hover:text-[#455F84] transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900">
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center bg-white text-[#455F84] rounded-md text-sm font-medium shadow-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="p-2">
        <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 rounded-[20px] bg-[#455F84]">
          <div className="max-w-7xl w-full mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 text-lg">
                Everything you need to know about the DBI Trust Seal and
                certification process.
              </p>
            </motion.div>

            <div className="rounded-lg overflow-hidden">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                      openFaqIndex === index
                        ? "bg-white"
                        : "bg-white/90 hover:bg-white"
                    } ${
                      index !== faqData.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }`}
                  >
                    <span className="text-lg font-semibold pr-8 text-[#455F84]">
                      {faq.question}
                    </span>
                    {openFaqIndex === index ? (
                      <XMarkIcon className="w-5 h-5 text-[#455F84] shrink-0" />
                    ) : (
                      <PlusIcon className="w-5 h-5 text-[#455F84] shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-10 py-4 bg-white/90 text-[#455F84] leading-relaxed">
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
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
