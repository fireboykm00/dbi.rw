import PartnersSection from "../../features/home/PartnersSection";
import DPNHero from "../../features/dpn/DPNHero";
import DPNResources from "../../features/dpn/DPNResources";
import DPNToolkit from "../../features/dpn/DPNToolkit";
import DPNRequest from "../../features/dpn/DPNRequest";
import DPNNewsletter from "../../features/dpn/DPNNewsletter";

const DPNPage = () => {
  return (
    <>
      {/* Hero Section */}
      <DPNHero />

      {/* Why These Resources Matter Section - Reimagined */}
      <DPNResources />

      {/* Toolkit Header & Content Grid */}
      <DPNToolkit />

      {/* Request a Resource CTA */}
      <DPNRequest />

      {/* Newsletter */}
      <DPNNewsletter />

      <PartnersSection />
    </>
  );
};

export default DPNPage;
