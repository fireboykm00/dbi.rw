import { Suspense } from "react";
import SearchSection from "@/features/home/SearchSection";
import Hero from "../../features/home/Hero";
import PartnersSection from "../../features/home/PartnersSection";
import CertifiedPlatformsList from "@/features/shared/CertifiedPlatformsList";
import JoinICTChamber from "@/features/shared/JoinICTChamber";
import Loader from "@/components/ui/Loader";

const HomePage = () => {
  return (
    <>
      {/* Hero Section with padding for navbar */}
      <div className="relative p-2">
        <Hero />
      </div>

      <Suspense
        fallback={
          <div className="py-24 bg-white flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <SearchSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="py-24 bg-gray-50 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <CertifiedPlatformsList />
      </Suspense>

      <JoinICTChamber />
      {/* Partners Section */}
      <PartnersSection />
    </>
  );
};

export default HomePage;
