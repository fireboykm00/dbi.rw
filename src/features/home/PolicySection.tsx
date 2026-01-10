import { primaryColor } from "../../lib/site";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const PolicySection = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-20 overflow-hidden">
      {/* Background Shape */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom-left opacity-40"
        style={{ backgroundImage: "url('/shapes/shapes.svg')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center xl:items-start gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Side - Image */}
          <div className="flex-1 w-full max-w-lg">
            <img
              src="/all/01e93083026649cc62f2b83603f2e70c2855a428.jpg"
              alt="Team collaboration"
              className="w-full object-cover h-64 md:h-full md:min-h-[600px] rounded-2xl -rotate-2 transition-transform duration-700 hover:rotate-0"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col items-start max-w-xl relative">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
              Bridging Policy &<br />
              Practice.
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-md">
              The Digital Business Institute (DBI) is a Trade and Investment
              Support Institution (TISI) dedicated to accelerating Rwanda's
              digital exports. Operating under the Private Sector Federation
              (PSF), we provide the standards that help Rwandan businesses
              compete globally.
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 font-medium px-6 py-4 rounded-md transition-all duration-300 bg-[#03396C] hover:bg-[#022b52] text-white shadow-md hover:shadow-lg transform hover:-translate-y-1 z-20"
            >
              Read Our Mission
              <ArrowRightIcon className="w-5 h-5" />
            </a>

            {/* --- COMPONENT 1: Text Version (Visible Mobile/Tablet, Hidden on XL) --- */}
            <div
              className="flex xl:hidden mt-10 items-center gap-4 py-2 border-l-4 pl-4 transition-all duration-300 hover:pl-6"
              style={{ borderColor: primaryColor }}
            >
              <span
                className="text-5xl font-bold"
                style={{ color: primaryColor }}
              >
                300+
              </span>
              <span className="text-3xl text-gray-700 font-medium">
                Members
              </span>
            </div>

            {/* --- COMPONENT 2: Bubble Version (Hidden on Mobile, Visible Absolute on XL) --- */}
            <div className="hidden xl:flex absolute -right-16 bottom-1/2 transform translate-y-1/2 z-10 hover:scale-110 transition-transform duration-200">
              <div
                className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-lg"
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                <span className="text-5xl font-bold">
                  300<sup className="text-lg">+</sup>
                </span>
                <span className="text-sm">Members</span>

                {/* Speech bubble tail */}
                <div
                  className="absolute bottom-0 -left-6 w-10 h-10 rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <div
                  className="absolute bottom-5 -left-2 w-8 h-5 -rotate-45"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
