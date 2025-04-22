
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import FooterSection from "../components/FooterSection";
import ScreenshotsSection from "../components/ScreenshotsSection";

const Index = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-100 via-purple-100 to-white min-h-screen font-poppins">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;

