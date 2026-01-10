import { Suspense } from "react";
import PartnersSection from "../../features/home/PartnersSection";
import ReadyToGetVerified from "../../features/shared/ReadToGetVerified";
import DirectoryHero from "../../features/directory/DirectoryHero";
import DirectoryFAQ from "../../features/directory/DirectoryFAQ";
import CertifiedPlatformsList from "../../features/shared/CertifiedPlatformsList";
import Loader from "@/components/ui/Loader";

const DirectoryPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Suspense
        fallback={
          <div className="min-h-[60vh] bg-black flex items-center justify-center rounded-[20px] m-2">
            <Loader />
          </div>
        }
      >
        <DirectoryHero />
      </Suspense>

      {/* Certified Platforms Section */}
      <Suspense
        fallback={
          <div className="py-32 flex items-center justify-center bg-gray-50">
            <Loader />
          </div>
        }
      >
        <CertifiedPlatformsList />
      </Suspense>

      {/* FAQ Section */}
      <DirectoryFAQ />

      <ReadyToGetVerified />
      <PartnersSection />
    </div>
  );
};

export default DirectoryPage;
