import PartnersSection from "../components/PartnersSection";
import { darkColor, primaryColor } from "../lib/site";
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
      icon: <Shield className="w-12 h-12 text-[#212529]" />,
    },
    {
      title: "Innovation",
      description: "Driving digital transformation forward",
      icon: <Lightbulb className="w-12 h-12 text-[#212529]" />,
    },
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards",
      icon: <Scale className="w-12 h-12 text-[#212529]" />,
    },
    {
      title: "Inclusion",
      description: "Ensuring digital access for all Rwandans",
      icon: <Handshake className="w-12 h-12 text-[#212529]" />,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center rounded-xl m-2 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/all/hero.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
            About DBI
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Trust in
            <span className="block" style={{ color: primaryColor }}>
              Rwanda's Digital Economy
            </span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The Digital Business Integrity Initiative empowers Rwandan
            businesses through certification, education, and innovation.
          </p>
        </div>
      </section>

      {/* What is DBI Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{ color: darkColor }}
          >
            What is DBI?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            DBI is The Digital Business Institute, a trade and investment
            support institution (TISI) and a capacity building arm of the Rwanda
            ICT Chamber Aiming at the Acceleration of Digitalization of Rwandan
            Businesses; Expanding Rwanda’s Digital Exports as well as Increasing
            Competitiveness of Rwandan ICT Companies.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl"
              style={{ backgroundColor: `${primaryColor}` }}
            >
              🎯
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To establish Rwanda as a trusted hub for digital commerce by
              certifying businesses that meet international standards of
              security, privacy, and consumer protection.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-3xl"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              🔭
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A Rwanda where every citizen can engage in digital commerce with
              complete confidence, knowing that certified businesses operate
              with integrity and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="text-sm font-semibold uppercase"
              style={{ color: primaryColor }}
            >
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="py-20 px-6" style={{ backgroundColor: primaryColor }}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Certified Businesses" },
            { value: "5,000+", label: "Professionals Trained" },
            { value: "98%", label: "Customer Trust Rate" },
            { value: "50+", label: "Partner Organizations" },
          ].map((stat, i) => (
            <div key={i} className="p-4">
              <div className="text-4xl md:text-5xl font-bold text-[#212529] mb-2">
                {stat.value}
              </div>
              <div className="text-[#212529]/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ICT Chamber Membership CTA */}
      <div className="p-2 my-10">
        <section className="relative py-24 px-6 overflow-hidden rounded-xl min-h-[700px]">
          {/* Background Image & Overlay */}

          <div className="absolute inset-0 bg-linear-to-r from-black/90 to-black/60" />

          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{
              backgroundImage:
                "url('/all/310a11fe05bb9a32ed316a5104ae8c97bd08aca4.jpg')",
            }}
          />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
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
                  className="inline-flex text-[#212529] gap-2 items-center font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:opacity-90"
                  style={{ backgroundColor: primaryColor }}
                >
                  Become A Member
                  <ArrowRightIcon className="w-5" />
                </a>
              </div>

              {/* Logo Card */}
              <div className="flex justify-center md:justify-end">
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
