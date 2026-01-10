import { useState } from "react";
import {
  BookOpen,
  FileText,
  Wrench,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react";
import { primaryColor, primaryColorDark } from "../../lib/site";

const DPNToolkit = () => {
  const [activeTab, setActiveTab] = useState("guides");

  const tabs = [
    { id: "guides", name: "Guides", icon: <BookOpen className="w-5 h-5" /> },
    {
      id: "templates",
      name: "Templates",
      icon: <FileText className="w-5 h-5" />,
    },
    { id: "tools", name: "Tools", icon: <Wrench className="w-5 h-5" /> },
  ];

  const guides = [
    {
      title: "E-Commerce Compliance Guide",
      category: "Compliance",
      readTime: "15 min",
      description:
        "A comprehensive guide to understanding and meeting e-commerce regulations in Rwanda.",
    },
    {
      title: "Digital Payment Security",
      category: "Security",
      readTime: "10 min",
      description:
        "Best practices for securing digital payments and protecting customer financial data.",
    },
    {
      title: "Customer Data Protection",
      category: "Privacy",
      readTime: "12 min",
      description:
        "Learn how to handle customer data responsibly and in compliance with privacy laws.",
    },
    {
      title: "Building Consumer Trust",
      category: "Trust",
      readTime: "8 min",
      description:
        "Strategies to build and maintain trust with your online customers.",
    },
    {
      title: "Digital Business Registration",
      category: "Legal",
      readTime: "20 min",
      description:
        "Step-by-step process for registering your digital business in Rwanda.",
    },
    {
      title: "Social Media Marketing",
      category: "Marketing",
      readTime: "14 min",
      description:
        "Effective social media strategies to grow your digital brand.",
    },
  ];

  const templates = [
    {
      title: "Privacy Policy Template",
      format: "DOCX",
      downloads: "1.2k",
      description:
        "Standard privacy policy template compliant with local regulations.",
    },
    {
      title: "Terms of Service Template",
      format: "DOCX",
      downloads: "980",
      description:
        "Customizable terms of service agreement for your website or app.",
    },
    {
      title: "Cookie Consent Banner",
      format: "HTML/CSS",
      downloads: "750",
      description: "Code snippet for a compliant cookie consent banner.",
    },
    {
      title: "Return & Refund Policy",
      format: "DOCX",
      downloads: "650",
      description:
        "Clear and fair return policy template for e-commerce stores.",
    },
  ];

  const tools = [
    {
      title: "Website Security Scanner",
      type: "Online Tool",
      status: "Free",
      description:
        "Scan your website for common security vulnerabilities and issues.",
    },
    {
      title: "SSL Certificate Checker",
      type: "Online Tool",
      status: "Free",
      description:
        "Verify that your SSL certificate is valid and properly installed.",
    },
    {
      title: "Privacy Policy Generator",
      type: "Generator",
      status: "Free",
      description:
        "Generate a custom privacy policy based on your business needs.",
    },
    {
      title: "Compliance Checklist",
      type: "Checklist",
      status: "Free",
      description: "Interactive checklist to track your compliance progress.",
    },
  ];

  return (
    <>
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <span
            className={`text-[${primaryColor}] font-bold tracking-widest uppercase text-sm`}
          >
            Toolkit
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Explore Our Resource Library
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-[${primaryColor}] text-white shadow-xl transform scale-105`
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm"
              }`}
            >
              <span
                className={
                  activeTab === tab.id ? "text-white" : `text-[${primaryColor}]`
                }
              >
                {tab.icon}
              </span>
              {tab.name}
            </button>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-12 bg-gray-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === "guides" &&
            guides.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-4xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[${primaryColor}]/20 transition-all duration-300 group flex flex-col relative overflow-hidden transform hover:-translate-y-2`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-[${primaryColor}] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200`}
                />
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`px-4 py-1.5 bg-[${primaryColor}]/10 text-[${primaryColor}] text-xs font-bold uppercase tracking-widest rounded-full`}
                  >
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1 font-medium">
                    ⏱️ {item.readTime}
                  </span>
                </div>
                <h3
                  className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-[${primaryColor}] transition-colors duration-300`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-8 grow leading-relaxed">
                  {item.description}
                </p>
                <button
                  className={`flex items-center gap-2 text-[${primaryColor}] font-bold group-hover:gap-4 transition-all duration-300`}
                >
                  Read Guide <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}

          {activeTab === "templates" &&
            templates.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-4xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[${primaryColor}]/20 transition-all duration-300 group flex flex-col relative overflow-hidden transform hover:-translate-y-2`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-[${primaryColor}] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200`}
                />
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-[${primaryColor}]/5 flex items-center justify-center text-[${primaryColor}] group-hover:bg-[${primaryColor}] group-hover:text-white transition-all duration-200`}
                  >
                    <FileText className="w-7 h-7" />
                  </div>
                  <span className="text-sm text-gray-500 font-bold tracking-wider uppercase">
                    {item.format}
                  </span>
                </div>
                <h3
                  className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-[${primaryColor}] transition-colors duration-300`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-8 grow leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    {item.downloads} downloads
                  </span>
                  <button
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 transition-all duration-300 hover:bg-[${primaryColor}] hover:text-white bg-white text-[${primaryColor}] border-[${primaryColor}] shadow-md`}
                  >
                    <Download className="w-5 h-5" /> Download
                  </button>
                </div>
              </div>
            ))}

          {activeTab === "tools" &&
            tools.map((item, i) => (
              <div
                key={i}
                className={`bg-white rounded-4xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[${primaryColor}]/20 transition-all duration-300 group flex flex-col relative overflow-hidden transform hover:-translate-y-2`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-[${primaryColor}] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200`}
                />
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-[${primaryColor}]/5 flex items-center justify-center text-[${primaryColor}] group-hover:bg-[${primaryColor}] group-hover:text-white transition-all duration-200`}
                  >
                    <Wrench className="w-7 h-7" />
                  </div>
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full">
                    {item.status}
                  </span>
                </div>
                <h3
                  className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-[${primaryColor}] transition-colors duration-300`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-8 grow leading-relaxed">
                  {item.description}
                </p>
                <button
                  className={`w-full py-4 rounded-2xl font-bold text-white bg-[${primaryColor}] hover:bg-[${primaryColorDark}] flex items-center justify-center gap-3 shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  Launch Tool <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default DPNToolkit;
