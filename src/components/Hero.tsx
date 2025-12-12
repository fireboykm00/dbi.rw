import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex items-center bg-gray-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.png"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-[#455F84] leading-tight">
            Digital Business <br />
            <span className="text-[#2a4874]">Institute</span>
          </h1>

          <div className="space-y-6 text-lg text-gray-700 max-w-xl">
            <p className="border-l-4 border-[#455F84] pl-4">
              The capacity building arm of the Rwanda ICT Chamber.
            </p>
            <p>
              DBI as a trade and investment support institution – is
              complementing the Rwanda National Strategy for Transformation and
              Prosperity.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/training"
              className="px-8 py-3 bg-[#455F84] text-white font-semibold rounded-lg hover:bg-[#2a4874] transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Training
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-[#455F84] border-2 border-[#455F84] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
            <img
              src="/hero-bg.png"
              alt="Office"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
