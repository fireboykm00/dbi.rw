"use client";

import privacyPolicy from "../../data/privacy-policy";

const PrivacyPolicyContent = () => {
  return (
    <div className="bg-white py-20 px-6 md:py-32 md:px-12 2xl:py-40 2xl:px-16">
      <div className="max-w-3xl 2xl:max-w-4xl mx-auto pt-20">
        {/* Header */}
        <div className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            {privacyPolicy.title}
          </h1>
          <div className="w-24 h-2 bg-blue-600 rounded-full mb-12"></div>

          <div className="space-y-6">
            {privacyPolicy.introduction.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-gray-500 font-light leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {privacyPolicy.sections.map((section, index) => (
            <div key={index} className="scroll-mt-32">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-gray-300 font-light select-none">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {section.heading}
              </h2>

              {section.description && (
                <p className="text-base text-gray-500 mb-6 font-medium">
                  {section.description}
                </p>
              )}

              {/* Items for Definitions */}
              {section.items && (
                <div className="grid gap-8 border-l border-gray-100 pl-6 md:pl-8">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <span className="font-bold text-gray-900 text-base block mb-1">
                        {item.term}
                      </span>
                      <p className="text-gray-500 leading-relaxed text-sm md:text-base font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Standard List */}
              {section.list && (
                <ul className="space-y-3 border-l border-gray-100 pl-6 md:pl-8">
                  {section.list.map((item, listIdx) => (
                    <li
                      key={listIdx}
                      className="text-gray-500 text-base flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Multi-paragraph Content */}
              {section.content && (
                <div className="space-y-4 border-l border-gray-100 pl-6 md:pl-8">
                  {section.content.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base md:text-lg text-gray-500 leading-relaxed font-light"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-40 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-bold">
            © 2026 Digital Business Institute • Last Updated: January 11, 2026
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest uppercase font-bold text-gray-400">
            <a
              href="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
