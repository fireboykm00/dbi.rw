import PartnersSection from "../../features/home/PartnersSection";
import AboutHero from "../../features/about/AboutHero";
import AboutMissionVision from "../../features/about/AboutMissionVision";
import AboutValues from "../../features/about/AboutValues";
import JoinICTChamber from "@/features/shared/JoinICTChamber";
import AboutWhatIsDBI from "@/features/about/AboutWhatIsDBI";
const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutWhatIsDBI />
      <AboutMissionVision />

      <JoinICTChamber />
      <PartnersSection />
    </>
  );
};

export default AboutPage;
