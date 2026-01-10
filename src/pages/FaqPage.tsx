import PartnersSection from "../features/home/PartnersSection";
import FAQHero from "../features/faq/FAQHero";
import FAQList from "../features/faq/FAQList";

const FaqPage = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <FAQHero />

      {/* FAQ List Section */}
      <FAQList />

      {/* Partners Section */}
      <PartnersSection />
    </div>
  );
};

export default FaqPage;
