import Features from "@/components/Features";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";

const Home = () => {
  return (
    <>
      <div className="min-h-screen font-display">
        <Hero />
        <LogoCloud />
        <Features />
      </div>
    </>
  );
};

export default Home;
