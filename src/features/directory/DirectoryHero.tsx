import { MagnifyingGlassIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { primaryColor, primaryColorDark } from "../../lib/site";

const DirectoryHero = () => {
  return (
    <div className="p-2">
      <section className="relative w-full overflow-hidden rounded-[20px] min-h-[80vh] flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage:
                "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/60" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center flex flex-col items-center pt-20">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Official Registry of Certified Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-12 leading-relaxed">
              Browse the list of organizations that have met the DBI standards
              for quality, compliance, and trust.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-3xl bg-white rounded-lg p-2 flex items-center shadow-xl ring-4 md:ring-10 ring-white/10 transition-all duration-300 hover:ring-white/20">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search Company Name..."
                className={`flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none bg-transparent text-lg w-full`}
              />
              <button
                className={`bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white px-8 py-4 rounded-md flex items-center gap-2 transition-all duration-300 font-medium shrink-0 shadow-md hover:shadow-lg`}
              >
                Search
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectoryHero;
