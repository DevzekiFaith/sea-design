import React from "react";

const Company: React.FC = () => {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-4xl text-blue-500 font-bold text-center mb-8 transform transition-transform duration-500 hover:translate-y-1">
        Company Overview
      </h1>
      <div className="bg-black  p-8 rounded-2xl shadow-lg max-w-3xl transform transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-semibold mb-4 text-white ">
          Our Legacy of Maritime Excellence
        </h2>
        <p className="text-lg mb-6 text-white opacity-30">
          <span >LUCKTANG International Marine Services Co. (LIMSCO)</span> has been a
          cornerstone of the maritime industry since its founding in 2013. Over
          the past 10 years, we have grown from a local supplier in the Gulf
          Cooperation Council (GCC) region to a globally recognized leader in
          marine services. Our journey has been defined by a relentless
          commitment to quality, integrity, and customer satisfaction.
        </p>
      </div>
    </div>
  );
};

export default Company;
