import PartnersSection from "../../features/home/PartnersSection";
import CertificationHero from "../../features/certification/CertificationHero";
import CertificationInfo from "../../features/certification/CertificationInfo";
import CertificationValidation from "../../features/certification/CertificationValidation";
import CertificationSteps from "../../features/certification/CertificationSteps";

const CertificationPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CertificationHero />

      {/* Certification Info Section */}
      <CertificationInfo />

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
