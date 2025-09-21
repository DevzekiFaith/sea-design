import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

const services = [
  {
    title: "Vessel Clearance",
    description:
      "We provide efficient vessel clearance services to ensure smooth and timely operations at the port.",
    image: "/images/vessel-clearance.jpg",
  },
];

const ShipPortOperationAgent: React.FC = () => {
  return (
    <div>
      <BackButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/images/s8.webp"
          alt="Ship/Port Operation Agent Management"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-80 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ship/Port Operation Agent Management
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Reliable and efficient solutions for smooth maritime operations.
          </p>
          <Link href="/services" legacyBehavior>
            <button className="bg-blue-600 text-white px-6 py-3 
            rounded-full font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer shadow-lg">
              Back to Services
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <p className="text-lg mb-6 text-center">
          We offer expert ship/port operation agent services along with freight,
          logistics, and shipping management solutions. Our team is committed to
          providing efficient and reliable services to ensure the smooth
          operation of your maritime activities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-blue-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:translate-y-2"
            >
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
      </div>
    </div>
  );
};

export default ShipPortOperationAgent;
