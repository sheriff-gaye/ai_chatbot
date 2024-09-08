import Cards from "./components/cards";
import CTA from "./components/cta";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
      <Cards />
      <CTA />
    </div>
  );
};

export default LandingPage;
