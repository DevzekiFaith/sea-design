import React from "react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Marine and Shipping Management",
    description:
      "We provide comprehensive marine and shipping management services to ensure smooth and efficient operations.",
    route: "/services/marine-shipping-management",
  },
  {
    id: 2,
    title: "Ship Chandler",
    description:
      "Our ship chandler services offer a wide range of supplies and provisions to meet the needs of your vessel.",
    route: "/services/ship-chandler",
  },
  {
    id: 3,
    title:
      "Ship/Port Operation Agent and Freight, Logistics and Shipping Management",
    description:
      "We offer expert ship/port operation agent services along with freight, logistics, and shipping management solutions.",
    route: "/services/ship-port-operation-agent",
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-blue-800 border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p className="mb-4">{service.description}</p>
            <Link
              href={service.route}
              className="text-blue-500 hover:underline"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
