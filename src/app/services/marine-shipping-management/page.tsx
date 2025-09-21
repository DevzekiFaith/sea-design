import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const BackButton = dynamic(() => import("@/components/BackButton/BackButton"), { ssr: false });

const services = [
  {
    title: "Service Boat",
    description:
      "We provide reliable and efficient service boats for various marine operations.",
    image: "/images/service-boat.jpg",
  },
  {
    title: "Offshore Tugboats",
    description:
      "Our offshore tugboats are equipped to handle a wide range of towing and support operations.",
    image: "/images/offshore-tugboat.jpg",
  },
  {
    title: "Security Vessel Hiring",
    description:
      "We offer security vessel hiring services to ensure the safety and security of your maritime operations.",
    image: "/images/security-vessel.jpg",
  },
  {
    title: "Yachts",
    description:
      "Our yachts are available for hire, providing luxury and comfort for your maritime adventures.",
    image: "/images/yacht.jpg",
  },
  {
    title: "Tanker Vessel",
    description:
      "We provide tanker vessels for the transportation of liquid cargo.",
    image: "/images/tanker-vessel.jpg",
  },
  {
    title: "Bulk Carrier",
    description:
      "Our bulk carriers are designed to transport large quantities of bulk cargo efficiently.",
    image: "/images/bulk-carrier.jpg",
  },
  {
    title: "Container Ship",
    description:
      "We offer container ships for the transportation of containerized cargo.",
    image: "/images/container-ship.jpg",
  },
  {
    title: "Fishing Boats Troller",
    description:
      "Our fishing boats troller are equipped for commercial fishing operations.",
    image: "/images/fishing-boat.jpg",
  },
];

const MarineShippingManagement: React.FC = () => {
  return (
    <div>
      <BackButton />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <Image
          src="/images/s10.jpg"
          alt="Marine and Shipping Management"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Marine and Shipping Management
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Comprehensive solutions for smooth and efficient maritime
            operations.
          </p>
          <Link href="/services" legacyBehavior>
            <button className="flex items-center bg-blue-800 text-white px-4 py-2 rounded-full font-semibold
             hover:bg-blue-700 transition transform duration-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Services
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <p className="text-lg mb-6 text-center">
          We provide comprehensive marine and shipping management services to
          ensure smooth and efficient operations. Our team of experts is
          dedicated to delivering top-notch services that meet the highest
          industry standards.
        </p>
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

export default MarineShippingManagement;
