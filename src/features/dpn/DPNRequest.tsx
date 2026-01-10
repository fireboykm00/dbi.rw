import { ArrowRight } from "lucide-react";
import { LightBulbIcon } from "@heroicons/react/24/outline";
import { primaryColor, primaryColorDark } from "../../lib/site";

const DPNRequest = () => {
  return (
    <div className="p-2 my-12 md:my-20">
      <section className="relative py-16 px-6 md:py-24 md:px-12 overflow-hidden rounded-4xl min-h-[500px] bg-black flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/all/40b5e3e526019a7a4b1eebd93c44328bd668691a.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/60 " />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Can't find what you're looking for?
              </h2>
              <p className="text-xl mb-10 text-white/80 leading-relaxed">
                We are constantly expanding our library. If there's a specific
                guide, template, or tool you need, let us know and we'll
                prioritize it.
              </p>
              <button
                className={`inline-flex bg-[${primaryColor}] hover:bg-[${primaryColorDark}] text-white gap-3 items-center font-bold px-10 py-5 rounded-lg transition-all duration-300 shadow-2xl transform hover:-translate-y-1`}
              >
                Request a Resource
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="bg-white/10 backdrop-blur-xl p-12 rounded-4xl border border-white/20 shadow-2xl max-w-sm text-center transition-all duration-200 hover:scale-105 hover:bg-white/20">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-xl transition-transform duration-200 hover:rotate-12">
                  <LightBulbIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Your Idea Matters
                </h3>
                <p className="text-white/70">
                  Help us build the most comprehensive digital toolkit for
                  Rwanda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DPNRequest;
