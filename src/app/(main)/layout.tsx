import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="absolute top-2 left-0 right-0 z-50">
        <Navbar />
      </header>
      <div className="min-h-screen">{children}</div>
      <div className="relative p-2">
        <Footer />
      </div>
    </div>
  );
}
