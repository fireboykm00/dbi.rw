import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { scaleIn, fadeInUp, staggerContainer } from "../lib/animations";

const SearchSection = () => {
  return (
    <section className="relative w-full py-12 px-4 md:py-20 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Dark Card with Background Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="relative rounded-2xl overflow-hidden bg-black"
          style={{ minHeight: "400px" }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage:
                "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
            }}
          />

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center justify-center min-h-[400px] md:min-h-[550px] px-4 py-8 md:px-6 md:py-12 lg:px-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-4"
            >
              Is that website safe?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 text-center mb-8 max-w-lg text-sm md:text-base"
            >
              Verify if a digital platform is certified by DBI before you
              transact.
            </motion.p>

            {/* Search Bar */}

            <motion.div
              variants={scaleIn}
              className="w-full max-w-3xl bg-white rounded-lg p-2 flex items-center shadow-xl  ring-4 md:ring-10 ring-white/10"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search Company Name..."
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none bg-transparent text-lg w-full"
              />
              <button className="bg-[#455F84] hover:bg-[#3a506f] text-white cursor-pointer px-8 py-4 rounded-md flex items-center gap-2 transition-colors font-medium shrink-0 shadow-md">
                Search
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchSection;
