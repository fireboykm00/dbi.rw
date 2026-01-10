import { Suspense } from "react";
import PartnersSection from "../../features/home/PartnersSection";
import ReadyToGetVerified from "../../features/shared/ReadToGetVerified";
import DirectoryHero from "../../features/directory/DirectoryHero";
import DirectoryFAQ from "../../features/directory/DirectoryFAQ";
import CertifiedPlatformsList from "../../features/shared/CertifiedPlatformsList";
import {
  RegistryGridSkeleton,
  DirectoryHeroSkeleton,
} from "@/components/ui/Skeletons";

const DirectoryPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Suspense fallback={<DirectoryHeroSkeleton />}>
        <DirectoryHero />
      </Suspense>

      {/* Certified Platforms Section */}
      <Suspense fallback={<RegistryGridSkeleton />}>
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
