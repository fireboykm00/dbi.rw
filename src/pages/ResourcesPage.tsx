import { useState } from "react";
import {
  BookOpen,
  FileText,
  Wrench,
  Download,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import PartnersSection from "../components/PartnersSection";
import { primaryColor, primaryColorDark } from "../lib/site";
import { LightBulbIcon } from "@heroicons/react/24/outline";

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
      {/* Hero Section */}
      <div className="p-2">
        <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden rounded-xl flex items-center justify-center bg-black">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/all/hero.jpg')",
              }}
            />
          </div>

          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/50" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Everything You Need to Succeed Online
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Access guides, templates, and tools to help you build, grow, and
              secure your digital business.
            </p>
          </div>
        </section>
      </div>

      {/* Why These Resources Matter Section - Reimagined */}
      <section className="py-24 px-4 md:py-32 md:px-6 lg:px-12 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual Side (Left) */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square bg-gray-50 rounded-[3rem] overflow-hidden shadow-inner flex items-center justify-center p-8 md:p-12 transition-all duration-700 hover:shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    {/* Guides Card */}
                    <div className="aspect-square bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-300">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                        style={{
                          backgroundColor: `${primaryColor}10`,
                          color: primaryColor,
                        }}
                      >
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Guides
                      </span>
                    </div>

                    {/* Templates Card - Offset */}
                    <div className="aspect-square bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-300 transform translate-y-8">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                        style={{
                          backgroundColor: `${primaryColor}10`,
                          color: primaryColor,
                        }}
                      >
                        <FileText className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Templates
                      </span>
                    </div>

                    {/* Tools Card */}
                    <div className="aspect-square bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-2 transition-all duration-300">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                        style={{
                          backgroundColor: `${primaryColor}10`,
                          color: primaryColor,
                        }}
                      >
                        <Wrench className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Tools
                      </span>
                    </div>

                    {/* Highlight Card - Offset */}
                    <div className="relative group">
                      <div
                        className="absolute inset-0 rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center text-center text-white transform translate-y-8 transition-transform duration-500 hover:scale-105"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <h4 className="text-3xl md:text-4xl font-black mb-1">
                          100+
                        </h4>
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-tight">
                          Industry-Standard Resources
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative background number */}
                <div
                  className="absolute -top-10 -left-10 text-[10rem] font-black opacity-[0.03] select-none pointer-events-none"
                  style={{ color: primaryColor }}
                >
                  01
                </div>
              </div>
            </div>

            {/* Content Side (Right) */}
            <div className="order-1 lg:order-2">
              <div
                className="inline-block px-4 py-1.5 rounded-full border mb-8"
                style={{
                  backgroundColor: `${primaryColor}05`,
                  borderColor: `${primaryColor}20`,
                }}
              >
                <span
                  className="text-xs font-black uppercase tracking-[0.2em]"
                  style={{ color: primaryColor }}
                >
                  Knowledge Hub
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[0.95] tracking-tighter text-gray-900">
                Engineering <br />
                <span style={{ color: primaryColor }}>Digital Resilience.</span>
              </h2>

              <p className="text-xl text-gray-500 leading-relaxed mb-12 font-light">
                Our resource center is a launchpad for excellence. Each
                template, guide, and tool is specifically engineered to help
                Rwandan digital businesses scale with integrity, trust, and
                technical precision.
              </p>

              <div className="space-y-8">
                {[
                  {
                    title: "Compliance Frameworks",
                    desc: "Navigate local and international regulations with absolute ease.",
                  },
                  {
                    title: "Standardized Templates",
                    desc: "Plug-and-play documentation used by industry leaders.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div
                      className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:-rotate-12"
                      style={{
                        backgroundColor: `${primaryColor}10`,
                        color: primaryColor,
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toolkit Header */}
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

      {/* Content Grid */}
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

      {/* Request a Resource CTA */}
      <div className="p-2 my-12 md:my-20">
        <section className="relative py-16 px-6 md:py-24 md:px-12 overflow-hidden rounded-4xl min-h-[500px] bg-black flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/60 " />
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  Can't find what you're looking for?
                </h2>
                <p className="text-xl mb-10 text-white/80 leading-relaxed">
                  We are constantly expanding our library. If there's a specific
                  guide, template, or tool you need, let us know and we'll
                  prioritize it.
                </p>
                <button
                  className={`inline-flex bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white gap-3 items-center font-bold px-10 py-5 rounded-lg transition-all duration-300 shadow-2xl transform hover:-translate-y-1`}
                >
                  Request a Resource
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="bg-white/10 backdrop-blur-xl p-12 rounded-4xl border border-white/20 shadow-2xl max-w-sm text-center transition-all duration-200 hover:scale-105 hover:bg-white/20">
                  <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-xl transition-transform duration-200 hover:rotate-12">
                    <LightBulbIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Your Idea Matters
                  </h3>
                  <p className="text-white/70">
                    Help us build the most comprehensive digital toolkit for
                    Rwanda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter */}
      <section className="py-20 px-4 md:py-32 md:px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className={`text-[${primaryColor}] font-bold tracking-widest uppercase text-sm mb-4 block`}
          >
            Newsletter
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-500 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
            Get the latest digital compliance guides and industry tools
            delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto p-2 bg-gray-50 rounded-lg border border-gray-100 shadow-inner group transition-all duration-300 hover:border-gray-200">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-8 py-5 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-lg"
            />
            <button
              type="submit"
              className={`px-10 py-5 rounded-lg font-bold bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
      <PartnersSection />
    </>
  );
};

export default ResourcesPage;
