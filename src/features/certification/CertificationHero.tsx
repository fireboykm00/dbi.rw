import { ArrowRight } from "lucide-react";
import { primaryColor, primaryColorDark } from "../../lib/site";

const CertificationHero = () => {
  return (
    <div className="p-2">
      <section className="relative min-h-[60vh] md:min-h-[85vh] lg:min-h-[90vh] w-full overflow-hidden rounded-xl bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/all/01e93083026649cc62f2b83603f2e70c2855a428.jpg')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end min-h-[60vh] md:min-h-screen max-w-7xl mx-auto px-4 md:px-6 lg:px-12 pt-16 md:pt-24 pb-8 md:pb-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6 transition-all duration-300">
              The Mark of Excellence and Assurance.
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              The DBI Trust Seal signals to customers and partners that your
              business meets high standards of quality and compliance.
            </p>

            <a
              href="#"
              className={`inline-flex items-center gap-3 hover:bg-[${primaryColorDark}] text-white font-medium px-6 py-4 rounded-md transition-all duration-300 mb-12 shadow-md hover:shadow-lg group hover:-translate-y-1`}
              style={{ backgroundColor: primaryColor }}
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationHero;
