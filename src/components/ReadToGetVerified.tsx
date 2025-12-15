import { ArrowRightIcon } from "@heroicons/react/24/solid";
const ReadyToGetVerified = () => {
  return (
    <div className="p-2 my-6 md:my-10 lg:my-16">
      <section className="relative rounded-3xl overflow-hidden min-h-[500px] xl:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-x-[-1]"
          style={{
            backgroundImage:
              "url('/all/310a11fe05bb9a32ed316a5104ae8c97bd08aca4.jpg')", // Placeholder image
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to get verified?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Start the assessment for all categories
              <br />
              (Fintech, Software, Edtech, Startup, and E-Commerce) in our
              unified portal.
            </p>
            <button className="bg-[#FBD40E] text-[#212529] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-[#e0bd0c] transition-all">
              Start Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadyToGetVerified;
