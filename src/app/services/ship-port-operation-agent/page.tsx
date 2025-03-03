import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Vessel Clearance",
    description: "We provide efficient vessel clearance services to ensure smooth and timely operations at the port.",
    image: "/images/vessel-clearance.jpg",
  },
];

const ShipPortOperationAgent: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        Ship/Port Operation Agent Management
      </h1>
      <p className="text-lg mb-6 text-center">
        We offer expert ship/port operation agent services along with freight, logistics, and shipping management solutions. Our team is committed to providing efficient and reliable services to ensure the smooth operation of your maritime activities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-blue-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:translate-y-2">
            <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
              <Image
                src={service.image}
                alt={service.title}
                width={300}
                height={200}
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

export default ShipPortOperationAgent;