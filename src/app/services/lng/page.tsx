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
          message="Loading LNG Plant Services..." 
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
          title="Failed to Load LNG Plant Services"
          message={error}
          onRetry={retry}
          onGoHome={goHome}
          variant="error"
        />
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <Header />
      <BackButton />
      <div className="container mx-auto p-8 pt-[8rem]">
        <h1 className="text-5xl font-bold text-center mb-12 text-slate-800">
          LNG Plant Services
        </h1>
        
        {/* Main Content Card */}
        <div className="card p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Images Section */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/LNG2.jpg"
                  alt="Professional LNG Plant Operations"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 w-full transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/lng3.jpeg"
                    alt="LNG Liquefaction Systems"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                </div>
                <div className="relative h-48 w-full transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/lng4.jpg"
                    alt="LNG Storage and Regasification"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-slate-800">
                  Professional LNG Plant Solutions
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  At Lucktang Intl Limited, we are industry leaders in providing comprehensive 
                  Liquefied Natural Gas (LNG) plant services that meet the global demand for 
                  clean energy solutions. Our state-of-the-art technology, advanced liquefaction 
                  systems, and highly experienced team ensure efficient, safe, and environmentally 
                  responsible LNG operations for various industrial and commercial applications worldwide.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                  Our Comprehensive LNG Plant Services
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-slate-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    LNG Liquefaction Plants
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Cryogenic Storage Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Regasification Terminals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Marine Loading Facilities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    LNG Transportation Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Gas Processing & Treatment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Safety & Emergency Systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Environmental Compliance
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                  Why Choose Lucktang for LNG Plants?
                </h3>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                  We are committed to delivering high-quality LNG plant services that exceed 
                  the highest industry standards. Our team of certified professionals works 
                  closely with clients to understand their specific requirements and provide 
                  customized solutions that ensure the success of their global energy projects.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                  With a strong focus on safety, operational efficiency, and environmental 
                  sustainability, we utilize advanced LNG technologies and methodologies 
                  to minimize environmental impact while maximizing energy efficiency. Our 
                  comprehensive approach includes detailed project planning, risk assessment, 
                  and continuous monitoring throughout the LNG plant development process.
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                  Our track record speaks for itself - we have successfully completed numerous 
                  LNG plant projects across different continents, from small-scale facilities 
                  to large-scale export terminals. We strive to exceed our clients expectations 
                  and deliver exceptional results on every project, ensuring long-term value and 
                  operational success in the global LNG market.
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

