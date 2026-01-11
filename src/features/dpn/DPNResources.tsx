import Image from "next/image";
const DPNResources = () => {
  return (
    <section className="py-24 px-4 md:py-32 md:px-6 lg:px-12 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side (Left) */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Resource Catalogue
            </h2>

            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                Our team of experts are continuously observing the market for
                valuable information and capacity building resources.
              </p>

              <p className="text-lg text-gray-500 leading-relaxed">
                Our team of experts curated a catalogue of support offers (e.g.
                information resources, online trainings and self-study
                materials) along all criteria of the DBI Certificate, in order
                to give you guidance in the self-paced capacity development for
                your company.
              </p>

              <div className="pt-4">
                <p className="text-gray-900 font-bold flex items-center gap-2 mb-6">
                  <span className="w-8 h-[2px] rounded-full bg-brand-primary" />
                  You can search the catalogue along the following criteria:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Industry Standards",
                    "Regulatory Compliance",
                    "Digital Security",
                    "Operational Excellence",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 group">
                      <div className="w-2 h-2 rounded-full transition-transform group-hover:scale-150 bg-brand-primary" />
                      <span className="text-gray-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side (Right) */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/business-advisory.jpg"
                alt="Business experts collaborating on resource catalogue"
                className="w-full h-auto object-cover"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent pointer-events-none" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none bg-brand-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DPNResources;
