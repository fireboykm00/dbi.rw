import { useState } from "react";
import {
  BookOpen,
  FileText,
  Wrench,
  Download,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  fadeIn,
  slideInLeft,
  slideInRight,
} from "../lib/animations";
import PartnersSection from "../components/PartnersSection";

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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage: "url('/all/hero.jpg')",
              }}
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Everything You Need to Succeed Online
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Access guides, templates, and tools to help you build, grow, and
              secure your digital business.
            </motion.p>
          </div>
        </section>
      </div>

      {/* Why These Resources Matter Section */}
      <section className="py-16 px-4 md:py-24 md:px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInLeft}
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
                style={{ color: "#455F84" }}
              >
                Empowering Your <br />
                <span className="text-gray-900">Digital Journey.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Our resource center provides the essential tools, knowledge, and
                frameworks needed to navigate the complexities of the digital
                economy in Rwanda.
              </p>
              <div className="space-y-4">
                {[
                  "Regulatory Compliance Frameworks",
                  "Industry-Standard Templates",
                  "Practical Security Tools",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#455F84]/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#455F84]" />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInRight}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/all/01e93083026649cc62f2b83603f2e70c2855a428.jpg"
                  alt="Resources and Tools"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#455F84] rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section with Title */}
      <section className="py-12 md:py-20 px-4 md:px-6 lg:px-12 bg-gray-50 border-b border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto text-center mb-12 md:mb-16">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-[#455F84] font-bold tracking-widest uppercase text-sm"
          >
            Toolkit
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mt-4"
          >
            Explore Our Resource Library
          </motion.h2>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-500 ${
                activeTab === tab.id
                  ? "bg-[#455F84] text-white shadow-2xl transform scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm"
              }`}
            >
              <span
                className={
                  activeTab === tab.id ? "text-white" : "text-[#455F84]"
                }
              >
                {tab.icon}
              </span>
              {tab.name}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 md:py-16 md:px-6 lg:px-12 bg-gray-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeTab === "guides" &&
              guides.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-4xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#455F84]/20 transition-all duration-500 group flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#455F84] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 bg-[#455F84]/10 text-[#455F84] text-xs font-bold uppercase tracking-widest rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1 font-medium">
                      ⏱️ {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#455F84] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 grow leading-relaxed">
                    {item.description}
                  </p>
                  <button className="flex items-center gap-2 text-[#455F84] font-bold group-hover:gap-4 transition-all duration-300">
                    Read Guide <ArrowRight className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}

            {activeTab === "templates" &&
              templates.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-4xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#455F84]/20 transition-all duration-500 group flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#455F84] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#455F84]/5 flex items-center justify-center text-[#455F84] group-hover:bg-[#455F84] group-hover:text-white transition-all duration-500">
                      <FileText className="w-7 h-7" />
                    </div>
                    <span className="text-sm text-gray-500 font-bold tracking-wider uppercase">
                      {item.format}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#455F84] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 grow leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                    <span className="text-sm text-gray-500 font-medium">
                      {item.downloads} downloads
                    </span>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold border-2 transition-all duration-300 hover:bg-[#455F84] hover:text-white bg-white text-[#455F84] border-[#455F84] shadow-md">
                      <Download className="w-5 h-5" /> Download
                    </button>
                  </div>
                </motion.div>
              ))}

            {activeTab === "tools" &&
              tools.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-4xl p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[#455F84]/20 transition-all duration-500 group flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#455F84] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#455F84]/5 flex items-center justify-center text-[#455F84] group-hover:bg-[#455F84] group-hover:text-white transition-all duration-500">
                      <Wrench className="w-7 h-7" />
                    </div>
                    <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#455F84] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-8 grow leading-relaxed">
                    {item.description}
                  </p>
                  <button className="w-full py-4 rounded-2xl font-bold text-white bg-[#455F84] hover:bg-[#3a506f] flex items-center justify-center gap-3 shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Launch Tool <ExternalLink className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Request a Resource CTA */}
      <div className="p-2 my-12 md:my-20">
        <section className="relative py-16 px-6 md:py-24 md:px-12 overflow-hidden rounded-4xl min-h-[500px] bg-black flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="text-white"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                  Can't find what you're looking for?
                </h2>
                <p className="text-xl mb-10 text-white/80 leading-relaxed">
                  We are constantly expanding our library. If there's a specific
                  guide, template, or tool you need, let us know and we'll
                  prioritize it.
                </p>
                <button className="inline-flex bg-[#455F84] hover:bg-[#3a506f] text-white gap-3 items-center font-bold px-10 py-5 rounded-lg transition-all duration-300 shadow-2xl transform hover:-translate-y-1">
                  Request a Resource
                  <ArrowRight className="w-6 h-6" />
                </button>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="hidden md:flex justify-end"
              >
                <div className="bg-white/10 backdrop-blur-xl p-12 rounded-4xl border border-white/20 shadow-2xl max-w-sm text-center">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-xl">
                    💡
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Your Idea Matters
                  </h3>
                  <p className="text-white/70">
                    Help us build the most comprehensive digital toolkit for
                    Rwanda.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter */}
      <section className="py-20 px-4 md:py-32 md:px-6 lg:px-12 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-[#455F84] font-bold tracking-widest uppercase text-sm mb-4 block">
            Newsletter
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-gray-500 mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
            Get the latest digital compliance guides and industry tools
            delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto p-2 bg-gray-50 rounded-lg border border-gray-100 shadow-inner">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-8 py-5 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-lg"
            />
            <button
              type="submit"
              className="px-10 py-5 rounded-lg font-bold bg-[#455F84] hover:bg-[#3a506f] text-white shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Subscribe Now
            </button>
          </form>
        </motion.div>
      </section>
      <PartnersSection />
    </>
  );
};

export default ResourcesPage;
