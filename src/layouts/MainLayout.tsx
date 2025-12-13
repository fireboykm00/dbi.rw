import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar positioned absolutely over content */}
      <header className="absolute top-2 left-0 right-0 z-50">
        <Navbar />
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <div className="relative p-2">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
