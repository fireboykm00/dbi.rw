"use client";

const Loader = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-2 border-gray-100 rounded-full" />
        <div className="absolute inset-0 border-2 border-t-blue-600 rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Loader;
