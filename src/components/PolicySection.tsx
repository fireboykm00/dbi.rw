import { darkColor, primaryColor } from "../lib/site";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, scaleIn } from "../lib/animations";

const PolicySection = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-20 overflow-hidden">
      {/* Background Shape */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom-left opacity-40"
        style={{ backgroundImage: "url('/shapes/shapes.svg')" }}
      />

      {/* LINE 12 FIX: Changed items-center to xl:items-start to keep text top-aligned on large screens */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center xl:items-start gap-8 md:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Side - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="flex-1 w-full max-w-lg"
          >
            <img
              src="/all/01e93083026649cc62f2b83603f2e70c2855a428.jpg"
              alt="Team collaboration"
              className="w-full object-cover h-64 md:h-full md:min-h-[600px] rounded-2xl -rotate-2"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="flex-1 flex flex-col items-start max-w-xl relative"
          >
            {/* LINE 24 FIX: Adjusted text sizing for smoother XL scaling */}
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
              className="inline-flex items-center gap-3 font-medium px-6 py-4 rounded-md transition-colors duration-200 hover:opacity-90 z-20"
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

            {/* --- COMPONENT 1: Text Version (Visible Mobile/Tablet, Hidden on XL) --- */}
            {/* Option 1: Subtle Accent Bar */}
            <div
              className="flex xl:hidden mt-10 items-center gap-4 py-2 border-l-4 pl-4"
              style={{ borderColor: darkColor }}
            >
              <span className="text-5xl font-bold" style={{ color: darkColor }}>
                300+
              </span>
              <span className="text-3xl text-gray-700 font-medium">
                Members
              </span>
            </div>

            {/* --- COMPONENT 2: Bubble Version (Hidden on Mobile, Visible Absolute on XL) --- */}
            <motion.div
              variants={scaleIn}
              transition={{ delay: 0.3 }}
              className="hidden xl:flex absolute -right-16 bottom-1/2 transform translate-y-1/2 z-10"
            >
              <div
                className="relative w-40 h-40 rounded-full flex flex-col items-center justify-center shadow-lg"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
