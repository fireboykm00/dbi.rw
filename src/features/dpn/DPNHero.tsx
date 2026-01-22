const DPNHero = () => {
  return (
    <div className="p-2">
      <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden rounded-xl flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Business-Consulting-and-Advisory.webp')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl 2xl:max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white uppercase tracking-tight">
            Digital Professionals Networks
          </h1>
        </div>
      </section>
    </div>
  );
};

export default DPNHero;
