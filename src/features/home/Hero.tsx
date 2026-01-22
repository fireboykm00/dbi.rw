import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { startAssessmentLink } from "../../lib/site";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full bg-black overflow-hidden rounded-[20px]">
      {/* Background Image - Optimized with Next/Image */}
      <div className="absolute inset-0">
        <Image
          src="/all/hero.webp"
          alt="DBI Hero Background"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center"
          style={{ objectPosition: 'center' }}
        />
      </div>

      {/* Gradient Overlay - darker on left for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end min-h-[80vh] md:min-h-screen max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 2xl:px-16 pt-32 md:pt-40 pb-12 2xl:pb-20">
        <div className="max-w-xl 2xl:max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4rem] 2xl:text-[5rem] font-bold text-white leading-tight mb-6 2xl:mb-8">
            What is DBI?
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-base md:text-lg 2xl:text-xl leading-relaxed mb-8 2xl:mb-12 max-w-2xl">
            DBI is The Digital Business Institute, a trade and investment
            support institution (TISI) and a capacity building arm of the Rwanda
            ICT Chamber Aiming at the Acceleration of Digitalization of Rwandan
            Businesses; Expanding Rwanda&apos;s Digital Exports as well as
            Increasing Competitiveness of Rwandan ICT Companies.
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href={startAssessmentLink}
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-medium px-6 py-4 2xl:px-8 2xl:py-5 2xl:text-lg rounded-md transition-colors duration-300 mb-12"
            >
              Get Your Trust Seal
              <ArrowRightIcon className="w-5 2xl:w-6" />
            </Link>
          </div>

          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 bg-gray-500/10 border-gray-500/40 border backdrop-blur-sm rounded-xl px-6 py-5 max-w-full">
            <span className="text-white text-sm 2xl:text-base font-medium whitespace-nowrap">
              Our Trust Seals
            </span>
            <div className="flex flex-wrap items-center gap-3">
              {[
                "/seals/startup.png",
                "/seals/edtech.png",
                "/seals/ecommerce.png",
                "/seals/sod.png",
                "/seals/fintech.png",
                "/seals/mobility.png",
              ].map((seal, index) => (
                <div
                  key={index}
                  className="w-12 h-12 2xl:w-14 2xl:h-14 bg-white/10 rounded-full flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300 border border-white/10"
                  title="DBI Trust Seal"
                >
                  <Image
                    src={seal}
                    alt={`Seal ${index + 1}`}
                    className="w-full h-full object-contain"
                    width={48}
                    height={48}
                    sizes="(max-width: 768px) 48px, 56px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;