"use client";

import {
  ArrowRightIcon,
  XMarkIcon,
  GlobeAltIcon,
  PhoneIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { experts, Expert } from "../../data/experts";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const DPNExperts = () => {
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start mb-20 2xl:mb-28 gap-8">
          <div className="max-w-2xl 2xl:max-w-3xl">
            <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold tracking-tight mb-6 text-gray-900">
              Connect with <br className="hidden md:block" />
              Global Experts
            </h2>
          </div>
          <p className="text-gray-500 text-lg md:text-xl 2xl:text-2xl max-w-md 2xl:max-w-lg lg:text-right leading-relaxed font-light">
            Through our Digital Professional Networks, we link member companies
            to global expertise, bridging skill gaps and driving innovation.
          </p>
        </div>

        <Dialog.Root>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10">
            {experts.map((expert, index) => (
              <Dialog.Trigger asChild key={index}>
                <button
                  onClick={() => setSelectedExpert(expert)}
                  className="group bg-white p-6 md:p-8 2xl:p-10 rounded-[24px] 2xl:rounded-[32px] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-blue-100 transition-all ease-in-out duration-300 flex flex-col h-full hover:-translate-y-2 text-left"
                >
                  {/* Logo Area */}
                  <div className="h-20 2xl:h-24 mb-8 2xl:mb-10 flex items-center justify-center w-full">
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
                    <h3 className="text-xl 2xl:text-2xl font-bold mb-4 leading-snug transition-colors duration-200 group-hover:text-blue-700 h-14 line-clamp-2 text-brand-primary">
                      {expert.title}
                    </h3>

                    <div className="w-full h-px bg-gray-100 mb-4 2xl:mb-6 group-hover:bg-blue-100 transition-colors ease-in-out duration-200" />

                    <p className="text-gray-500 text-base 2xl:text-lg leading-relaxed font-light mb-6 2xl:mb-8 flex-1 line-clamp-3">
                      {expert.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-xs 2xl:text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-blue-500 transition-colors">
                        View Network
                      </span>
                      <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 transition-all ease-in-out duration-200">
                        <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </div>
                    </div>
                  </div>
                </button>
              </Dialog.Trigger>
            ))}
          </div>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-50 animate-fade-in overflow-y-auto" />
            <Dialog.Content className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-white shadow-2xl z-50 flex flex-col animate-slide-in overflow-y-auto">
              {selectedExpert && (
                <>
                  <div className="p-8 md:p-12 flex flex-col gap-8">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="h-20 flex items-center">
                        <Image
                          src={selectedExpert.logo}
                          alt={selectedExpert.title}
                          className="max-h-full w-auto object-contain"
                          width={200}
                          height={100}
                        />
                      </div>
                      <Dialog.Close asChild>
                        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
                          <XMarkIcon className="w-6 h-6 text-gray-400 group-hover:text-gray-900" />
                        </button>
                      </Dialog.Close>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-6">
                      <Dialog.Title className="text-3xl md:text-4xl font-bold leading-tight text-brand-primary">
                        {selectedExpert.title}
                      </Dialog.Title>
                      <p className="text-gray-600 text-lg leading-relaxed font-light">
                        {selectedExpert.fullDescription}
                      </p>
                    </div>

                    {/* Key Services Section */}
                    <div className="space-y-6 bg-gray-50 rounded-3xl p-8 border border-gray-100">
                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                        Key Activities & Services
                      </h4>
                      <ul className="space-y-4">
                        {selectedExpert.services.map((service, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <CheckCircleIcon className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                            <span className="text-gray-700 leading-relaxed">
                              {service}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact & Link Section */}
                    <div className="space-y-6 pt-4">
                      {selectedExpert.contact && (
                        <div className="flex items-center gap-4 text-gray-600">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <PhoneIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                              Contact Personnel
                            </p>
                            <p className="font-medium text-gray-900">
                              {selectedExpert.contact}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <a
                          href={selectedExpert.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary-dark text-white font-bold px-8 py-5 rounded-xl transition-all duration-300 shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20"
                        >
                          <GlobeAltIcon className="w-5 h-5" />
                          Visit Official Website
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
};

export default DPNExperts;
