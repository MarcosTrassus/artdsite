
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import FooterSection from "../components/FooterSection";
import ScreenshotsSection from "../components/ScreenshotsSection";
import SystemModulesSection from "../components/SystemModulesSection";
import PricingTable from "../components/PricingTable";
import Header from "../components/Header";

const Index = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-100 via-purple-100 to-white min-h-screen font-poppins">
      <Header />
      <div id="home" className="pt-20">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="modules">
        <SystemModulesSection />
      </div>
      <div id="pricing">
        <PricingTable />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
