import PartnersSection from "../../features/home/PartnersSection";
import ReadyToGetVerified from "../../features/shared/ReadToGetVerified";
import DirectoryHero from "../../features/directory/DirectoryHero";
import DirectoryFAQ from "../../features/directory/DirectoryFAQ";
import CertifiedPlatformsList from "../../features/shared/CertifiedPlatformsList";

const DirectoryPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DirectoryHero />

      {/* Certified Platforms Section */}
      <CertifiedPlatformsList />

      {/* FAQ Section */}
      <DirectoryFAQ />

      <ReadyToGetVerified />
      <PartnersSection />
    </div>
  );
};

export default DirectoryPage;
