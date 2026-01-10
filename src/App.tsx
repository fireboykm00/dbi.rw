import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AcademyPage from "./pages/AcademyPage";
import CertificationPage from "./pages/CertificationPage";
import DirectoryPage from "./pages/DirectoryPage";
import ResourcesPage from "./pages/DPNPage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/certification" element={<CertificationPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route
            path="/digital-professionals-network"
            element={<ResourcesPage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
