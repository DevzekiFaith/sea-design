import React from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Air Freight",
    description:
      "We provide reliable and efficient air freight services to ensure your goods are delivered on time.",
    image: "/images/f8.jpg",
  },
  {
    title: "Sea Freight",
    description:
      "Our sea freight services offer cost-effective solutions for transporting large volumes of goods.",
    image: "/images/se2.jpg",
  },
  {
    title: "Haulage and Logistics",
    description:
      "We offer comprehensive haulage and logistics services to meet your transportation needs.",
    image: "/images/h1.webp",
  },
  {
    title: "Clearing and Forwarding",
    description:
      "Our clearing and forwarding services ensure smooth customs clearance and timely delivery of your goods.",
    image: "/images/cf2.webp",
  },
  {
    title: "Import and Export",
    description:
      "We provide expert import and export services to facilitate international trade.",
    image: "/images/import-export.jpg",
  },
  {
    title: "Custom Brokerage",
    description:
      "Our custom brokerage services help you navigate complex customs regulations and procedures.",
    image: "/images/custom-brokerage.jpg",
  },
  {
    title: "International Freight",
    description:
      "We offer international freight services to transport your goods across borders efficiently.",
    image: "/images/international-freight.jpg",
  },
  {
    title: "Documentation",
    description:
      "Our documentation services ensure that all necessary paperwork is completed accurately and on time.",
    image: "/images/documentation.jpg",
  },
  {
    title: "Warehousing",
    description:
      "We provide secure warehousing solutions to store your goods safely.",
    image: "/images/warehousing.jpg",
  },
  {
    title: "Packaging",
    description:
      "Our packaging services ensure that your goods are packed securely for transportation.",
    image: "/images/packaging.jpg",
  },
];

const ShipPortOperationAgent: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="xl:w-[600px] text-center mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Freight, Logistics and Shipping
          Management
        </h1>
      </div>
      <div className="xl:w-[600px] text-center mx-auto">
        <p className="text-lg mb-6">
          We offer expert ship/port operation agent services along with freight,
          logistics, and shipping management solutions. Our team is committed to
          providing efficient and reliable services to ensure the smooth
          operation of your maritime activities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-[#020403] p-6 rounded-lg shadow-lg"
          >
            <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={600}
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
