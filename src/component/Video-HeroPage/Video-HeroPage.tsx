"use client";

import React from "react";

const HeroPage: React.FC = () => {
  return (
    <div className="pt-[8rem] p-4 md:p-8 w-full h-full">
      <div className="relative h-screen ">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full xl:pt-[6rem] object-cover"
        >
          <source src="/images/f2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-base md:text-lg mb-4">
              Discover our comprehensive range of services designed to meet all
              your marine and shipping needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
