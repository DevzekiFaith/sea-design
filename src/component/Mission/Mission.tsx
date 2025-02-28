import React from "react";

const Mission: React.FC = () => {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Our Mission
      </h2>
      <div className="bg-black p-8 rounded-2xl shadow-lg max-w-3xl">
        <p className="text-lg text-gray-700 text-center">
          <span className="text-white">LIMSCO’s mission</span> is to
          continuously evolve and exceed client expectations by understanding
          and fulfilling their specific needs and requirements. We are dedicated
          to delivering not just products and services, but also a deep
          understanding of our clients’ operations, ensuring that they receive
          tailored solutions that truly make a difference.
        </p>
      </div>
    </div>
  );
};

export default Mission;
