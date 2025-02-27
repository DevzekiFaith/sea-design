import React from "react";

const Company: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Company Overview</h1>
      <div className="bg-blue-600 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">
          Our Legacy of Maritime Excellence
        </h2>
        <p className="text-lg mb-6">
          LUCKTANG International Marine Services Co. (LIMSCO) has been a
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
