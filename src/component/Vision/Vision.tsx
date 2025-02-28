import React from "react";
import Image from "next/image";

const Vision: React.FC = () => {
  return (
    <div className="bg-black p-8 rounded-2xl shadow-lg flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-4 md:mb-0 md:mr-4 transform transition-transform duration-500 hover:translate-x-2">
          <Image
            src="/images/s2.jpg"
            alt="Vision"
            width={350}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 w-full transform transition-transform duration-500 hover:translate-x-2 hover:scale-x-105">
          <div className="w-[400px] p-8">
            <p className="text-white text-center md:text-left w-[400px]">
              Our vision is to build successful and long-lasting relationships
              based on quality, integrity, commitment, and responsibility. We
              aim to provide the right product, at the right time, and for the
              right price, while also delivering peace of mind to our clients.
              LIMSCO envisions a future where every interaction leads to mutual
              success and trust, creating a strong foundation for ongoing
              collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
