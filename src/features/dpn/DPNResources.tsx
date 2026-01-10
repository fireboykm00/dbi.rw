import { BookOpen, FileText, Wrench, ArrowRight } from "lucide-react";
import { primaryColor } from "../../lib/site";

const DPNResources = () => {
  return (
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
              Our resource center is a launchpad for excellence. Each template,
              guide, and tool is specifically engineered to help Rwandan digital
              businesses scale with integrity, trust, and technical precision.
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
  );
};

export default DPNResources;
