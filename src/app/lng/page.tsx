"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

const LNG: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full mt-20">
        <Image
          src="/images/lng3.jpeg"
          alt="LNG Services"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex flex-col 
          items-center 
        justify-center text-center text-white p-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 display-font">LNG Services</h1>
          <p className="text-lg md:text-xl">
            Delivering innovative and reliable Liquefied Natural Gas solutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8">
        <div className="card p-8 mb-8">
          <h1 className="text-4xl font-bold text-center mb-8 card-title">
            LNG Services
          </h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex flex-col gap-8">
              <div className="card p-4">
                <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/lng3.jpeg"
                    alt="LNG Service 1"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="card p-4">
                <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/lng2.jpg"
                    alt="LNG Service 2"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="card p-4">
                <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/lng4.jpg"
                    alt="LNG Service 3"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="card p-6 mb-6">
                <p className="card-content">
                  At Lucktang Intl Limited, we are dedicated to providing top-tier
                  LNG (Liquefied Natural Gas) services. Our state-of-the-art
                  facilities and experienced team ensure efficient and reliable LNG
                  operations.
                </p>
              </div>
              
              <div className="card p-6 mb-6">
                <h3 className="card-title mb-4">Our LNG services include:</h3>
                <ul className="list-disc list-inside card-content space-y-2">
                  <li>LNG Processing</li>
                  <li>LNG Storage</li>
                  <li>LNG Transportation</li>
                  <li>LNG Distribution</li>
                  <li>LNG Regasification</li>
                </ul>
              </div>
              
              <div className="card p-6 mb-6">
                <p className="card-content">
                  Lucktang Intl Limited has a rich history in the LNG business. Over
                  the years, we have built a reputation for excellence and
                  reliability in the industry. Our commitment to innovation and
                  customer satisfaction has driven our success and growth in the LNG
                  sector.
                </p>
              </div>
              
              <div className="card p-6 mb-6">
                <p className="card-content">
                  At Lucktang, we prioritize safety, efficiency, and environmental
                  sustainability in all our LNG operations. We continuously invest
                  in advanced technology and training to ensure our team is equipped
                  to handle the complexities of the LNG industry.
                </p>
              </div>
              
              <div className="card p-6">
                <p className="card-content">
                  Our satisfied clients are a testament to our dedication and
                  expertise in the LNG business. We are proud to be a trusted
                  partner in the LNG industry, delivering exceptional results on
                  every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LNG;
