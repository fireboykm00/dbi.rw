"use client";

import { primaryColor } from "../../lib/site";
import Image from "next/image";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

const seals = [
  {
    name: "Startup",
    image: "/seals/startup.png",
    color: "bg-blue-50",
    border: "border-blue-100",
    description: "Verified tech innovation",
  },
  {
    name: "Edtech",
    image: "/seals/edtech.png",
    color: "bg-indigo-50",
    border: "border-indigo-100",
    description: "Quality digital learning",
  },
  {
    name: "E-Commerce",
    image: "/seals/ecommerce.png",
    color: "bg-emerald-50",
    border: "border-emerald-100",
    description: "Trusted digital marketplace",
  },
  {
    name: "Software",
    image: "/seals/sod.png",
    color: "bg-violet-50",
    border: "border-violet-100",
    description: "Superior software standards",
  },
  {
    name: "Fintech",
    image: "/seals/fintech.png",
    color: "bg-orange-50",
    border: "border-orange-100",
    description: "Secure financial tech",
  },
  {
    name: "Mobility",
    image: "/seals/mobility.png",
    color: "bg-sky-50",
    border: "border-sky-100",
    description: "Reliable mobility solutions",
  },
];

const TrustSeals = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Our Trust Seals
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            We provide specialized certification seals tailored to specific
            digital sectors, ensuring your business meets the highest industry
            standards.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {seals.map((seal, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              {/* Seal Card */}
              <div
                className={`relative aspect-square w-full rounded-[2.5rem] ${seal.color} ${seal.border} border p-8 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 flex items-center justify-center overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.02)]`}
              >
                <div className="absolute inset-0 bg-linear-to-b from-white/20 to-transparent pointer-events-none" />

                <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
                  <Image
                    src={seal.image}
                    alt={`${seal.name} Trust Seal`}
                    width={2000}
                    height={2000}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Text Label */}
              <div className="mt-6 text-center">
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                  {seal.name}
                </h3>
                <p className="text-gray-400 text-xs font-medium uppercase tracking-widest mt-1">
                  {seal.description}
                </p>
              </div>

              {/* Particle Effect on Hover */}
              <div className="absolute -inset-4 rounded-[3rem] border border-blue-500/0 group-hover:border-blue-500/10 group-hover:scale-105 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSeals;
