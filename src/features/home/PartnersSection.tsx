const PartnersSection = () => {
  // Company logos from public/company folder
  const companyLogos = [
    "/company/0626bc97506bb1532997da043f51bfb728da3ff6.png",
    "/company/0643799158194a82f7a285dd7760dbd2e4e73a30.png",
    "/company/0829bc8f641282f41aee58dbb4c784e4f8a07fbb.png",
    "/company/66f5c5c704a036b1c316ef3af4ff07d369fa9e85.png",
    "/company/74076be10a132699f4a2164765e39078c067e7ee.png",
    "/company/97e1d3d26399a5fc94a8a4cc76eb552e34c2136b.png",
    "/company/992d88107160ca0e6b939d237e61c78a8447ea72.png",
    "/company/a5543218548108dc52acc3933872007e7a9a722d.png",
    "/company/bfbd458ea5ba115505dd9277dffa7ff895a4e613.png",
    "/company/dd9dfa52a35d4fd4a475691af87e5d90820b16b8 (1).png",
  ];

  return (
    <section className="relative w-full bg-white py-12 px-4 md:py-16 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h3 className="text-center text-lg font-bold mb-8 md:mb-10 uppercase tracking-wider text-gray-400">
          Powered by Global Standards
        </h3>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8 ">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-center hover:shadow-xl hover:border-gray-200 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
