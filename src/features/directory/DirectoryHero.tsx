"use client";
import { MagnifyingGlassIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const DirectoryHero = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search")?.toString() || ""
  );

  useEffect(() => {
    const handleClear = () => setSearchTerm("");
    window.addEventListener("dbi-search-clear", handleClear);
    return () => window.removeEventListener("dbi-search-clear", handleClear);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm.trim()) {
      params.set("search", searchTerm.trim());
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-2">
      <section className="relative w-full overflow-hidden rounded-[20px] min-h-[80vh] flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
            style={{
              backgroundImage: "url('/all/search-bg.webp')",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/60" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 2xl:px-8 text-center flex flex-col items-center pt-20 2xl:pt-28">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-white mb-6 2xl:mb-8 leading-tight">
              Official Registry of Certified Businesses
            </h1>
            <p className="text-lg md:text-xl 2xl:text-2xl text-gray-200 mb-12 2xl:mb-16 leading-relaxed max-w-4xl">
              Browse the list of organizations that have met the DBI standards
              for quality, compliance, and trust.
            </p>

            {/* Search Bar */}
            <div className="w-full max-w-3xl 2xl:max-w-4xl bg-white rounded-lg p-2 2xl:p-3 flex items-center shadow-xl ring-4 md:ring-10 ring-white/10 transition-all duration-300 hover:ring-white/20">
              <MagnifyingGlassIcon className="h-6 w-6 2xl:h-7 2xl:w-7 text-gray-400 ml-2 md:ml-4 shrink-0" />
              <input
                type="text"
                placeholder="Search Company Name..."
                className="flex-1 px-3 md:px-4 py-3 2xl:py-4 text-gray-900 placeholder-gray-500 outline-none bg-transparent text-base md:text-lg 2xl:text-xl w-full min-w-0"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button
                onClick={handleSearch}
                className="bg-brand-primary hover:bg-brand-primary-dark text-white p-3 md:px-8 md:py-4 2xl:px-10 2xl:py-5 2xl:text-lg rounded-md flex items-center justify-center gap-2 transition-all duration-300 font-medium shrink-0 shadow-md hover:shadow-lg"
              >
                <span className="hidden md:inline">Search</span>
                <ArrowRightIcon className="h-5 w-5 2xl:h-6 2xl:w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectoryHero;
