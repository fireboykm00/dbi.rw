import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { startAssessmentLink } from "../../lib/site";
import Link from "next/link";

const ReadyToGetVerified = () => {
  return (
    <div className="p-2 my-6 md:my-10 lg:my-16">
      <section className="relative rounded-3xl overflow-hidden min-h-[500px] xl:min-h-[700px] flex items-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-x-[-1] opacity-60"
            style={{
              backgroundImage: "url('/all/ict-chamber-bg.webp')",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to get verified?
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              Start the assessment for all categories
              <br />
              (Fintech, Software, Edtech, Startup, and E-Commerce) in our
              unified portal.
            </p>
            <Link
              href={startAssessmentLink}
              className="bg-brand-primary hover:bg-brand-primary-dark inline-flex items-center gap-2 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-300 shadow-lg"
            >
              Start Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReadyToGetVerified;
