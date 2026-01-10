const DPNHero = () => {
  return (
    <div className="p-2">
      <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden rounded-xl flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/all/hero.jpg')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need to Succeed Online
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Access guides, templates, and tools to help you build, grow, and
            secure your digital business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DPNHero;
