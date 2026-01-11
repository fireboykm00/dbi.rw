import PartnersSection from "../../features/home/PartnersSection";
import ReadyToGetVerified from "../../features/shared/ReadToGetVerified";
import AcademyHero from "../../features/academy/AcademyHero";
import AcademyAccreditation from "../../features/academy/AcademyAccreditation";
import AcademyCertifications from "../../features/academy/AcademyCertifications";
import DPNExperts from "../../features/dpn/DPNExperts";

const AcademyPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <AcademyHero />

      <AcademyAccreditation />

      {/* Internationally Accredited Certifications Section */}
      <AcademyCertifications />

      {/* Connect with Global Experts Section */}
      <DPNExperts />

      <ReadyToGetVerified />
      <PartnersSection />
    </div>
  );
};

export default AcademyPage;
