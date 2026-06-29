import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "./components/home/ServicesSection";
import FeaturedCarsSection from "./components/home/FeaturedCarsSection";
import Navbar from "./components/layout/Navbar";
import AboutSection from "./components/home/AboutSection";
import GlobalBackground from "./components/layout/GlobalBackground";


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