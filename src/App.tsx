import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <Navbar />
      <main className="grow">
        <Hero />
        <Stats />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
