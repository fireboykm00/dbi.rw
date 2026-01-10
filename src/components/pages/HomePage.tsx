import Hero from "../../features/home/Hero";
import SealSection from "../../features/home/SealSection";
import StandardsSection from "../../features/home/StandardsSection";
import PolicySection from "../../features/home/PolicySection";
import SearchSection from "../../features/home/SearchSection";
import PartnersSection from "../../features/home/PartnersSection";

const HomePage = () => {
  return (
    <>
      {/* Hero Section with padding for navbar */}
      <div className="relative p-2">
        <Hero />
      </div>

      {/* Seal Section */}
      <SealSection />

      {/* Standards Section */}
      <div className="px-4 md:px-20 lg:px-10 xl:px-20">
        <StandardsSection />
      </div>

      {/* Policy Section */}
      <PolicySection />

      {/* Search Section */}
      <SearchSection />

      {/* Partners Section */}
      <PartnersSection />
    </>
  );
};

export default HomePage;
