
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import FooterSection from "../components/FooterSection";

const Index = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-100 via-purple-100 to-white min-h-screen font-poppins">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
