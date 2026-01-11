"use client";

import { useEffect, useState } from "react";
import { RotateCcw, AlertTriangle, Terminal, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Spotlight Effect on the "Wall" */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Mounted Logo "On the Wall" */}
      <div className="relative z-10 mb-12 transform hover:scale-105 transition-transform duration-500">
        <div className="relative w-64 h-24 drop-shadow-sm filter">
          <Image
            src="/logo.png"
            alt="DBI Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Subtle reflection/shadow below "mounting" */}
        <div className="w-40 h-1 bg-gray-200 blur-md mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-lg w-full bg-gray-50/50 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 md:p-12 text-center relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        {/* Icon */}
        <div className="w-16 h-16 bg-red-500/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-red-500/10 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          System Error Encountered
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
          Our systems have detected an unexpected issue. The application
          integrity has been preserved, but we need you to restart the process.
        </p>

        {/* Action Button */}
        <button
          onClick={reset}
          className="w-full px-6 py-4 rounded-xl font-bold text-white shadow-lg transition-all hover:brightness-110 hover:-translate-y-1 flex items-center justify-center gap-2 mb-6 bg-brand-primary"
        >
          <RotateCcw className="w-5 h-5" />
          Reload Application
        </button>

        {/* Developer Info Toggle */}
        <div className="border-t border-gray-100 pt-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mx-auto w-full group"
          >
            <Terminal className="w-4 h-4" />
            <span className="font-mono">Technical Details</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                showDetails ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              showDetails ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-gray-100 rounded-lg p-4 text-left border border-gray-200 overflow-auto">
              <p className="text-xs text-red-500 font-mono mb-2">
                User Action Required: Check browser console
              </p>
              <code className="text-xs text-gray-600 font-mono break-all block">
                Error: {error.message || "Unknown error occurred"}
              </code>
              {error.digest && (
                <code className="text-xs text-gray-400 font-mono block mt-1">
                  Digest: {error.digest}
                </code>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="absolute bottom-8 text-center">
        <p className="text-gray-300 text-sm font-light tracking-widest uppercase">
          Digital Business Institute
        </p>
      </div>
    </div>
  );
}
