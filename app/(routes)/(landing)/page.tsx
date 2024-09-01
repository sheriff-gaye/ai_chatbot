import Cards from "./components/cards";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

const LandingPage = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero/>
      <Cards/>
    </div>
  );
};

export default LandingPage;
