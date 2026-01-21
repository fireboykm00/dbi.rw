const AboutHero = () => {
  return (
    <div className="p-2">
      <section className="pt-32 relative min-h-[60vh] md:min-h-[70vh] w-full overflow-hidden rounded-[24px] flex items-center bg-black">
        {/* Background Image with optimized overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/all/hero.webp')",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Everything to know about DBI.
          </h1>
        </div>

        {/* Subtle decorative bottom glow */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-[120px] opacity-20 bg-brand-primary" />
      </section>
    </div>
  );
};

export default AboutHero;
