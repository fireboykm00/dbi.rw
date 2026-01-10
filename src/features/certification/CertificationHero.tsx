import { ArrowRight } from "lucide-react";
import { primaryColor, primaryColorDark } from "../../lib/site";
import Link from "next/link";
import { startAssessmentLink } from "../../lib/site";
const CertificationHero = () => {
  return (
    <div className="p-2">
      <section className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden rounded-xl flex flex-col justify-end bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/all/certification-hero-bg.jpg')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-start justify-end pt-40 pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            DBI Certificates
          </h1>

          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            In the quest to smoothen the trust bridge, the DBI Seal serves as a
            credible mark of excellence. It signals to partners that your
            business meets high standards of quality and compliance based on
            industry best practices.
          </p>

          <div className="pt-2">
            <Link
              href={startAssessmentLink}
              className={`inline-flex items-center gap-2 bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white font-medium px-6 py-4 rounded-md transition-colors duration-300 mb-12`}
            >
              Start Assessment
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationHero;
