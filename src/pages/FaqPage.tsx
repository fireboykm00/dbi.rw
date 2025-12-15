import { useState } from "react";
import { faqData } from "../lib/site";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import PartnersSection from "../components/PartnersSection";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "../lib/animations";

const FaqPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="p-2">
        <section className="relative min-h-[60vh] w-full overflow-hidden rounded-[20px] flex items-center justify-center bg-[#212529]">
          {/* Background Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/all/5f5daa7adf3331199f682a231d8c7d576b3a4b1c.jpg')",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed"
            >
              Find answers to common questions about DBI, Trust Seal, and our
              services.
            </motion.p>
          </div>
        </section>
      </div>

      {/* FAQ List Section */}
      <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                    openFaqIndex === index
                      ? "bg-gray-50"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg font-semibold text-[#212529] pr-8">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <XMarkIcon className="w-5 h-5 text-[#212529] shrink-0" />
                  ) : (
                    <PlusIcon className="w-5 h-5 text-[#212529] shrink-0" />
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
                      <div className="p-6 pt-0 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-100">
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
          </motion.div>
        </div>
      </section>

      <PartnersSection />
    </div>
  );
};

export default FaqPage;
