const AcademyHero = () => {
  return (
    <div className="p-2">
      <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden rounded-xl flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/all/training-bg.webp')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Master Global Tech Standards
          </h1>
        </div>
      </section>
    </div>
  );
};

export default AcademyHero;
