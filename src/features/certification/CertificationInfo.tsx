"use client";

const CertificationInfo = () => {
  return (
    <section className="py-24 px-6 md:px-12 2xl:py-36 2xl:px-16 bg-white">
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto text-center">
        {/* Main Title Area */}
        <div className="inline-flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            DBI Certificate
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>

        {/* Description Content */}
        <div className="space-y-10">
          <p className="text-xl md:text-2xl 2xl:text-3xl text-gray-700 font-light leading-relaxed">
            <span className="font-bold text-gray-900">
              Digital Business Institute (DBI)
            </span>{" "}
            is granting a certification for ICT Companies active in different
            sectors in Rwanda, such as eCommerce and software development.
          </p>

          <p className="text-lg md:text-xl 2xl:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl 2xl:max-w-4xl mx-auto">
            Each sector has an individual and specific criteria catalogue on
            which the ICT companies are assessed. On the basis of the
            assessment, DBI is developing and collecting training and support
            opportunities for these companies, in order to build capacity in
            needed areas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationInfo;
