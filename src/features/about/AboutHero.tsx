const AboutHero = () => {
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
            Building Trust in Rwanda's Digital Economy
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            The Digital Business Integrity Initiative empowers Rwandan
            businesses through certification, education, and innovation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
