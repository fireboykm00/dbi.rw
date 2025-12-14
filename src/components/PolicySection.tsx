import { darkColor, primaryColor } from "../lib/site";

const PolicySection = () => {
  return (
    <section className="relative w-full bg-white py-20">
      {/* Background Shape */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom-left opacity-40"
        style={{ backgroundImage: "url('/shapes/shapes.svg')" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side - Image */}
          <div className="flex-1 w-full max-w-lg">
            <img
              src="/all/01e93083026649cc62f2b83603f2e70c2855a428.jpg"
              alt="Team collaboration"
              className="w-full object-cover h-full min-h-[600px] rounded-2xl -rotate-2"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 max-w-xl relative">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight mb-6">
              Bridging Policy &<br />
              Practice.
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              The Digital Business Institute (DBI) is a Trade and Investment
              Support Institution (TISI) dedicated to accelerating Rwanda's
              digital exports. Operating under the Private Sector Federation
              (PSF), we provide the standards that help Rwandan businesses
              compete globally.
            </p>

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-3 font-medium px-6 py-4 rounded-md transition-colors duration-200 hover:opacity-90"
              style={{ backgroundColor: darkColor, color: primaryColor }}
            >
              Read Our Mission
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {/* Members Badge */}
            <div className="absolute -right-4 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <div
                className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center"
                style={{ backgroundColor: darkColor, color: primaryColor }}
              >
                <span className="text-5xl font-bold">
                  300<sup className="text-lg">+</sup>
                </span>
                <span className="text-sm">Members</span>
                {/* Speech bubble tail */}
                <div
                  className="absolute bottom-0 -left-6 w-10 h-10 rounded-full"
                  style={{ backgroundColor: darkColor }}
                />
                <div
                  className="absolute bottom-5 -left-2 w-8 h-5 -rotate-45"
                  style={{ backgroundColor: darkColor }}
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
