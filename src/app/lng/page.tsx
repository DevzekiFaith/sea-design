import React from "react";
import Image from "next/image";
import Header from "@/component/Header/Header";
import Footer from "@/components/Footer/Footer";

const LNG: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto p-8 pt-[8rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
          LNG Services
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col gap-8">
            <div className="relative h-80 w-full">
              <Image
                src="/images/lng3.jpeg"
                alt="LNG Service 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-80 w-full">
              <Image
                src="/images/lng2.jpg"
                alt="LNG Service 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="relative h-80 w-full">
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
            <p className="text-lg mb-6">Our LNG services include</p>
            <ul className="list-disc list-inside text-lg mb-6">
              <li>LNG Processing</li>
              <li>LNG Storage</li>
              <li>LNG Transportation</li>
              <li>LNG Distribution</li>
              <li>LNG Regasification</li>
            </ul>
            <p className="text-lg mb-6">
              Lucktang Intl Limited has a rich history in the LNG business.
              Over the years, we have built a reputation for excellence and
              reliability in the industry. Our commitment to innovation and
              customer satisfaction has driven our success and growth in the LNG
              sector.
            </p>
            <p className="text-lg mb-6">
              We have successfully completed numerous LNG projects, delivering
              high-quality services to clients worldwide. Our team of experts
              works closely with clients to understand their specific needs and
              provide customized solutions that meet the highest industry
              standards.
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
