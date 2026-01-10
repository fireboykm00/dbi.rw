"use client";

// Base Skeleton with Shimmer effect
export const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`shimmer-bg animate-shimmer rounded-lg ${className}`} />
);

export const PlatformCardSkeleton = () => (
  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full transform transition-all duration-500">
    <Skeleton className="w-full h-[220px] rounded-2xl mb-8" />
    <div className="space-y-5 px-1">
      <Skeleton className="w-24 h-4 rounded-full" />
      <Skeleton className="w-11/12 h-9 rounded-xl" />
      <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-40 h-4 rounded-full" />
        </div>
        <Skeleton className="w-8 h-8 rounded-full" />
      </div>
    </div>
  </div>
);

export const RegistryGridSkeleton = () => (
  <div className="relative py-24 px-4 md:px-8 bg-gray-50/50 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-6">
        <Skeleton className="w-72 h-14 mx-auto rounded-2xl" />
        <div className="flex flex-wrap justify-center gap-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-28 h-11 rounded-xl" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <PlatformCardSkeleton key={i} />
        ))}
      </div>
    </div>
  </div>
);

export const SearchSectionSkeleton = () => (
  <div className="py-24 px-6 bg-white border-b border-gray-50">
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <Skeleton className="w-80 h-16 mx-auto rounded-2xl" />
        <Skeleton className="w-full max-w-xl h-6 mx-auto rounded-full" />
      </div>
      <div className="max-w-2xl mx-auto p-3 bg-white border border-gray-100 rounded-2xl shadow-2xl shadow-blue-900/5 flex gap-3">
        <Skeleton className="flex-1 h-14 rounded-xl" />
        <Skeleton className="w-36 h-14 rounded-xl" />
      </div>
    </div>
  </div>
);

export const DirectoryHeroSkeleton = () => (
  <div className="p-3">
    <div className="relative w-full rounded-[32px] min-h-[85vh] bg-gray-900/95 overflow-hidden flex items-center justify-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-10">
        <div className="space-y-6">
          <Skeleton className="w-4/5 h-20 mx-auto rounded-3xl opacity-20" />
          <Skeleton className="w-1/2 h-10 mx-auto rounded-2xl opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto p-3 bg-white/5 rounded-2xl border border-white/10 flex gap-3 backdrop-blur-sm">
          <Skeleton className="flex-1 h-16 rounded-xl opacity-20" />
          <Skeleton className="w-44 h-16 rounded-xl opacity-20" />
        </div>
      </div>
    </div>
  </div>
);
