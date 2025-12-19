import PartnersSection from "../components/PartnersSection";
import {
  Shield,
  Lightbulb,
  Scale,
  Handshake,
  ArrowRightIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  slideInLeft,
  slideInRight,
  fadeIn,
} from "../lib/animations";

const AboutPage = () => {
  const values = [
    {
      title: "Trust",
      description: "Building confidence in Rwanda's digital economy",
    },
    {
      title: "Innovation",
      description: "Driving digital transformation forward",
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards",
    },
    {
      title: "Inclusion",
      description: "Ensuring digital access for all Rwandans",
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
              Building Trust in Rwanda's Digital Economy
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              The Digital Business Integrity Initiative empowers Rwandan
              businesses through certification, education, and innovation.
            </motion.p>
          </div>
        </section>
      </div>

      {/* What is DBI Section */}
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
                Accelerating Rwanda's <br />
                <span className="text-gray-900">Digital Future.</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                The Digital Business Institute (DBI) is a trade and investment
                support institution (TISI) and the capacity-building arm of the
                Rwanda ICT Chamber.
              </p>
              <div className="space-y-4">
                {[
                  "Acceleration of Digitalization",
                  "Expanding Digital Exports",
                  "Increasing Competitiveness",
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
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/all/56d112e5e1cd2d4b5abb8a898f4a3655b593e8f5.jpg"
                  alt="Digital Innovation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#455F84] rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 md:px-6 lg:px-12 bg-[#455F84] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white/10 backdrop-blur-md p-10 md:p-12 rounded-4xl border border-white/20 hover:bg-white/15 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-3xl shadow-xl">
                🎯
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                To establish Rwanda as a trusted hub for digital commerce by
                certifying businesses that meet international standards of
                security, privacy, and consumer protection.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 md:p-12 rounded-4xl shadow-2xl hover:translate-y-[-8px] transition-all duration-500"
            >
              <div className="w-16 h-16 bg-[#455F84]/10 rounded-2xl flex items-center justify-center mb-8 text-3xl">
                🔭
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Rwanda where every citizen can engage in digital commerce with
                complete confidence, knowing that certified businesses operate
                with integrity and transparency.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:py-24 md:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="text-[#455F84] font-bold tracking-widest uppercase text-sm">
              Our DNA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              What Drives Us
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-10 rounded-5xl shadow-sm border border-gray-100 text-center hover:shadow-2xl hover:border-[#455F84]/20 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-[#455F84] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="mb-8 flex justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="w-20 h-20 rounded-3xl bg-[#455F84]/5 flex items-center justify-center group-hover:bg-[#455F84] transition-colors duration-500">
                    {i === 0 && (
                      <Shield className="w-10 h-10 text-[#455F84] group-hover:text-white transition-colors" />
                    )}
                    {i === 1 && (
                      <Lightbulb className="w-10 h-10 text-[#455F84] group-hover:text-white transition-colors" />
                    )}
                    {i === 2 && (
                      <Scale className="w-10 h-10 text-[#455F84] group-hover:text-white transition-colors" />
                    )}
                    {i === 3 && (
                      <Handshake className="w-10 h-10 text-[#455F84] group-hover:text-white transition-colors" />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ICT Chamber Membership CTA */}
      <div className="p-2 my-6 md:my-10 lg:my-16">
        <section className="relative py-12 px-4 md:py-24 md:px-6 lg:px-12 overflow-hidden rounded-xl min-h-[500px] md:min-h-[700px] bg-black flex items-center">
          {/* Background Image & Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('/all/310a11fe05bb9a32ed316a5104ae8c97bd08aca4.jpg')",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
              {/* Text Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInLeft}
                className="text-white"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Want to become an ICT Chamber member?
                </h2>
                <p className="text-lg mb-10 leading-relaxed text-white/90">
                  The Rwanda ICT Chamber is a member-based organization
                  representing country-based ICT companies under supervision of
                  the Rwanda Private Sector Federation (PSF). The Rwanda ICT
                  Chamber represents more than 300 member companies at different
                  stages of their development: Startups, Small and Medium
                  Enterprises and Corporations.
                </p>
                <a
                  href="#"
                  className="inline-flex bg-[#455F84] hover:bg-[#3a506f] text-white gap-2 items-center font-bold px-8 py-5 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Become A Member
                  <ArrowRightIcon className="w-5" />
                </a>
              </motion.div>

              {/* Logo Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideInRight}
                className="flex justify-center md:justify-end"
              >
                <div className="bg-white p-12 rounded-xl shadow-2xl max-w-md w-full flex flex-col items-center text-center">
                  {/* Using a placeholder or existing logo, user can replace */}
                  <img
                    src="/company/bfbd458ea5ba115505dd9277dffa7ff895a4e613.png"
                    alt="Rwanda ICT Chamber"
                    className="w-48 h-auto mb-6"
                  />
                  <div className="border-t-2 border-gray-200 w-16 my-4" />
                  <p className="text-gray-500 font-medium">
                    Connect. Grow. Expand
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <PartnersSection />
      </div>
    </>
  );
};

export default AboutPage;
