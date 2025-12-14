import { useState } from "react";
import { primaryColor, darkColor } from "../lib/site";
import {
  BookOpen,
  FileText,
  Wrench,
  Download,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const ResourcesPage = () => {
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
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center rounded-xl m-2 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/all/hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />

        <div className="relative z-10 text-center px-4 md:px-6 lg:px-12 max-w-4xl mx-auto pt-16 md:pt-20 lg:pt-24">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            📚 Resource Center
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need
            <span className="block" style={{ color: primaryColor }}>
              to Succeed Online
            </span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Access guides, templates, and tools to help you build, grow, and
            secure your digital business.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-6 md:py-8 px-4 md:px-6 lg:px-12 bg-gray-50 border-b border-gray-200 sticky top-0 z-20 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-[#212529] shadow-lg transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
              style={{
                backgroundColor:
                  activeTab === tab.id ? primaryColor : undefined,
              }}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === "guides" &&
            guides.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-[#212529] text-xs font-bold uppercase tracking-wider rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    ⏱️ {item.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#212529] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 grow">{item.description}</p>
                <button className="flex items-center gap-2 text-[#212529] font-semibold group-hover:gap-3 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}

          {activeTab === "templates" &&
            templates.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#212529]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {item.format}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#212529] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 grow">{item.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {item.downloads} downloads
                  </span>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium border transition-colors hover:bg-blue-50"
                    style={{ borderColor: primaryColor, color: darkColor }}
                  >
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
            ))}

          {activeTab === "tools" &&
            tools.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#212529]">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#212529] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-6 grow">{item.description}</p>
                <button
                  className="w-full py-3 rounded-xl font-medium text-[#212529] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: primaryColor }}
                >
                  Launch Tool <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 px-4 md:py-20 md:px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Get the latest guides, templates, and tools delivered straight to
            your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FBD40E] focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-xl font-bold text-[#212529] shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              style={{ backgroundColor: primaryColor }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResourcesPage;
