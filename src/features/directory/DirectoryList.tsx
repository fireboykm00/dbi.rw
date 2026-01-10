import { useState } from "react";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { primaryColor } from "../../lib/site";

const DirectoryList = () => {
  const [activeTab, setActiveTab] = useState("All Sectors");

  const certifiedPlatforms = [
    { name: "Murukali Market Smart", logo: "/certified/murukali.png" },
    { name: "Vuba Vuba", logo: "/certified/vuba-vuba.png" },
    { name: "Izetech", logo: "/certified/izetechlogo.png" },
    { name: "Zalenda Shop", logo: "/certified/zalenda.png" },
    { name: "eHaho", logo: "/certified/ehaho-logo.png" },
    { name: "Tuma", logo: "/certified/tuma.webp" },
    { name: "Hotpoint Rwanda", logo: "/certified/Hotpoint-Rwanda.webp" },
    { name: "Romac", logo: "/certified/romac.png" },
    { name: "Roots Rwanda", logo: "/certified/roots-rwanda.png" },
  ];

  return (
    <section className="relative py-12 px-4 md:py-24 md:px-6 lg:px-12 bg-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/shapes/shapes.svg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
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
              onClick={() => setActiveTab(sector)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === sector
                  ? `bg-white text-[${primaryColor}] shadow-md scale-105`
                  : "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifiedPlatforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gray-200 transition-all duration-300 group flex flex-col hover:-translate-y-1"
            >
              <div className="h-32 flex items-center justify-center mb-8 transition-all duration-200">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="mt-auto">
                <span className="inline-block bg-[#548235] text-white text-xs font-medium px-3 py-1 rounded-sm mb-4">
                  Verified
                </span>

                <div className="flex items-end justify-between">
                  <h3 className={`text-xl font-bold text-[${primaryColor}]`}>
                    {platform.name}
                  </h3>
                  <ArrowRightIcon
                    className={`w-6 h-6 text-gray-400 group-hover:text-[${primaryColor}] transition-all duration-300 group-hover:translate-x-1`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center bg-white text-[${primaryColor}] rounded-md text-sm font-medium shadow-sm border border-gray-100`}
          >
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors">
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DirectoryList;
