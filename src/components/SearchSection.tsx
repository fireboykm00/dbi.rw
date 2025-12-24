import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "lucide-react";
import { primaryColor, primaryColorDark } from "../lib/site";

const SearchSection = () => {
  return (
    <section className="relative w-full py-12 px-4 md:py-20 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Dark Card with Background Image */}
        <div
          className="relative rounded-2xl overflow-hidden bg-black"
          style={{ minHeight: "400px" }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-1000 hover:scale-110"
            style={{
              backgroundImage:
                "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] md:min-h-[550px] px-4 py-8 md:px-6 md:py-12 lg:px-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center mb-4">
              Is that website safe?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-lg text-sm md:text-base">
              Verify if a digital platform is certified by DBI before you
              transact.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-3xl bg-white rounded-lg p-2 flex items-center shadow-xl ring-4 md:ring-10 ring-white/10 transition-all duration-300 hover:ring-white/20">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search Company Name..."
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none bg-transparent text-lg w-full"
              />
              <button
                className={`bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white cursor-pointer px-8 py-4 rounded-md flex items-center gap-2 transition-all duration-300 font-medium shrink-0 shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
              >
                Search
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
