"use client";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import { primaryColor } from "../../lib/site";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { certifiedPlatforms } from "../../data/platforms";

const CertifiedPlatformsList = () => {
  const [activeTab, setActiveTab] = useState("All Sectors");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const listRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [internalSearch, setInternalSearch] = useState("");

  // Consume URL search param and clear it
  useEffect(() => {
    const query = searchParams.get("search");
    if (query) {
      // Use setTimeout to avoid synchronous cascading renders
      setTimeout(() => {
        setInternalSearch(query);

        // Clear URL param immediately after consuming
        const params = new URLSearchParams(window.location.search);
        params.delete("search");
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });

        // Scroll to list
        if (listRef.current) {
          listRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [searchParams, pathname, router]);

  // Filtering Logic
  const filteredPlatforms = certifiedPlatforms.filter((p) => {
    const matchesSector = activeTab === "All Sectors" || p.sector === activeTab;
    const matchesSearch = internalSearch
      ? p.name.toLowerCase().includes(internalSearch.toLowerCase())
      : true;
    return matchesSector && matchesSearch;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredPlatforms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredPlatforms.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const scrollToTop = () => {
    if (listRef.current) {
      const element = listRef.current;
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - 100;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      scrollToTop();
    }
  };

  const handleTabChange = (sector: string) => {
    setActiveTab(sector);
    setCurrentPage(1); // Reset to page 1 on tab change
    scrollToTop();
  };

  return (
    <section
      ref={listRef}
      className="relative py-12 px-4 md:py-24 md:px-6 lg:px-12 2xl:py-32 2xl:px-16 bg-gray-50 overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/shapes/shapes.svg"
          alt=""
          className="w-full h-full object-cover opacity-10"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1600px] mx-auto">
        {/* Title Section */}
        <div className="mb-10 md:mb-16 2xl:mb-20">
          <div className="text-center mb-8">
            {internalSearch ? (
              <div className="space-y-3">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">
                  Search Results
                </p>
                <h2 className="text-2xl md:text-3xl text-gray-900 tracking-tight font-semibold">
                  &quot;<span className="text-blue-600">{internalSearch}</span>
                  &quot;
                </h2>
                <button
                  onClick={() => {
                    setInternalSearch("");
                    window.dispatchEvent(new CustomEvent("dbi-search-clear"));
                  }}
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  ← Clear search
                </button>
              </div>
            ) : (
              <h2 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-gray-900 tracking-tight">
                Certified Platforms
              </h2>
            )}
          </div>

          {/* Tabs - Horizontal Scroll on Mobile */}
          <div className="relative">
            {/* Gradient fade edges for mobile scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none md:hidden" />

            <div className="flex gap-2 md:gap-3 2xl:gap-4 overflow-x-auto pb-2 md:pb-0 md:flex-wrap md:justify-center scrollbar-hide px-1">
              {[
                "All Sectors",
                "Fintech",
                "E-Commerce",
                "EdTech",
                "Startups",
                "Software",
              ].map((sector) => (
                <button
                  key={sector}
                  onClick={() => handleTabChange(sector)}
                  className={`px-4 py-2 md:px-6 md:py-2.5 2xl:px-8 2xl:py-3 rounded-md text-sm 2xl:text-base font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                    activeTab === sector
                      ? `bg-[${primaryColor}] text-white shadow-lg shadow-blue-900/10`
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {currentItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-400">
              No platforms found in this sector yet.
            </p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 2xl:gap-8 mb-16 2xl:mb-20">
          {currentItems.map((platform, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-2 border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(3,57,108,0.1)] transition-all duration-500 flex flex-col h-full"
            >
              {/* Logo Area with subtle background pattern */}
              <div className="relative aspect-square md:aspect-auto md:h-[220px] bg-gray-50/50 rounded-2xl flex items-center justify-center p-10 overflow-hidden group-hover:bg-[#03396C]/5 transition-colors duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-16 translate-x-16" />
                </div>

                <Image
                  src={platform.logo}
                  alt={platform.name}
                  className="w-auto h-auto max-w-full max-h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                  width={160}
                  height={160}
                />
              </div>

              {/* Content Area */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#03396C]/5 text-[#03396C] uppercase tracking-wider mb-2">
                      {platform.sector}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#03396C] transition-colors leading-tight">
                      {platform.name}
                    </h3>
                  </div>

                  <div className="mt-1 w-10 h-10 rounded-full bg-[#03396C] text-white flex items-center justify-center scale-90 opacity-0 -translate-y-2 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg shadow-[#03396C]/20">
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <CheckBadgeIcon className="w-5 h-5 text-emerald-500 relative z-10" />
                      <div className="absolute inset-0 bg-emerald-400/30 rounded-full blur-md scale-150 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-emerald-600 transition-colors">
                      Officially Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all ${
                currentPage === 1
                  ? "border-gray-100 text-gray-300 cursor-not-allowed"
                  : "border-gray-200 text-gray-600 hover:bg-white hover:shadow-md hover:border-gray-300"
              }`}
              disabled={currentPage === 1}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-all ${
                  currentPage === i + 1
                    ? `bg-[${primaryColor}] text-white shadow-lg shadow-blue-900/20 scale-105`
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-transparent"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all ${
                currentPage === totalPages
                  ? "border-gray-100 text-gray-300 cursor-not-allowed"
                  : "border-gray-200 text-gray-600 hover:bg-white hover:shadow-md hover:border-gray-300"
              }`}
              disabled={currentPage === totalPages}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertifiedPlatformsList;
