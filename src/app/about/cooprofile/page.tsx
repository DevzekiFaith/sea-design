import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/component/Header/Header";
import Footer from "@/components/Footer/Footer";

const COOProfile: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto p-8 pt-[8rem]">
        <Link href="/" legacyBehavior>
          <button
            className="bg-blue-600 text-white px-4 py-2 
          rounded-full font-semibold hover:bg-blue-700 
          transition duration-300 mb-4 cursor-pointer"
          >
            ← Back to Team
          </button>
        </Link>
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
          COO Profile
        </h1>
        <div className="flex flex-col md:flex-row items-center p-8 rounded-2xl shadow-2xl">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
            <Image
              src="/images/coo1.jpg"
              alt="COO"
              width={400}
              height={400}
              className="rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="md:w-2/3 text-white">
            <h2 className="text-3xl font-semibold mb-4">Njideka Nwalor</h2>
            <p className="text-lg mb-4">
              <strong>Position:</strong> COO, Lucktang Intl Limited
            </p>
            <p className="text-lg mb-4">
              <strong>Ranking:</strong> BSC, BSN, Hon. D.N
            </p>
            <p className="text-lg mb-6">
              Njideka Nwalor is the Chief Operating Officer (COO) of Lucktang
              Intl Limited. With extensive experience in the marine industry,
              she oversees the companys operations, ensuring efficiency and
              effectiveness in all processes.
            </p>
            <p className="text-lg mb-6">
              Under her leadership, Lucktang has streamlined its operations and
              enhanced its service delivery, contributing significantly to the
              companys growth and success. Her strategic vision and operational
              expertise have been pivotal in driving the companys mission
              forward.
            </p>
            <p className="text-lg mb-6">
              Njideka Nwalor holds several prestigious qualifications, including
              BSC, BSN, and Hon. D.N. Her dedication to excellence and her
              ability to lead and inspire her team have earned her respect and
              recognition in the industry.
            </p>
            <p className="text-lg mb-6">
              At Lucktang, she has played a crucial role in building a culture
              of integrity, innovation, and customer focus. Her commitment to
              delivering high-quality services and solutions has helped
              establish Lucktang as a trusted name in the marine industry.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default COOProfile;
