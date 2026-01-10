"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { primaryColor } from "../../lib/site";
import Image from "next/image";
import { experts } from "../../data/experts";

const DNPExperts = () => {
  return (
    <section className="py-20 px-4 md:py-32 md:px-6 lg:px-12 2xl:py-40 2xl:px-16 bg-white relative overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/shapes/shapes.svg"
          alt=""
          className="w-full h-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 2xl:mb-28 gap-8">
          <div className="max-w-2xl 2xl:max-w-3xl">
            <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight mb-6">
              Connect with <br className="hidden md:block" />
              Global Experts
            </h2>
          </div>
          <p className="text-gray-500 text-lg md:text-xl 2xl:text-2xl max-w-md 2xl:max-w-lg lg:text-right leading-relaxed font-light">
            Through our Digital Professional Networks, we link member companies
            to global expertise, bridging skill gaps and driving innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10">
          {experts.map((expert, index) => (
            <div
              key={index}
              className="group bg-white p-6 md:p-8 2xl:p-10 rounded-[24px] 2xl:rounded-[32px] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-blue-100 transition-all ease-in-out duration-200 flex flex-col h-full hover:-translate-y-2"
            >
              {/* Logo Area */}
              <div className="h-20 2xl:h-24 mb-8 2xl:mb-10 flex items-center justify-center">
                <Image
                  src={expert.logo}
                  alt={`${expert.title} logo`}
                  className="max-h-full max-w-full object-contain"
                  width={240}
                  height={120}
                />
              </div>

              {/* Text Area */}
              <div className="flex flex-col flex-1">
                <h3
                  className="text-xl 2xl:text-2xl font-bold mb-4 leading-snug transition-colors duration-200 group-hover:text-blue-700"
                  style={{ color: primaryColor }}
                >
                  {expert.title}
                </h3>

                <div className="w-full h-px bg-gray-100 mb-4 2xl:mb-6 group-hover:bg-blue-100 transition-colors ease-in-out duration-200" />

                <p className="text-gray-500 text-base 2xl:text-lg leading-relaxed font-light mb-6 2xl:mb-8 flex-1">
                  {expert.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs 2xl:text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-500 transition-colors">
                    View Network
                  </span>
                  <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 transition-all ease-in-out duration-200">
                    <ArrowRightIcon className="w-4 h-4 2xl:w-5 2xl:h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DNPExperts;
