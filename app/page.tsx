import Features from "@/components/Features";
import FeaturesSecondary from "@/components/FeatureSecondary";

import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
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
      </div>
    </>
  );
};

export default Home;
