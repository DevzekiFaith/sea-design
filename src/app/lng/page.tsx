import React from "react";
import Image from "next/image";
import Header from "@/component/Header/Header";
import Footer from "@/components/Footer/Footer";

const LNG: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/images/lng-hero.jpg"
          alt="LNG Services"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex flex-col 
          items-center 
        justify-center text-center text-white p-4 pt-[5.8rem]"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LNG Services</h1>
          <p className="text-lg md:text-xl">
            Delivering innovative and reliable Liquefied Natural Gas solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 pt-[6rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
          LNG Services
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col gap-8">
            <div
              className="relative h-80 w-full transform 
            transition-transform duration-500 hover:scale-105"
            >
              <Image
                src="/images/lng3.jpeg"
                alt="LNG Service 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div
              className="relative h-80 w-full transform 
              transition-transform 
            duration-500 hover:scale-105"
            >
              <Image
                src="/images/lng2.jpg"
                alt="LNG Service 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div
              className="relative h-80 w-full transform 
            transition-transform duration-500 hover:scale-105"
            >
              <Image
                src="/images/lng4.jpg"
                alt="LNG Service 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg mb-6">
              At Lucktang Intl Limited, we are dedicated to providing top-tier
              LNG (Liquefied Natural Gas) services. Our state-of-the-art
              facilities and experienced team ensure efficient and reliable LNG
              operations.
            </p>
            <p className="text-lg mb-6">Our LNG services include:</p>
            <ul className="list-disc list-inside text-lg mb-6">
              <li>LNG Processing</li>
              <li>LNG Storage</li>
              <li>LNG Transportation</li>
              <li>LNG Distribution</li>
              <li>LNG Regasification</li>
            </ul>
            <p className="text-lg mb-6">
              Lucktang Intl Limited has a rich history in the LNG business. Over
              the years, we have built a reputation for excellence and
              reliability in the industry. Our commitment to innovation and
              customer satisfaction has driven our success and growth in the LNG
              sector.
            </p>
            <p className="text-lg mb-6">
              At Lucktang, we prioritize safety, efficiency, and environmental
              sustainability in all our LNG operations. We continuously invest
              in advanced technology and training to ensure our team is equipped
              to handle the complexities of the LNG industry.
            </p>
            <p className="text-lg mb-6">
              Our satisfied clients are a testament to our dedication and
              expertise in the LNG business. We are proud to be a trusted
              partner in the LNG industry, delivering exceptional results on
              every project.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LNG;
