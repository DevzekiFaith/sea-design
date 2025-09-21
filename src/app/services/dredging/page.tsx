"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });
const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

const Dredging: React.FC = () => {
  return (
    <div className="bg-white text-slate-800 min-h-screen">
      <Header />
      <BackButton />
      <div className="container mx-auto p-8 pt-[8rem]">
        <h1 className="text-5xl font-bold text-center mb-12 text-slate-800">
          Dredging Services
        </h1>
        
        {/* Main Content Card */}
        <div className="card p-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Images Section */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="relative h-80 w-full transform transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/dreg1.jpg"
                  alt="Professional Dredging Operations"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 w-full transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/dreg2.jpg"
                    alt="Advanced Dredging Equipment"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                  />
                </div>
                <div className="relative h-48 w-full transform transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/dreg3.jpeg"
                    alt="Environmental Dredging Solutions"
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
                  Professional Dredging Solutions
                </h2>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  At Lucktang Intl Limited, we are industry leaders in providing comprehensive 
                  dredging services that meet the diverse and complex needs of our clients. 
                  Our state-of-the-art equipment, cutting-edge technology, and highly experienced 
                  team ensure efficient, safe, and environmentally responsible dredging operations 
                  across various marine and inland water environments.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                  Our Comprehensive Dredging Services
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg text-slate-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Maintenance Dredging
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Capital Dredging
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Environmental Dredging
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Beach Nourishment
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Land Reclamation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Port and Harbor Development
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Channel Deepening
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Contaminated Sediment Removal
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">
                  Why Choose Lucktang for Dredging?
                </h3>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                  We are committed to delivering high-quality dredging services that exceed 
                  the highest industry standards. Our team of certified professionals works 
                  closely with clients to understand their specific requirements and provide 
                  customized solutions that ensure the success of their projects.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mb-4">
                  With a strong focus on safety, operational efficiency, and environmental 
                  sustainability, we utilize advanced dredging technologies and methodologies 
                  to minimize environmental impact while maximizing project outcomes. Our 
                  comprehensive approach includes detailed project planning, risk assessment, 
                  and continuous monitoring throughout the dredging process.
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                  Our track record speaks for itself - we have successfully completed numerous 
                  dredging projects across different environments, from shallow coastal areas 
                  to deep-water ports. We strive to exceed our clients expectations and 
                  deliver exceptional results on every project, ensuring long-term value and 
                  operational success.
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

export default Dredging;
