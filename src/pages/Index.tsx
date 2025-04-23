
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import FooterSection from "../components/FooterSection";
import ScreenshotsSection from "../components/ScreenshotsSection";
import SystemModulesSection from "../components/SystemModulesSection";
import PricingTable from "../components/PricingTable";

const Index = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-100 via-purple-100 to-white min-h-screen font-poppins">
      <HeroSection />
      <FeaturesSection />
      <SystemModulesSection />
      <ScreenshotsSection />
      <PricingTable />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
