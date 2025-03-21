import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/component/Header/Header";

const Gas: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto p-8 pt-[6rem]">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-500">
          Gas Plant Services
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-lg font-semibold mb-4 text-blue-400">
              LNG Gas Service Plant
            </h2>
            <div className="relative h-64 mb-4">
              <Image
                src="/images/LNG2.jpg"
                alt="LNG Gas Plant"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg mb-6">
              Our LNG (Liquefied Natural Gas) gas service plant is equipped with
              state-of-the-art technology to provide efficient and reliable gas
              services. We ensure the highest standards of safety and quality in
              our operations, delivering LNG solutions that meet the needs of
              our clients.
            </p>
            <p className="text-lg mb-6">
              Our LNG services include gas processing, storage, and
              distribution. We cater to a wide range of industries, providing
              customized solutions to meet their specific requirements. Our team
              of experts is dedicated to ensuring the smooth and efficient
              operation of our LNG plant.
            </p>
            <div className="flex justify-center">
              <Link href="/lng" legacyBehavior>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-lg font-semibold mb-4 text-blue-400">
              CNG Gas Service Plant
            </h2>
            <div className="relative h-64 mb-4">
              <Image
                src="/images/cng1.jpg"
                alt="CNG Gas Plant"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <p className="text-lg mb-6">
              Our CNG (Compressed Natural Gas) gas service plant is designed to
              provide high-quality gas services with a focus on efficiency and
              sustainability. We utilize advanced technology to compress natural
              gas, making it easier to store and transport.
            </p>
            <p className="text-lg mb-6">
              Our CNG services include gas compression, storage, and
              distribution. We serve various industries, offering tailored
              solutions to meet their unique needs. Our team of professionals is
              committed to maintaining the highest standards of safety and
              reliability in our CNG operations.
            </p>
            <div className="flex justify-center">
              <Link href="/cng" legacyBehavior>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gas;
