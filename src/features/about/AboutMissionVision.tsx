"use client";

const AboutMissionVision = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Statement */}
        <div className="max-w-4xl mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-12">
            Pioneering Digital Excellence <br />
            <span className="text-gray-400 font-light italic">
              in the heart of Rwanda.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
            The Digital Business Institute (DBI) serves as the strategic
            capacity-building arm of the Rwanda ICT Chamber, dedicated to
            bridging the gap between local innovation and international
            standards.
          </p>
        </div>

        {/* Pillars of Action Area */}
        <div className="pt-10 border-t border-gray-100">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
            {[
              {
                title: "Digitalization",
                desc: "Accelerating technology adoption to drive economic growth across all sectors of the Rwandan economy.",
              },
              {
                title: "Exports",
                desc: "Expanding the reach of Rwandan digital products and services into the global marketplace through strategic positioning.",
              },
              {
                title: "Competitiveness",
                desc: "Ensuring domestic companies achieve and sustain world-class performance metrics and service quality.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-4">
                <h4 className="text-lg font-bold text-gray-900 tracking-tight underline decoration-gray-100 underline-offset-8">
                  {item.title}
                </h4>
                <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
