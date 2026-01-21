const FAQHero = () => {
  return (
    <div className="p-2">
      <section className="relative min-h-[60vh] w-full overflow-hidden rounded-[20px] flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/all/bridging-gap-bg.webp')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/50" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Find answers to common questions about DBI, Trust Seal, and our
            services.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FAQHero;
