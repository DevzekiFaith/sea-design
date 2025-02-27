import React from "react";

const History: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">History</h1>
      <div className="bg-blue-800 p-8 rounded-2xl shadow-lg">
        <p className="text-lg mb-6">
          LIMSCO was established with a clear vision: to provide top-tier
          maritime services and products that meet the highest industry
          standards. From our humble beginnings as a local ship chandling
          company, we have expanded our offerings to include engine spare parts,
          marine logistics and distribution, technical stores, sales and
          purchase services, and provision services. Our growth has been fueled
          by our dedication to understanding the unique needs of each client and
          delivering customized solutions that ensure their success.
        </p>
        <p className="text-lg mb-6">
          Today, LIMSCO operates and has trusted associates in key maritime hubs
          across the globe, including North Europe, Denmark, Germany, Holland,
          Cyprus, Singapore, Greece, Norway, Korea, Africa, China, Hong Kong,
          and the UK. This extensive network allows us to deliver world-class
          services and products to clients wherever they are, with the
          reliability and efficiency that LIMSCO is known for.
        </p>
      </div>
    </div>
  );
};

export default History;
