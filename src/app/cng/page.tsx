"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });
const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

const CNG: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <BackButton />

      {/* Hero Section with Glassmorphism */}
      <div className="relative h-[60vh] md:h-[80vh] w-full mt-20">
        <Image
          src="/images/s8.webp"
          alt="CNG Services"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="glassmorphic p-12 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 display-font">CNG Services</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Delivering reliable and efficient Compressed Natural Gas solutions for sustainable energy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 -mt-20 relative z-10">
        {/* Images Section with Neumorphism */}
        <div className="card p-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Our CNG Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neumorphic p-6 text-center">
              <div className="relative h-64 w-full mb-4 transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/cng1.jpg"
                  alt="CNG Processing Plant"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Processing Plant</h3>
            </div>
            <div className="neumorphic p-6 text-center">
              <div className="relative h-64 w-full mb-4 transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/cng2.webp"
                  alt="CNG Storage Facility"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Storage Facility</h3>
            </div>
            <div className="neumorphic p-6 text-center">
              <div className="relative h-64 w-full mb-4 transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/cng3.jpg"
                  alt="CNG Distribution Network"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Distribution Network</h3>
            </div>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* About CNG Card */}
          <div className="card p-8">
            <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
              About Our CNG Services
            </h3>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              At Lucktang Intl Limited, we are dedicated to providing top-tier
              CNG (Compressed Natural Gas) services. Our state-of-the-art
              facilities and experienced team ensure efficient and reliable CNG
              operations across the entire supply chain.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              We specialize in comprehensive CNG solutions that provide clean,
              cost-effective, and environmentally friendly energy alternatives.
              Our commitment to innovation and excellence has made us a trusted
              partner in the CNG industry.
            </p>
          </div>

          {/* Services List Card */}
          <div className="card p-8">
            <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
              Our CNG Services
            </h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">CNG Processing</span>
              </div>
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">CNG Storage</span>
              </div>
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">CNG Transportation</span>
              </div>
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">CNG Distribution</span>
              </div>
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">CNG Compression</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company History Card */}
        <div className="card p-8 mb-12">
          <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
            Our CNG Heritage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphic p-6">
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Industry Leadership</h4>
              <p className="text-slate-700 leading-relaxed">
                Lucktang Intl Limited has a rich history in the CNG business. Over
                the years, we have built a reputation for excellence and
                reliability in the industry. Our commitment to innovation and
                customer satisfaction has driven our success and growth in the CNG
                sector.
              </p>
            </div>
            <div className="glassmorphic p-6">
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Innovation & Technology</h4>
              <p className="text-slate-700 leading-relaxed">
                At Lucktang, we prioritize safety, efficiency, and environmental
                sustainability in all our CNG operations. We continuously invest
                in advanced technology and training to ensure our team is equipped
                to handle the complexities of the CNG industry.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Card */}
        <div className="card p-8">
          <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
            Our Commitment to Excellence
          </h3>
          <div className="neumorphic p-8 text-center">
            <p className="text-xl leading-relaxed text-slate-700">
              Our satisfied clients are a testament to our dedication and
              expertise in the CNG business. We are proud to be a trusted
              partner in the CNG industry, delivering exceptional results on
              every project while maintaining the highest standards of safety,
              environmental responsibility, and operational excellence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CNG;
