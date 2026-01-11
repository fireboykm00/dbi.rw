import { ArrowRightIcon } from "@heroicons/react/24/solid";

const AcademyCertifications = () => {
  const certifications = [
    {
      title: "Certified Agile Business Analysis",
      description:
        "Optimize workflows and implement IT solutions that add real business value to your organization.",
      tag: "Agile Development & Business Process",
    },
    {
      title: "Certified Tester Foundation Level",
      description:
        "Master the essential testing terminology and concepts used worldwide in the software development lifecycle.",
      tag: "Test Design & Global Standards",
    },
    {
      title: "Quality for DevOps",
      description:
        'Shift from just "testing" to "building quality" into your IT systems within high-performance DevOps teams.',
      tag: "DevOps & Scrum Quality",
    },
  ];

  return (
    <div className="p-2">
      <section className="py-12 px-4 md:py-24 md:px-6 lg:px-12 rounded-[20px] bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            Internationally Accredited Certifications
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-8 grow">{cert.description}</p>
                <div className="mt-auto">
                  <p className="font-bold text-sm mb-6 text-brand-primary">
                    {cert.tag}
                  </p>
                  <button className="cursor-pointer group flex items-center gap-2">
                    <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-1 text-brand-primary" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyCertifications;
