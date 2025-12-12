const Hero = () => {
  // Profile Images for trust badge
  const profilesImages = [
    "/all/profile.jpg",
    "/all/profile1.jpg",
    "/all/profile2.jpg",
    "/all/profile3.jpg",
  ];

  return (
    <section className="relative min-h-screen  w-full overflow-hidden rounded-[20px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/all/hero.jpg')" }}
      />

      {/* Gradient Overlay - darker on left for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-[#03396C]/70 via-[#03396C00]/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="max-w-xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
            The Standard for
            <br />
            Digital Trust in Rwanda
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
            The official verification partner for startups, fintechs, and
            e-commerce platforms. We certify businesses and upskill
            professionals to accelerate the digital economy.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-[#03396C] font-medium px-6 py-4 rounded-md transition-colors duration-200 mb-12"
          >
            Get Your Trust Seal
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-4 bg-gray-500/20 border-gray-500/20 border backdrop-blur-sm rounded-md px-6 py-5">
            {/* Company Logos */}
            <div className="flex items-center -space-x-3">
              {profilesImages.map((logo, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Company ${index + 1}`}
                    className={`w-10 h-10 object-cover z-[${index}]`}
                  />
                </div>
              ))}
              {/* Plus indicator */}
              <div className="w-10 h-10 relative rounded-full z-10 bg-[#03396C] border-2 border-transparent overflow-hidden flex items-center justify-center">
                <img
                  src={profilesImages[0]}
                  alt={`Company`}
                  className="absolute w-10 h-10 object-cover z-0 opacity-50"
                />
                <span className="text-white text-sm font-bold z-11">+</span>
              </div>
            </div>

            {/* Trust Text */}
            <span className="text-white text-sm font-medium">
              Trusted by <span className="text-blue-400">50+</span> Verified
              Businesses
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
