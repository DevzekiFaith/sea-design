"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePageState } from '@/hooks/usePageState';
import Loading from '@/components/Loading/Loading';
import Error from '@/components/Error/Error';

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });
const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

const LNG: React.FC = () => {
  const { isLoading, error, retry, goHome } = usePageState({
    initialLoading: true,
    maxRetries: 3
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Loading 
          message="Loading LNG Services..." 
          size="large" 
          variant="dots" 
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Error
          title="Failed to Load LNG Services"
          message={error}
          onRetry={retry}
          onGoHome={goHome}
          variant="error"
        />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <BackButton />

      {/* Hero Section with Glassmorphism */}
      <div className="relative h-[60vh] md:h-[80vh] w-full mt-20">
        <Image
          src="/images/lng3.jpeg"
          alt="LNG Services"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="glassmorphic p-12 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 display-font">LNG Services</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Delivering innovative and reliable Liquefied Natural Gas solutions for the future of energy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-8 -mt-20 relative z-10">
        {/* Images Section with Neumorphism */}
        <div className="card p-8 mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            Our LNG Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neumorphic p-6 text-center">
              <div className="relative h-64 w-full mb-4 transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/lng3.jpeg"
                  alt="LNG Processing Facility"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Processing Facility</h3>
            </div>
            <div className="neumorphic p-6 text-center">
              <div className="relative h-64 w-full mb-4 transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/LNG2.jpg"
                  alt="LNG Storage Terminal"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Storage Terminal</h3>
            </div>
            <div className="neumorphic p-6 text-center">
              <div className="relative h-64 w-full mb-4 transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/lng4.jpg"
                  alt="LNG Transportation"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Transportation</h3>
            </div>
          </div>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* About LNG Card */}
          <div className="card p-8">
            <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
              About Our LNG Services
            </h3>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              At Lucktang Intl Limited, we are dedicated to providing top-tier
              LNG (Liquefied Natural Gas) services. Our state-of-the-art
              facilities and experienced team ensure efficient and reliable LNG
              operations across the entire value chain.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              We specialize in comprehensive LNG solutions that meet the growing
              demand for clean energy alternatives. Our commitment to innovation
              and excellence has positioned us as a trusted partner in the LNG industry.
            </p>
          </div>

          {/* Services List Card */}
          <div className="card p-8">
            <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
              Our LNG Services
            </h3>
            <div className="space-y-4">
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">LNG Processing</span>
              </div>
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">LNG Storage</span>
              </div>
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">LNG Transportation</span>
              </div>
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">LNG Distribution</span>
              </div>
              <div className="flex items-center p-4 glassmorphic rounded-lg">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                <span className="text-lg text-slate-800 font-medium">LNG Regasification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company History Card */}
        <div className="card p-8 mb-12">
          <h3 className="text-3xl font-bold mb-6 text-slate-800 card-title">
            Our LNG Heritage
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glassmorphic p-6">
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Industry Leadership</h4>
              <p className="text-slate-700 leading-relaxed">
                Lucktang Intl Limited has a rich history in the LNG business. Over
                the years, we have built a reputation for excellence and
                reliability in the industry. Our commitment to innovation and
                customer satisfaction has driven our success and growth in the LNG
                sector.
              </p>
            </div>
            <div className="glassmorphic p-6">
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Innovation & Technology</h4>
              <p className="text-slate-700 leading-relaxed">
                At Lucktang, we prioritize safety, efficiency, and environmental
                sustainability in all our LNG operations. We continuously invest
                in advanced technology and training to ensure our team is equipped
                to handle the complexities of the LNG industry.
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
              expertise in the LNG business. We are proud to be a trusted
              partner in the LNG industry, delivering exceptional results on
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

export default LNG;
