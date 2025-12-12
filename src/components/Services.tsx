import React from "react";

const services = [
  {
    title: "Training",
    description:
      "Comprehensive digital skills training for businesses and individuals.",
    icon: "🎓",
    link: "/training",
  },
  {
    title: "Certification",
    description:
      "Industry-recognized certifications to validate your expertise.",
    icon: "📜",
    link: "/certification",
  },
  {
    title: "Support Catalogue",
    description: "Tailored support services to help your business grow.",
    icon: "🛠️",
    link: "/support",
  },
  {
    title: "Community",
    description:
      "Join a vibrant community of tech professionals and entrepreneurs.",
    icon: "🤝",
    link: "/community",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#455F84] mb-4">
            Our Key Pillars
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering the digital economy through education, certification, and
            community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="group block p-8 bg-gray-50 rounded-2xl hover:bg-[#455F84] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#455F84] group-hover:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
