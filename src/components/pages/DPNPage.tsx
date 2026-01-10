import PartnersSection from "../../features/home/PartnersSection";
import DPNHero from "../../features/dpn/DPNHero";
import DPNIntro from "../../features/dpn/DPNIntro";
import DPNResources from "../../features/dpn/DPNResources";
import DPNExperts from "../../features/dpn/DNPExperts";

const DPNPage = () => {
  return (
    <>
      {/* Hero Section */}
      <DPNHero />

      {/* Introduction Section */}
      <DPNIntro />

      {/* Connect with Global Experts */}
      <DPNExperts />

      {/* Why These Resources Matter Section */}
      <DPNResources />

      <PartnersSection />
    </>
  );
};

export default DPNPage;
