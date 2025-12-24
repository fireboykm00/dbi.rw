import PartnersSection from "../components/PartnersSection";
import { primaryColor, primaryColorDark } from "../lib/site";
import {
  Shield,
  Lightbulb,
  Scale,
  Handshake,
  ArrowRightIcon,
} from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      title: "Trust",
      description: "Building confidence in Rwanda's digital economy",
      icon: Shield,
    },
    {
      title: "Innovation",
      description: "Driving digital transformation forward",
      icon: Lightbulb,
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards",
      icon: Scale,
    },
    {
      title: "Inclusion",
      description: "Ensuring digital access for all Rwandans",
      icon: Handshake,
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
              Building Trust in Rwanda's Digital Economy
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The Digital Business Integrity Initiative empowers Rwandan
              businesses through certification, education, and innovation.
            </p>
          </div>
        </section>
      </div>

      {/* What is DBI Section - Reimagined */}
      <section className="py-24 px-4 md:px-6 lg:px-12 bg-white overflow-hidden relative">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none hidden xl:block">
          <Shield className="w-[600px] h-[600px] rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Content Side */}
            <div className="lg:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 mb-6">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  About the Institute
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1] tracking-tight text-gray-900">
                Pioneering <br />
                <span style={{ color: primaryColor }}>Digital Excellence.</span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-light">
                The Digital Business Institute (DBI) stands as a beacon of
                progress in Rwanda, serving as the dedicated capacity-building
                arm of the Rwanda ICT Chamber. We bridge the gap between global
                standards and local innovation.
              </p>

              <div className="grid sm:grid-cols-1 gap-4">
                {[
                  {
                    title: "Acceleration of Digitalization",
                    desc: "Driving rapid adoption of tech across sectors",
                  },
                  {
                    title: "Expanding Digital Exports",
                    desc: "Positioning Rwandan tech on the global map",
                  },
                  {
                    title: "Increasing Competitiveness",
                    desc: "Ensuring local businesses meet world-class metrics",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-6 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-1.5 h-8 rounded-full transition-all duration-300 group-hover:h-full"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side */}
            <div className="lg:w-1/2 relative">
              <div className="relative z-10">
                <div className="aspect-4/5 rounded-4xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img
                    src="/all/56d112e5e1cd2d4b5abb8a898f4a3655b593e8f5.jpg"
                    alt="Digital Innovation"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Info Card */}
                <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-8 rounded-3xl shadow-2xl max-w-[280px] border border-gray-100 hidden md:block animate-bounce-slow">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}10` }}
                  >
                    <Handshake
                      className="w-6 h-6"
                      style={{ color: primaryColor }}
                    />
                  </div>
                  <h5 className="text-lg font-bold text-gray-900 mb-2">
                    ICT Chamber Pillar
                  </h5>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Official capacity-building arm driving the national digital
                    transformation agenda.
                  </p>
                </div>
              </div>

              {/* Decorative Background Shape */}
              <div
                className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl opacity-20 -z-10"
                style={{ backgroundColor: primaryColor }}
              />
              <div
                className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-20 -z-10"
                style={{ backgroundColor: primaryColorDark }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Reimagined */}
      <section className="py-24 px-4 md:px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Background Decorative Text */}
            <div className="absolute -top-20 -left-12 text-[15rem] font-black text-gray-50 select-none pointer-events-none hidden lg:block uppercase tracking-tighter">
              Purpose
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              {/* Mission - Bold & Impactful */}
              <div className="lg:col-span-7">
                <div
                  className="rounded-[40px] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden group transition-all duration-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
                  style={{ backgroundColor: primaryColor }}
                >
                  <div className="absolute -top-10 -right-10 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                    <Shield className="w-64 h-64" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-bold tracking-widest uppercase opacity-80">
                        Our Mission
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">
                      Establishing Trust for a <br />
                      <span className="text-white/70">Digital Nation.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
                      To establish Rwanda as a trusted hub for digital commerce
                      by certifying businesses that meet international standards
                      of security, privacy, and consumer protection.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision - Minimalist & Elegant */}
              <div className="lg:col-span-5">
                <div className="lg:pl-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center`}
                      style={{ backgroundColor: `${primaryColor}10` }}
                    >
                      <Lightbulb
                        className="w-6 h-6"
                        style={{ color: primaryColor }}
                      />
                    </div>
                    <span
                      className="text-sm font-bold tracking-widest uppercase"
                      style={{ color: primaryColor }}
                    >
                      Our Vision
                    </span>
                  </div>

                  <div className="relative">
                    {/* Vertical line indicator */}
                    <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gray-100 rounded-full overflow-hidden hidden md:block">
                      <div
                        className="h-1/2 w-full transition-all duration-700 group-hover:h-full"
                        style={{ backgroundColor: primaryColor }}
                      />
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                      Confidence in every <br />
                      <span style={{ color: primaryColor }}>
                        Digital interaction.
                      </span>
                    </h3>

                    <p className="text-xl text-gray-600 leading-relaxed font-light italic">
                      "A Rwanda where every citizen can engage in digital
                      commerce with complete confidence, knowing that certified
                      businesses operate with integrity and transparency."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 md:py-24 md:px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span
              className={`text-[${primaryColor}] font-bold tracking-widest uppercase text-sm`}
            >
              Our DNA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              What Drives Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className={`bg-white p-10 rounded-5xl shadow-sm border border-gray-100 text-center hover:shadow-2xl hover:border-[${primaryColor}]/20 transition-all duration-200 group relative overflow-hidden`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-[${primaryColor}] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200`}
                />
                <div className="mb-8 flex justify-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-200">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-[${primaryColor}]/5 flex items-center justify-center group-hover:bg-[${primaryColor}] transition-colors duration-200`}
                  >
                    <value.icon
                      className={`w-10 h-10 text-[${primaryColor}] transition-colors`}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
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
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
              {/* Text Content */}
              <div className="text-white">
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
                  className={`inline-flex bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white gap-2 items-center font-bold px-8 py-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1`}
                >
                  Become A Member
                  <ArrowRightIcon className="w-5" />
                </a>
              </div>

              {/* Logo Card */}
              <div className="flex justify-center md:justify-end">
                <div className="bg-white p-12 rounded-xl shadow-2xl max-w-md w-full flex flex-col items-center text-center transition-transform hover:scale-105 duration-200">
                  {/* Using a placeholder or existing logo, user can replace */}
                  <img
                    src="/company/bfbd458ea5ba115505dd9277dffa7ff895a4e613.png"
                    alt="Rwanda ICT Chamber"
                    className="w-48 h-auto mb-6 transition-all duration-200"
                  />
                  <div className="border-t-2 border-gray-200 w-16 my-4" />
                  <p className="text-gray-500 font-medium">
                    Connect. Grow. Expand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PartnersSection />
      </div>
    </>
  );
};

export default AboutPage;
