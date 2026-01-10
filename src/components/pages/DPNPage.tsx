import PartnersSection from "../../features/home/PartnersSection";
import DPNHero from "../../features/dpn/DPNHero";
import DPNResources from "../../features/dpn/DPNResources";
import DPNExperts from "../../features/dpn/DNPExperts";
// import DPNNewsletter from "../../features/dpn/DPNNewsletter";

const DPNPage = () => {
  return (
    <>
      {/* Hero Section */}
      <DPNHero />

      {/* Why These Resources Matter Section - Reimagined */}
      <DPNResources />

      {/* Toolkit Header & Content Grid */}
      <DPNExperts />

      {/* Newsletter */}
      {/* <DPNNewsletter /> */}

      <PartnersSection />
    </>
  );
};

export default DPNPage;
