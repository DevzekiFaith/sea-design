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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Ship Chandler</h1>
      <div className="p-6 w-[500px] m-auto">
        <p className="text-lg mb-6 text-center">
          Our ship chandler services offer a wide range of supplies and
          provisions to meet the needs of your vessel. We ensure that your
          vessel is fully stocked with high-quality products and supplies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-[#020403] p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:translate-y-2"
          >
            <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-2/3 text-white">
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p className="text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/services" className="text-blue-500 hover:underline">
          Back to Services
        </Link>
      </div>
    </div>
  );
};

export default ShipChandler;
