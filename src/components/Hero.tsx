import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, fadeIn } from "../lib/animations";

const Hero = () => {
  // Profile Images for trust badge
  const profilesImages = [
    "/all/profile.jpg",
    "/all/profile1.jpg",
    "/all/profile2.jpg",
    "/all/profile3.jpg",
  ];

  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full bg-black overflow-hidden rounded-[20px]">
      {/* Background Image */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/all/hero.jpg')" }}
        />
      </motion.div>

      {/* Gradient Overlay - darker on left for text readability */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-[#455F84]/50 via-[#455F84]/30 to-transparent" /> */}

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-end min-h-[80vh] md:min-h-screen max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-24 pb-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-5xl lg:text-6xl xl:text-[4rem] font-bold text-white leading-tight mb-6"
          >
            The Standard for
            <br />
            Digital Trust in Rwanda
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            The official verification partner for startups, fintechs, and
            e-commerce platforms. We certify businesses and upskill
            professionals to accelerate the digital economy.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <Link
              to="#"
              className="inline-flex items-center gap-2 bg-[#455F84] hover:bg-[#3a506f] text-white font-medium px-6 py-4 rounded-md transition-colors duration-200 mb-12"
            >
              Get Your Trust Seal
              <ArrowRightIcon className="w-5" />
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-4 bg-gray-500/10 border-gray-500/40 border backdrop-blur-sm rounded-md px-6 py-5"
          >
            {/* Company Logos */}
            <div className="flex items-center -space-x-3">
              {profilesImages.map((logo, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-white border-2 border-white overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`Company ${index + 1}`}
                    className={`w-10 h-10 object-cover z-[${index}]`}
                  />
                </div>
              ))}
              {/* Plus indicator */}
              <div className="w-10 h-10 relative rounded-full z-10 bg-white border-2 border-transparent overflow-hidden flex items-center justify-center">
                <img
                  src={profilesImages[0]}
                  alt={`Company`}
                  className="absolute w-10 h-10 object-cover z-0 opacity-50"
                />
                <span className="text-[#455F84] text-sm font-bold z-11">+</span>
              </div>
            </div>

            {/* Trust Text */}
            <span className="text-white text-sm font-medium">
              Trusted by 50+ Verified Businesses
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
