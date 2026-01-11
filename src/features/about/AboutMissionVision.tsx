const AboutMissionVision = () => {
  return (
    <div className="px-2 mb-20 2xl:mb-28">
      <section className="py-24 px-6 md:px-12 2xl:py-32 2xl:px-16 rounded-[24px] text-white bg-brand-dark">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto">
          {/* Main Statement */}
          <div className="max-w-4xl 2xl:max-w-5xl mb-10 2xl:mb-14">
            <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-12 2xl:mb-16">
              Pioneering Digital Excellence <br />
              <span className="text-white/40 font-light italic">
                in the heart of Rwanda.
              </span>
            </h2>
            <p className="text-xl md:text-2xl 2xl:text-3xl text-white/70 font-light leading-relaxed max-w-3xl 2xl:max-w-4xl">
              The Digital Business Institute (DBI) serves as the strategic
              capacity-building arm of the Rwanda ICT Chamber, dedicated to
              bridging the gap between local innovation and international
              standards.
            </p>
          </div>

          {/* Pillars of Action Area */}
          <div className="pt-10 2xl:pt-14 border-t border-white/10">
            <div className="grid md:grid-cols-3 gap-12 lg:gap-24 2xl:gap-32">
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
                <div key={item.title} className="space-y-4 2xl:space-y-6">
                  <h4 className="text-lg 2xl:text-xl font-bold text-white tracking-tight underline decoration-white/10 underline-offset-8">
                    {item.title}
                  </h4>
                  <p className="text-white/60 font-light leading-relaxed text-sm md:text-base 2xl:text-lg">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMissionVision;
