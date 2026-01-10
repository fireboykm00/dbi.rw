import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { primaryColor, primaryColorDark } from "../../lib/site";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full bg-black overflow-hidden rounded-[20px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/all/hero.jpg')" }}
        />
      </div>

      {/* Gradient Overlay - darker on left for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end min-h-[80vh] md:min-h-screen max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-24 pb-12">
        <div className="max-w-xl">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white leading-tight mb-6">
            What is DBI?
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
            DBI is The Digital Business Institute, a trade and investment
            support institution (TISI) and a capacity building arm of the Rwanda
            ICT Chamber Aiming at the Acceleration of Digitalization of Rwandan
            Businesses; Expanding Rwanda’s Digital Exports as well as Increasing
            Competitiveness of Rwandan ICT Companies.
          </p>

          {/* CTA Button */}
          <div>
            <Link
              href=""
              className={`inline-flex items-center gap-2 bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white font-medium px-6 py-4 rounded-md transition-colors duration-300 mb-12`}
            >
              Get Your Trust Seal
              <ArrowRightIcon className="w-5" />
            </Link>
          </div>

          <div className="inline-flex flex-col md:flex-row items-start md:items-center gap-4 bg-gray-500/10 border-gray-500/40 border backdrop-blur-sm rounded-xl px-6 py-5 max-w-full">
            <span className="text-white text-sm font-medium whitespace-nowrap">
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
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center p-2 hover:scale-110 transition-transform duration-300 border border-white/10"
                  title="DBI Trust Seal"
                >
                  <Image
                    src={seal}
                    alt={`Seal ${index + 1}`}
                    className="w-full h-full object-contain"
                    width={1000}
                    height={1000}
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
