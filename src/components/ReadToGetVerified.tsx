import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer } from "../lib/animations";

const ReadyToGetVerified = () => {
  return (
    <div className="p-2 my-6 md:my-10 lg:my-16">
      <section className="relative rounded-3xl overflow-hidden min-h-[500px] xl:min-h-[700px] flex items-center">
        {/* Background Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-x-[-1]"
          style={{
            backgroundImage:
              "url('/all/310a11fe05bb9a32ed316a5104ae8c97bd08aca4.jpg')", // Placeholder image
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to get verified?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg mb-10 leading-relaxed"
            >
              Start the assessment for all categories
              <br />
              (Fintech, Software, Edtech, Startup, and E-Commerce) in our
              unified portal.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              className="bg-[#FBD40E] text-[#212529] px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 hover:bg-[#e0bd0c] transition-all"
            >
              Start Assessment
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReadyToGetVerified;
