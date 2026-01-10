"use client";

const AboutWhatIsDBI = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.02]"
          style={{
            backgroundImage: "url('/shapes/shapes.svg')",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-8">
            What is DBI?
          </h2>
        </div>

        {/* Main Content */}
        <div className="space-y-10 mb-20">
          <p className="text-2xl md:text-3xl text-gray-600 font-light leading-snug">
            <span className="font-bold text-gray-900 uppercase tracking-tight">
              The Digital Business Institute
            </span>{" "}
            is a trade and investment support institution and the
            capacity-building arm of the Rwanda ICT Chamber.
          </p>

          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-3xl">
            We focus on accelerating digitalization for Rwandan businesses,
            expanding digital exports, and increasing the global competitiveness
            of Rwandan ICT companies through strategic certification and
            support.
          </p>
        </div>

        {/* Core Pillars / Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Digitalize", desc: "Local Rwandan Businesses" },
            { label: "Expand", desc: "National Digital Exports" },
            { label: "Increase", desc: "Global Competitiveness" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group p-8 rounded-3xl border border-gray-100 bg-gray-50/30"
            >
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhatIsDBI;
