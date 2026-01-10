import { Shield, Lightbulb, Scale, Handshake } from "lucide-react";
import { primaryColor } from "../../lib/site";

const AboutValues = () => {
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
  );
};

export default AboutValues;
