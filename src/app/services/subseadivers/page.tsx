"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

const Header = dynamic(() => import("@/component/Header/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: false });

const SubseaDivers: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <BackButton />
      <div className="container mx-auto p-8 pt-[6rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
          Subsea Divers and Topside Engineering Services
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="relative h-80 w-full">
              <Image
                src="/images/div1.png"
                alt="Subsea Divers Service"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/images/div2.jpg"
                alt="Subsea Divers Service 2"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/images/div3.jpeg"
                alt="Subsea Divers Service 3"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg mb-6">
              At Lucktang Intl Limited, we offer comprehensive subsea divers and
              topside engineering services to meet the diverse needs of our
              clients. Our state-of-the-art equipment and experienced team
              ensure efficient and effective operations.
            </p>
            <p className="text-lg mb-6">
              Our subsea divers and topside engineering services include
            </p>
            <ul className="list-disc list-inside text-lg mb-6">
              <li>Underwater Inspection and Maintenance</li>
              <li>Subsea Construction and Installation</li>
              <li>Pipeline and Cable Laying</li>
              <li>Topside Structural Engineering</li>
              <li>Offshore Platform Maintenance</li>
              <li>ROV (Remotely Operated Vehicle) Operations</li>
            </ul>
            <p className="text-lg mb-6">
              We are committed to delivering high-quality services that meet the
              highest industry standards. Our team works closely with clients to
              understand their specific requirements and provide customized
              solutions that ensure the success of their projects.
            </p>
            <p className="text-lg mb-6">
              With a focus on safety, efficiency, and environmental
              sustainability, we strive to exceed our clients expectations and
              deliver exceptional results on every project.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubseaDivers;
