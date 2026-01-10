"use client";
import { useState } from "react";
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/solid";
import { darkColor, faqData, primaryColor } from "../../lib/site";

const DirectoryFAQ = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
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
  );
};

export default DirectoryFAQ;
