import Features from "@/components/Features";
import FeaturesSecondary from "@/components/FeatureSecondary";
import FeaturesTertiary from "@/components/FeatureTertiary";

import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Outcomes from "@/components/Outcomes";
import Speed from "@/components/Speed";

const Home = () => {
  return (
    <>
      <div className="min-h-screen font-display">
        <Hero />
        <LogoCloud />
        <Features />
        <Speed />
        <FeaturesSecondary />
        <Outcomes />
        <FeaturesTertiary />
      </div>
    </>
  );
};

export default Home;
