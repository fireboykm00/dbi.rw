"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[100px] opacity-[0.03] -translate-x-1/2 -translate-y-1/2 bg-brand-primary" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-[0.03] translate-x-1/2 translate-y-1/2 bg-brand-primary" />

      <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
        {/* Company Logo */}
        <div className="mb-8 relative w-48 h-16 md:w-56 md:h-20 transition-opacity">
          <Image
            src="/logo.webp"
            alt="DBI Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 404 text with light mode friendly gradient */}
        <h1
          className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-gray-900 to-gray-100 select-none opacity-[0.08]"
          style={{
            WebkitTextStroke: "1px rgba(0,0,0,0.05)",
          }}
        >
          404
        </h1>

        <div className="space-y-6 -mt-10 relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Page Not Found
          </h2>

          <p className="text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved to
            a new digital address.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-lg font-bold bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all border border-gray-100 flex items-center gap-2 w-full sm:w-auto justify-center group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>

            <Link
              href="/"
              className="px-8 py-3 rounded-lg font-bold text-white shadow-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center hover:-translate-y-1 bg-brand-primary"
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
