"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

const CEOProfile: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto p-8 pt-[8rem]">
        <Link href="/" legacyBehavior>
          <button
            className="bg-blue-600 text-white px-4 py-2 
          rounded-full font-semibold hover:bg-blue-700 transition 
          duration-300 mb-4 cursor-pointer"
          >
            ← Back to Team
          </button>
        </Link>
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
          CEO Profile
        </h1>
        <div className="flex flex-col md:flex-row items-center p-8 rounded-2xl shadow-lg">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
            <Image
              src="/images/ceo3.jpg"
              alt="CEO"
              width={400}
              height={400}
              className="rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-2/3 text-white">
            <h2 className="text-3xl font-semibold mb-4">
              Prince (Dr) Andrew Lucky Eseigbe IGBERAESE
            </h2>
            <p className="text-lg mb-4">
              <strong>Position</strong> CEO, Lucktang Intl Limited
            </p>
            <p className="text-lg mb-4">
              <strong>Ranking</strong> D. Engr, M, SC, FCP, MIEEE, FIMC, CMC
            </p>
            <p className="text-lg mb-6">
              Prince (Dr) Andrew Lucky Eseigbe IGBERAESE is the visionary leader
              and CEO of Lucktang Intl Limited. With over 20 years of
              experience in the marine industry, he has built a reputable brand
              known for innovation, excellence, and commitment to quality.
            </p>
            <p className="text-lg mb-6">
              Under his leadership, Lucktang has grown to become a trusted name
              in the marine industry, providing top-tier maritime services and
              products. His dedication to understanding the unique needs of each
              client and delivering customized solutions has been instrumental
              in the companys success.
            </p>
            <p className="text-lg mb-6">
              Prince (Dr) Andrew Lucky Eseigbe IGBERAESE holds several
              prestigious rankings and certifications, including D. Engr, M, SC,
              FCP, MIEEE, FIMC, and CMC. His expertise and innovative approach
              have earned him recognition and respect in the industry.
            </p>
            <p className="text-lg mb-6">
              At Lucktang, he has fostered a culture of excellence, integrity,
              and customer focus. The brand name built over time reflects the
              companys commitment to delivering high-quality services and
              solutions that empower businesses to achieve their goals.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CEOProfile;
