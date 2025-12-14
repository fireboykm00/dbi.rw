import Hero from "../components/Hero";
import SealSection from "../components/SealSection";
import StandardsSection from "../components/StandardsSection";
import PolicySection from "../components/PolicySection";
import SearchSection from "../components/SearchSection";
import PartnersSection from "../components/PartnersSection";

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
      <div className="px-4 md:px-20">
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
