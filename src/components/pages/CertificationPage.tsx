import PartnersSection from "../../features/home/PartnersSection";
import CertificationHero from "../../features/certification/CertificationHero";
// import CertificationBridgingGap from "../../features/certification/CertificationBridgingGap";
import CertificationValidation from "../../features/certification/CertificationValidation";
import CertificationSteps from "../../features/certification/CertificationSteps";

const CertificationPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CertificationHero />

      {/* Bridging the Gap Section */}
      {/* <CertificationBridgingGap /> */}

      {/* Validate Your Excellence Section */}
      <CertificationValidation />

      {/* How To Get DBI Trust Seal Section */}
      <CertificationSteps />

      {/* Partners Section */}
      <PartnersSection />
      <br />
    </div>
  );
};

export default CertificationPage;
