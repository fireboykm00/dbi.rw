import { Suspense } from "react";
import SearchSection from "@/features/home/SearchSection";
import Hero from "../../features/home/Hero";
import PartnersSection from "../../features/home/PartnersSection";
import CertifiedPlatformsList from "@/features/shared/CertifiedPlatformsList";
import JoinICTChamber from "@/features/shared/JoinICTChamber";
import {
  RegistryGridSkeleton,
  SearchSectionSkeleton,
} from "@/components/ui/Skeletons";

const HomePage = () => {
  return (
    <>
      {/* Hero Section with padding for navbar */}
      <div className="relative p-2">
        <Hero />
      </div>

      <Suspense fallback={<SearchSectionSkeleton />}>
        <SearchSection />
      </Suspense>

      <Suspense fallback={<RegistryGridSkeleton />}>
        <CertifiedPlatformsList />
      </Suspense>

      <JoinICTChamber />
      {/* Partners Section */}
      <PartnersSection />
    </>
  );
};

export default HomePage;
