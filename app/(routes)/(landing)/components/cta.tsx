"use client";

import { Button } from "@/components/ui/button";

const CTA = () => {



  const onClick = () => {

    //whats-happend if you on click the learn more button
    //code-here
   
  };
  return (
    <div className="flex flex-col items-center gap-6 text-center bg-gradient-to-r from-blue-300 to-blue-700 p-8 rounded-lg shadow-lg mb-[4rem] mt-[4rem]">
      <div>
        <h2 className="text-4xl font-bold text-white mt-4">
          Unlock Your Potential
        </h2>
        <h3 className="text-2xl text-white mb-4">
          Join AIGenius and ask  Smarter
        </h3>
      </div>
      <p className="max-w-2xl text-lg text-white">
        Elevate your skills with our AI-powered Learning Management System.
        Whether you are starting out or looking to advance, our platform offers
        tailored content to help you succeed.
      </p>

      <div>
        <Button variant="secondary" size="lg" onClick={onClick}>
          Learn More About Us
        </Button>
      </div>
    </div>
  );
};

export default CTA;
