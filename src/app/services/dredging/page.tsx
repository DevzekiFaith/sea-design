import React from "react";
import Image from "next/image";
import Header from "@/component/Header/Header";
import Footer from "@/components/Footer/Footer";

const Dredging: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto p-8 pt-[8rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
          Dredging Services
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="relative h-60 w-full">
              <Image
                src="/images/dreg1.jpg"
                alt="Dredging Service 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-60 w-full">
              <Image
                src="/images/dreg2.jpg"
                alt="Dredging Service 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-60 w-full">
              <Image
                src="/images/dreg3.jpeg"
                alt="Dredging Service 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-lg mb-6">
              At Lucktang Int'l Limited, we offer comprehensive dredging services to meet the diverse needs of our clients. Our state-of-the-art equipment and experienced team ensure efficient and effective dredging operations.
            </p>
            <p className="text-lg mb-6">
              Our dredging services include:
            </p>
            <ul className="list-disc list-inside text-lg mb-6">
              <li>Maintenance Dredging</li>
              <li>Capital Dredging</li>
              <li>Environmental Dredging</li>
              <li>Beach Nourishment</li>
              <li>Land Reclamation</li>
              <li>Port and Harbor Development</li>
            </ul>
            <p className="text-lg mb-6">
              We are committed to delivering high-quality dredging services that meet the highest industry standards. Our team works closely with clients to understand their specific requirements and provide customized solutions that ensure the success of their projects.
            </p>
            <p className="text-lg mb-6">
              With a focus on safety, efficiency, and environmental sustainability, we strive to exceed our clients' expectations and deliver exceptional results on every project.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dredging;