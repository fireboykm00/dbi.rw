import { Shield, Handshake, Lightbulb } from "lucide-react";
import { primaryColor, primaryColorDark } from "../../lib/site";
import Image from "next/image";

const AboutMissionVision = () => {
  return (
    <>
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
                  <Image
                    src="/all/56d112e5e1cd2d4b5abb8a898f4a3655b593e8f5.jpg"
                    alt="Digital Innovation"
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
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
                      &quot;A Rwanda where every citizen can engage in digital
                      commerce with complete confidence, knowing that certified
                      businesses operate with integrity and transparency.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMissionVision;
