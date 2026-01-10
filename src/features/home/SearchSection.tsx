"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { primaryColor, primaryColorDark } from "../../lib/site";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const SearchSection = () => {
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
    <section className="relative w-full py-12 px-6 2xl:py-20 2xl:px-8">
      <div className="max-w-4xl 2xl:max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-6 2xl:mb-8 tracking-tight">
          Verify a Business
        </h2>
        <p className="text-gray-500 text-lg 2xl:text-xl mb-10 2xl:mb-12 max-w-2xl 2xl:max-w-3xl mx-auto">
          Ensure the digital platform you are dealing with is certified and
          safe.
        </p>

        {/* Minimal Search Bar */}
        <div className="relative group max-w-2xl 2xl:max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <div className="relative flex items-center bg-white border border-gray-200 rounded-md shadow-lg shadow-gray-100 hover:shadow-xl transition-all duration-300 p-2 2xl:p-3">
            <MagnifyingGlassIcon className="h-6 w-6 2xl:h-7 2xl:w-7 text-gray-400 ml-2 md:ml-4 shrink-0" />
            <input
              type="text"
              placeholder="Enter company name..."
              className="flex-1 px-3 md:px-4 py-3 2xl:py-4 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-base md:text-lg 2xl:text-xl min-w-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={handleSearch}
              className={`bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white p-3 md:px-8 md:py-3 2xl:px-10 2xl:py-4 2xl:text-lg rounded-md font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 shrink-0 flex items-center justify-center gap-2`}
            >
              <span className="hidden md:inline">Search</span>
              <ArrowRightIcon className="h-5 w-5 2xl:h-7 2xl:w-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
