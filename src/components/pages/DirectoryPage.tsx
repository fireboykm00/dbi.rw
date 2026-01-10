import PartnersSection from "../../features/home/PartnersSection";
import ReadyToGetVerified from "../../features/shared/ReadToGetVerified";
import DirectoryHero from "../../features/directory/DirectoryHero";
import DirectoryList from "../../features/directory/DirectoryList";
import DirectoryFAQ from "../../features/directory/DirectoryFAQ";

const DirectoryPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <DirectoryHero />

      {/* Certified Platforms Section */}
      <DirectoryList />

      {/* FAQ Section */}
      <DirectoryFAQ />

      <ReadyToGetVerified />
      <PartnersSection />
    </div>
  );
};

export default DirectoryPage;
