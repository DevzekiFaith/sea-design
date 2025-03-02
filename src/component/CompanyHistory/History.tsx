import React from "react";
import Image from "next/image";

const History: React.FC = () => {
  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
        History
      </h1>
      <div className="bg-black p-8 shadow-lg flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-4 transform transition-transform duration-500 hover:scale-x-105">
            <Image
              src="/images/s5.jpg"
              alt="Company History"
              width={500}
              height={500}
              className="rounded-lg w-full md:w-auto"
            />
          </div>
          <div className="md:w-1/2 w-full transform transition-transform duration-500 hover:scale-x-105">
            <div className="w-full md:w-[600px] p-8">
              <p className="text-lg mb-6 text-white text-center md:text-left">
                LIMSCO was established with a clear vision: to provide top-tier
                maritime services and products that meet the highest industry
                standards. From our humble beginnings as a local ship chandling
                company, we have expanded our offerings to include engine spare
                parts, marine logistics and distribution, technical stores,
                sales and purchase services, and provision services. Our growth
                has been fueled by our dedication to understanding the unique
                needs of each client and delivering customized solutions that
                ensure their success.
              </p>
              <p className="text-lg mb-6 text-white text-center md:text-left">
                Today, LIMSCO operates and has trusted associates in key
                maritime hubs across the globe, including North Europe, Denmark,
                Germany, Holland, Cyprus, Singapore, Greece, Norway, Korea,
                Africa, China, Hong Kong, and the UK. This extensive network
                allows us to deliver world-class services and products to
                clients wherever they are, with the reliability and efficiency
                that LIMSCO is known for.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
