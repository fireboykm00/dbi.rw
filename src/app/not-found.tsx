"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";
import { primaryColor } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[100px] opacity-20 -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: primaryColor }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-20 translate-x-1/2 translate-y-1/2"
        style={{ backgroundColor: primaryColor }}
      />

      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        {/* Company Logo */}
        <div className="mb-8 relative w-48 h-16 md:w-56 md:h-20 opacity-80 hover:opacity-100 transition-opacity">
          <Image
            src="/logo.png"
            alt="DBI Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* glitched 404 effect text could go here, but keeping it clean for now */}
        <h1
          className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.1)",
          }}
        >
          404
        </h1>

        <div className="space-y-6 -mt-10 relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Page Not Found
          </h2>

          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved to
            a new digital address.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-lg font-bold bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>

            <Link
              href="/"
              className="px-8 py-3 rounded-lg font-bold text-white shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:-translate-y-1"
              style={{ backgroundColor: primaryColor }}
            >
              <Home className="w-5 h-5" />
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
