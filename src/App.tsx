import HeroSection from "@/pages/HeroSection";
import ServicesSection from "./pages/ServicesSection";
import FeaturedCarsSection from "./pages/FeaturedCarsSection";
import Navbar from "./components/layout/Navbar/Navbar";
import AboutSection from "./pages/AboutSection";
import GlobalBackground from "./components/layout/GlobalBackground/GlobalBackground";


export default function App() {
  return (
    <>
      <GlobalBackground />

      <Navbar />

      <main className="pt-20 relative">
        <div className="space-y-32">
          <HeroSection />
          <ServicesSection />
          <FeaturedCarsSection />
          <AboutSection />
        </div>
      </main>
    </>
  );
}