import SearchSection from "@/features/home/SearchSection";
import Hero from "../../features/home/Hero";
import PartnersSection from "../../features/home/PartnersSection";
import CertifiedPlatformsList from "@/features/shared/CertifiedPlatformsList";
import JoinICTChamber from "@/features/shared/JoinICTChamber";

const HomePage = () => {
  return (
    <>
      {/* Hero Section with padding for navbar */}
      <div className="relative p-2">
        <Hero />
      </div>

      <SearchSection />
      <CertifiedPlatformsList />
      <JoinICTChamber />
      {/* Partners Section */}
      <PartnersSection />
    </>
  );
};

export default HomePage;
