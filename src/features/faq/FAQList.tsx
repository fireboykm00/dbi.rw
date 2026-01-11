"use client";
import { useState } from "react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { faqData } from "@/data/faq";

const FAQList = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 ${
                  openFaqIndex === index
                    ? "bg-gray-50"
                    : "bg-white hover:bg-gray-50/50"
                }`}
              >
                <span className="text-lg font-semibold pr-8 transition-colors duration-300 text-brand-primary">
                  {faq.question}
                </span>
                {openFaqIndex === index ? (
                  <XMarkIcon className="w-5 h-5 shrink-0 transition-transform duration-300 rotate-90 text-brand-primary" />
                ) : (
                  <PlusIcon className="w-5 h-5 shrink-0 transition-transform duration-300 hover:rotate-90 text-brand-primary" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === index
                    ? "max-h-[1000px] opacity-100 p-6 pt-0"
                    : "max-h-0 opacity-0"
                } bg-gray-50 text-gray-600 leading-relaxed`}
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
  );
};

export default FAQList;
