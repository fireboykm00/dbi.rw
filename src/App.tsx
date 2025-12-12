import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SealSection from "./components/SealSection";
import StandardsSection from "./components/StandardsSection";
import PolicySection from "./components/PolicySection";
import SearchSection from "./components/SearchSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar positioned absolutely over Hero */}
      <div className="relative p-2">
        <header className="absolute top-2 left-0 right-0 z-50">
          <Navbar />
        </header>

        {/* Hero Section */}
        <Hero />
      </div>

      {/* Seal Section */}
      <SealSection />

      {/* Standards Section */}
      <div className="px-20">
        <StandardsSection />
      </div>

      {/* Policy Section */}
      <PolicySection />

      {/* Search Section */}
      <SearchSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Footer */}
      <div className="relative p-2">
        <Footer />
      </div>
    </div>
  );
}

export default App;
