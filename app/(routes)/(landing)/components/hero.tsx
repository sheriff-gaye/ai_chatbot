import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="py-36 grid grid-col grid-cols-2 gap-[2rem]">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Customer Support <br /> Based on the <br />
          <span className="text-blue-500 font-bold">AI Technology </span>
        </h1>

        <p className="pt-5 text-xl">
          Powerful Customer Support Capabilities that can understand and respond
          to customers
        </p>
        <div className="flex flex-1 gap-4 pt-5">
          <Button size="lg">Get Started for Free</Button>
          <Button size="lg" variant="outline">
            Book a Demo
          </Button>
        </div>
      </div>

      <div className="relative">
        <Image src="/hero.png" fill alt="hero"  />
      </div>
    </div>
  );
};

export default Hero;
