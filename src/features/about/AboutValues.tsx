import { Shield, Lightbulb, Scale, Handshake } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      title: "Trust",
      description:
        "Building confidence in Rwanda's digital economy through transparency.",
      icon: Shield,
      color: "text-blue-600",
      bg: "bg-blue-50/50",
    },
    {
      title: "Innovation",
      description:
        "Driving digital transformation forward with edge solutions.",
      icon: Lightbulb,
      color: "text-amber-500",
      bg: "bg-amber-50/50",
    },
    {
      title: "Integrity",
      description:
        "Upholding the highest ethical standards in every transaction.",
      icon: Scale,
      color: "text-emerald-600",
      bg: "bg-emerald-50/50",
    },
    {
      title: "Inclusion",
      description:
        "Ensuring digital access for all Rwandans, leaving no one behind.",
      icon: Handshake,
      color: "text-indigo-600",
      bg: "bg-indigo-50/50",
    },
  ];

  return (
    <section className="py-24 px-4 md:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              The Principles <br className="hidden md:block" />
              <span className="text-gray-400">That Guide Us</span>
            </h2>
            <div className="h-1 w-20 rounded-full bg-brand-primary" />
          </div>
          <p className="text-gray-500 text-lg max-w-sm font-light leading-relaxed">
            Our values are the foundation of everything we do, ensuring we serve
            the Rwandan digital community with excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="group p-10 rounded-[32px] border border-gray-100 bg-white transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${value.bg} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
              >
                <value.icon className={`w-7 h-7 ${value.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-light">
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
