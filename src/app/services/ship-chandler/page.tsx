import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Lubricants",
    description:
      "We provide high-quality lubricants to ensure the smooth operation of your vessel's machinery.",
    image: "/images/lubricants.jpg",
  },
  {
    title: "Fresh Water",
    description:
      "Our fresh water supply services ensure that your vessel is always stocked with clean and safe water.",
    image: "/images/fresh-water.jpg",
  },
  {
    title: "Bunkering of Vessels",
    description:
      "We offer bunkering services to supply fuel to your vessels efficiently and safely.",
    image: "/images/bunkering.jpg",
  },
];

const ShipChandler: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/images/bs 1.webp"
          alt="Ship Chandler Services"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Ship Chandler</h1>
          <p className="text-base md:text-xl">
            Comprehensive supplies and provisions for your vessel's needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <div className="p-4 md:p-6 max-w-md md:max-w-lg mx-auto">
          <p className="text-base md:text-lg mb-6 text-center">
            Our ship chandler services offer a wide range of supplies and
            provisions to meet the needs of your vessel. We ensure that your
            vessel is fully stocked with high-quality products and supplies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-[#020403] p-4 md:p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:translate-y-2"
            >
              <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3 text-white text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-sm md:text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" legacyBehavior>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Back to Services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShipChandler;
