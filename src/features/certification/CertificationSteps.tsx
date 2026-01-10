import { darkColor, primaryColor } from "../../lib/site";

const CertificationSteps = () => {
  return (
    <div className="p-2 mb-20">
      <section
        className="p-6 md:p-30 rounded-[16px] text-white"
        style={{ backgroundColor: darkColor }}
      >
        <div className="">
          <div className="grid xl:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              How To Get DBI Trust Seal
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Follow these 4 simple steps to earn your Trust Seal and verify
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16">
            {[
              {
                step: "Step 01",
                title: "Sector Check",
                description:
                  "Confirm your company fits into one of the verified sectors",
              },
              {
                step: "Step 02",
                title: "Eligibility Check",
                description: "Check your eligibility notice before starting.",
              },
              {
                step: "Step 03",
                title: "Self Assessment",
                description:
                  "Complete the self-assessment for your specific sector.",
              },
              {
                step: "Step 04",
                title: "Seal Integration",
                description: "Integrate the DBI Trust Seal on your platforms.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-start group"
              >
                {/* Step Badge */}
                <div
                  className="text-white px-8 py-3 rounded-full text-xl inline-block mb-6 relative z-10 shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: primaryColor }}
                >
                  {item.step}
                </div>

                {/* Dotted Line - Connecting badge to card */}
                <div
                  className={`hidden md:block absolute top-8 left-14 bottom-0 w-px h-16 border-l-2 border-dotted border-[#206bb1] z-0`}
                />

                {/* Content Card */}
                <div className="bg-white/10 hover:bg-white/20 text-white rounded-xl p-8 w-full flex-1 transition-all duration-300 relative z-10 mt-4 backdrop-blur-sm border border-white/10 hover:shadow-2xl transform hover:-translate-y-1">
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationSteps;
