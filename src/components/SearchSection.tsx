import { darkColor, primaryColor } from "../lib/site";

const SearchSection = () => {
  return (
    <section className="relative w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Dark Card with Background Image */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ minHeight: "550px" }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[550px] px-6 py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Is that website safe?
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-lg">
              Verify if a digital platform is certified by DBI before you
              transact.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-3xl bg-white p-2 rounded-lg flex items-center overflow-hidden ring-10 ring-white/10">
              <div className="flex items-center gap-3 flex-1 px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search Company Name..."
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
              <button
                className="flex items-center rounded-lg gap-2 font-medium px-6 py-4 transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: darkColor, color: primaryColor }}
              >
                Search
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
