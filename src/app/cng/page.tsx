import React from "react";
import Image from "next/image";
import Header from "@/component/Header/Header";
import Footer from "@/components/Footer/Footer";

const CNG: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/images/s8.webp"
          alt="CNG Services"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div
          className="absolute inset-0 bg-black opacity-80 flex flex-col 
        items-center justify-center text-center text-white p-4 pt-[6.5rem]"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CNG Services</h1>
          <p className="text-lg md:text-xl">
            Delivering reliable and efficient Compressed Natural Gas solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 pt-[6rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
          CNG Services
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/cng1.jpg"
                alt="CNG Service 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/cng2.webp"
                alt="CNG Service 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/images/cng3.jpg"
                alt="CNG Service 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center gap-5">
            <p className="text-lg mb-6 mt-[5rem]">
              At Lucktang Intl Limited, we are dedicated to providing top-tier
              CNG (Compressed Natural Gas) services. Our state-of-the-art
              facilities and experienced team ensure efficient and reliable CNG
              operations.-PM
            </p>
            <p className="text-lg mb-6">Our CNG services include:</p>
            <ul className="list-disc list-inside text-lg mb-6">
              <li>CNG Processing</li>
              <li>CNG Storage</li>
              <li>CNG Transportation</li>
              <li>CNG Distribution</li>
              <li>CNG Compression</li>
            </ul>
            <p className="text-lg mb-6">
              Lucktang Intl Limited has a rich history in the CNG business. Over
              the years, we have built a reputation for excellence and
              reliability in the industry. Our commitment to innovation and
              customer satisfaction has driven our success and growth in the CNG
              sector.
            </p>
            <p className="text-lg mb-6">
              At Lucktang, we prioritize safety, efficiency, and environmental
              sustainability in all our CNG operations. We continuously invest
              in advanced technology and training to ensure our team is equipped
              to handle the complexities of the CNG industry.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CNG;
