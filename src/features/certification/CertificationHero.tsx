import { ArrowRight } from "lucide-react";
import { primaryColor, primaryColorDark } from "../../lib/site";
import Link from "next/link";
import { startAssessmentLink } from "../../lib/site";
const CertificationHero = () => {
  return (
    <div className="p-2">
      <section className="relative min-h-[80vh] md:min-h-screen w-full overflow-hidden rounded-xl flex flex-col justify-end bg-black">
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
        <div className="relative z-10 px-6 md:px-12 2xl:px-16 max-w-7xl 2xl:max-w-[1600px] mx-auto w-full flex flex-col items-start justify-end min-h-[80vh] md:min-h-screen pt-40 pb-12 2xl:pb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-white mb-6 2xl:mb-8 leading-tight">
            DBI Trust Certificates
          </h1>

          <div className="max-w-2xl 2xl:max-w-3xl space-y-6 mb-10 2xl:mb-14">
            <p className="text-xl md:text-2xl 2xl:text-3xl text-white font-medium leading-relaxed">
              In the quest to smoothen the trust bridge, the DBI Seal serves as
              a credible mark of excellence.
            </p>
            <p className="text-white/80 text-lg md:text-xl 2xl:text-2xl leading-relaxed font-light">
              It signals to partners that your business meets high standards of
              quality and compliance based on industry best practices. Before
              offering the Seal, DBI evaluates credibility based on industry
              best practices. Ultimately, this Seal serves as an imperative tool
              for businesses to depict the trustworthiness of their services,
              spanning from inception to delivery.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href={startAssessmentLink}
              className={`inline-flex items-center gap-2 bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white font-medium px-6 py-4 2xl:px-8 2xl:py-5 2xl:text-lg rounded-md transition-colors duration-300 mb-12`}
            >
              Start Assessment
              <ArrowRight className="w-6 h-6 2xl:w-7 2xl:h-7 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationHero;
