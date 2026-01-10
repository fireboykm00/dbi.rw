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
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="bg-gray-50 rounded-xl flex items-center justify-center p-8 mb-6 group-hover:bg-blue-50/30 transition-colors duration-300 h-[200px]">
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  className="w-auto h-auto max-w-full max-h-full object-contain"
                  width={160}
                  height={160}
                />
              </div>

              <div className="mt-auto">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex flex-col gap-2">
                    <span className="inline-flex text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded font-medium uppercase tracking-wider w-fit">
                      {platform.sector}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {platform.name}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowRightIcon className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
                  <CheckBadgeIcon className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-gray-500">
                    Officially Verified
                  </span>
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
